const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hayir:699131258378256465> **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
 const rol = db.fetch(`sayacS_${message.guild.id}`)  
 if(!rol) return message.reply(`<a:hayir:699131258378256465>  **Bu özellik zaten kapalı!  **`)
 
 
  message.channel.send(`<a:evet:699131398170214501>  **Sayaç başarılı bir şekilde kapatıldı.**`)

 
  db.delete(`sayacS_${message.guild.id}`)  
  db.delete(`sayacK_${message.guild.id}`)  
  db.delete(`sayacBB_${message.guild.id}`) 
  db.delete(`sayacHG_${message.guild.id}`)  
};
exports.config = {
  name: 'sayaç-kapat',
  aliases: ["sayac-kapat","sayackapat","sayaçkapat","sayaçkapa","sayaç-kapa","sayac-kapa"]
};
