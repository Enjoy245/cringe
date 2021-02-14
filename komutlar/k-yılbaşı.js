const Discord = require("discord.js");
const ms = require("parse-ms");

exports.run = async (client, message, args) => {

  let yilbasi = new Date("2022-01-01 00:00:00");
  let zaman = ms(yilbasi - Date.now());

return message.channel.send(
    `> Gün: **${zaman.days}** \n> Saat: **${zaman.hours}** \n> Dakika: **${zaman.minutes}** \n\n<a:evet:699131398170214501> **Yılbaşının kutlanmasına Bu Kadar Zaman Kaldı!**`
  );
};

exports.config = {
name: "yılbaşı",
aliases: []
};