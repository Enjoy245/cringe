const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar/bot.json');


exports.run = async (client, message, args) => {
let prefix = ayarlar.prefix
   if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('<a:hayir:699131258378256465> Bu komutu kullanabilmek için `Sunucuyu yönet` yetkisine sahip olmalıısn')
  
   let kanal = message.mentions.channels.first() || args[0]
   if(!kanal) return message.channel.send(
     new Discord.MessageEmbed()
     .setColor("#ff00f0")
     .setDescription('<a:hayir:699131258378256465> Güvenlik mesajlarının gideceği kanalı etiketlemedin.'))
   else {
    db.set(`güvenlik.${message.guild.id}`, kanal.id)
    return message.channel.send(
      new Discord.MessageEmbed()
      .setColor("#ff00f0")
      .setDescription('<a:evet:699131398170214501> Güvenlik kanalı <#'+kanal+'> olarak ayarlandı. Kapatmak için: güvenlik-sıfırla'))
   }
   if(args[0] === 'sıfırla') {
    db.delete(`güvenlik.${message.guild.id}`)
     const sıfırladın = new Discord.MessageEmbed()
     .setColor("#ff00f0")
     .setDescription('<a:evet:699131398170214501> Güvenlik kanalı başarıyla sıfırlandı.')
    message.channel.send(sıfırladın);
   }
}

exports.config = {
name: "güvenlik",
aliases: []
};