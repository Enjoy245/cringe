const Discord = require('discord.js');
const db = require('quick.db')
const fynx = require("../ayarlar/bot.json");

exports.run = async(client, message, args) => {

  let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || fynx.prefix
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hayir:699131258378256465> Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  if (db.fetch(`küfürE_${message.channel.id}`)) {
  return message.reply(`<a:hayir:699131258378256465>  **Bu özellik bu kanalda zaten açıkmış!**`)
}
  db.set(`küfürE_${message.channel.id}`, "aktif")
  message.reply(`<a:evet:699131398170214501> **Bu özellik bu kanalda başarıyla açıldı. Kapatmak istersen ${prefix}küfürkapat**`)
};
exports.config = {
 name: 'küfür',
  aliases: ['küfür-engel',"küfür-aç"]

};