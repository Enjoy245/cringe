const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar/bot.json');
 
exports.run = async(client, message, args) => {

let prefix = ayarlar.prefix
  
  
  if (!args[0]) {
    const sa = new Discord.MessageEmbed()
    .setColor("#ff00f0")
    .setDescription(`<a:hayir:699131258378256465> Kanal koruma sistemi açmak için: ${prefix}kanal-koruma aç/kapat`)
    .setTimestamp()
    return message.channel.send(sa)
  }
  if (args[0] === 'aç') {
    
    db.set(`kanalk_${message.guild.id}`, "Aktif")
       const sa = new Discord.MessageEmbed()
       .setColor("#ff00f0")
    .setDescription(`<a:evet:699131398170214501> Kanal koruma sistemi başarıyla açıldı!`)
    .setTimestamp()
    return message.channel.send(sa)
  }
   if (args[0] === 'kapat') {
    
    db.delete(`kanalk_${message.guild.id}`)
       const sa = new Discord.MessageEmbed()
       .setColor("#ff00f0")
    .setDescription(`<a:evet:699131398170214501> Kanal koruma sistemi başarıyla Kapatıldı!`)
    .setTimestamp()
    return message.channel.send(sa)
  }
};
exports.config = {
name: "kanal-koruma",
aliases: []
};