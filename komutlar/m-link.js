const Discord = require('discord.js');
const db = require('quick.db');
const fynx = require("../ayarlar/bot.json");



exports.run = async(client, message, args) => {
  
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`<a:hayir:699131258378256465> Bu komudu kullanabilmek için "Sunucuyu Yönet" yetkisine sahip olman gerek.`)
  if (!args[0]) return message.channel.send(`<a:hayir:699131258378256465> Reklam Filtresini Ayarlamak İçin \`${prefix}link aç\` | Kapatmak İstiyorsanız \`${prefix}link kapat\` Yazabilirsiniz`)
  if (args[0] !== 'aç' && args[0] !== 'kapat') return message.channel.send(`<a:hayir:699131258378256465> Reklam Filtresini Ayarlamak İçin \`${prefix}link aç\` | Kapatmak İstiyorsanız \`${prefix}link kapat\` Yazabilirsiniz`)

    if (args[0] == 'aç') {
    db.set(`reklamFiltre_${message.guild.id}`, 'acik')
    let i = await db.fetch(`reklamFiltre_${message.guild.id}`)
  message.channel.send(`<a:evet:699131398170214501> **Reklam Filtresi başarıyla ayarlandı.**`)    
     
  } 

  if (args[0] == 'kapat') {
    
    let üye = await db.fetch(`reklamFiltre_${message.guild.id}`)
    if (!üye) return message.channel.send(`Reklam filtresini açtığına emin misin?.`)
    
    
    db.delete(`reklamFiltre_${message.guild.id}`)
    
    message.channel.send(`<a:evet:699131398170214501> **Reklam Filtresini Kapattım.**`)
  }
 
};

exports.config = {
name: "link",
aliases: ["reklam-engel","reklamengel"]
};