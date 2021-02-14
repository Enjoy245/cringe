const Discord = require("discord.js");
const ayarlar = require('../ayarlar/bot.json');
const db = require("quick.db");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.reply(`Bu Komutu Kullanabilmek İçin **Yönetici** İznine Sahip Olmalısın!`);
let prefix = ayarlar.prefix;
  let channel = message.mentions.channels.first();
  if (!channel) {
    return message.reply("Bir kanal etiketleyin");
  }
  db.set(`gçkanal_${message.guild.id}`, channel.id);
  //var i = db.set(`capsE_${message.guild.id}`, "acik")
  message.channel.send(`<a:evet:699131398170214501> ** Resimli Hoşgeldin - Güle Güle kanalı ${channel} Olarak Ayarlandı. Kapatmak için ${prefix}giriş-çıkış-kapat** `);
};

exports.config = {
name: "giriş-çıkış-ayarla",
aliases: ["gç-ayarla"]
};