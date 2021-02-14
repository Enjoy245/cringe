const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
const fynx = require("../ayarlar/bot.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix   
let kanal = message.mentions.channels.first() 
let sayı = args[1]
let kalan = args[1] - message.guild.memberCount
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hayir:699131258378256465> **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
 
 if(!kanal) return message.channel.send(`<a:hayir:699131258378256465>  **Lütfen Bir Kanal Belirt!** \n**__Örnek Kullanım__** : \`${prefix}sayaç-ayarla #kanal <Sayı>\``)
  
 if(isNaN(args[1])) return message.channel.send(`<a:hayir:699131258378256465>  **Belirttiğin Sayı Çok Küçük Veya O Sayıya Zaten Ulaşmışsın!**\n**__Örnek Kullanım__** : \`${prefix}sayaç-ayarla #kanal <Sayı>\``)
 
 if(message.guild.memberCount > args[1]) return message.channel.send(`<a:hayir:699131258378256465>  **Belirttiğin Sayı Çok Küçük Veya O Sayıya Zaten Ulaşmışsın!**\n**__Örnek Kullanım__** : \`${prefix}sayaç-ayarla #kanal <Sayı>\``)

 
  message.channel.send(`<a:evet:699131398170214501> Sayaç Aktif Edildi.
<a:evet:699131398170214501> Hedefi **${args[1]}** Olarak Güncelledim! 
<a:evet:699131398170214501> Sayaç Kanalını **${kanal}** Olarak Güncelledim! 
<a:evet:699131398170214501> ${args[1]} Kişi Olmaya Son **${kalan}** Kişi Kaldı!
<a:evet:699131398170214501> Kapatmak İçin **${prefix}sayaç-kapat**`)

  
  db.set(`sayacK_${message.guild.id}`, kanal.id)  
  db.set(`sayacS_${message.guild.id}`, sayı) 
};

exports.config = {
  name: 'sayaç-ayarla',
  aliases: ["sayaçayarla","sayac-ayarla","sayacayarla","sayaç","sayac"]
};

