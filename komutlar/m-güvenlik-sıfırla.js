const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hayir:699131258378256465> **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
 const kapat = db.fetch(`güvenlik.${message.guild.id}`)  
 if(!kapat) return message.reply(`<a:hayir:699131258378256465>  **Bu özellik zaten kapalı!  **`)
 
 
  message.channel.send(`<a:evet:699131398170214501>  **Güvenlik başarılı bir şekilde kapatıldı.**`)

 
  db.delete(`güvenlik.${message.guild.id}`)  
   
};

exports.config = {
name: "güvenlik-sıfırla",
aliases: []
};