const Discord = require('discord.js');
const ayarlar = require('../ayarlar/bot.json');
const db = require('quick.db');


exports.run = async(client, message, args) => {

  
 let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix
  var guild = message.guild;
  var banlayan = message.author.tag;
  let banxx = await message.guild.fetchBans();
  if (!message.guild.me.permissions.has("BAN_MEMBERS")) return message.reply(' <a:hayir:699131258378256465> Kullanıcıyı Banlayamıyorum Çünkü `Üyeleri Yasakla` Yetkim Yok.');
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("<a:hayir:699131258378256465> Bu komutu kullanabilmek için `Üyeleri Yasakla` yetkisine sahip olmanız gerek.");
 
  var kisi = message.mentions.users.first() || client.users.resolve(args[0]) || client.users.cache.find(u => u.username === args[0]) || client.users.cache.get(args[0]);
  if(!kisi) return message.reply(`<a:hayir:699131258378256465> **Banlayacağım Kişiyi Belirtmen Gerekiyor!** ${prefix}ban ID veya ${prefix}ban @kullanici`).then(message => message.delete({ timeout: 7000 }));
 var sebeb = args.slice(1).join(" ");


    if(message.author == kisi) return message.reply("<a:hayir:699131258378256465> Kendini Yasaklayamazsın!").then(message => message.delete({ timeout: 5000 }));
    if (banxx.get(kisi.id)) return message.reply("<a:hayir:699131258378256465> Kişi Zaten Yasaklanmış!").then(message => message.delete({ timeout: 5000 }));

 var now = new Date()
 if (!sebeb) {
         try {
          kisi.send(`${kisi} **${guild}** adlı sunucudan banlandınız.`)
          message.channel.send(`<a:evet:699131398170214501> **${kisi} banlandı.**`)
          guild.members.ban(kisi, { reason: sebeb/*, days: gun*/});
        } catch (error) {
          message.reply("<a:hayir:699131258378256465> Bir Sorun Oldu Lütfen Botun Geliştiricisi veya Yapımcısıyla İletişime Geçiniz!")
          console.log(error)
        }
 } else {
 try {
   kisi.send(`${kisi} **${guild}** adlı sunucudan banlandınız. \nNedeni: **${sebeb}**`)
   message.channel.send(`<a:evet:699131398170214501> **${kisi} banlandı. \nNedeni: ${sebeb}**`)
   guild.members.ban(kisi, { reason: sebeb/*, days: gun*/});
 } catch (error) {
   message.reply("<a:hayir:699131258378256465> Bir Sorun Oldu Lütfen Botun Geliştiricisi veya Yapımcısıyla İletişime Geçiniz!")
   console.log(error)
 }

 }
};



exports.config = {
name: "ban",
aliases: []
};