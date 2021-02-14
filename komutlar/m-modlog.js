const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require("../ayarlar/bot.json");

exports.run = async(client, message, args) => {
  const prefix = ayarlar.prefix;
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hayir:699131258378256465> **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);

let logk = message.mentions.channels.first();
let logkanal = await db.fetch(`log_${message.guild.id}`)
  
  if (args[0] === "sıfırla" || args[0] === "kapat") {
    if(!logkanal) return message.channel.send(`<a:hayir:699131258378256465> **Modlog Kanalı Zaten ayarlı değil**`);
    db.delete(`log_${message.guild.id}`)
   message.channel.send(`<a:evet:699131398170214501> **ModLog Kanalı başarıyla sıfırlandı.**`);
  
    return
  }
  
if (!logk) return message.channel.send(`<a:hayir:699131258378256465> **Bir modlog kanalı belirtmelisin.**`);

db.set(`log_${message.guild.id}`, logk.id)

message.channel.send(`**Mod-Log kanalı başarıyla ${logk} olarak ayarlandı, Kapatmak için ${prefix}modlog kapat**`);
 message.react('<a:evet:699131398170214501>')

};

exports.config = {
    name: "modlog",
    aliases: ['mod-log','modlog','log-ayarlama','logayarla','log',]
}