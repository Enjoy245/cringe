const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  let kişi = message.mentions.members.first() || message.author;
  message.channel.send(`<a:verifiedmor:695166291488538715> İstediğiniz Kişinin ID Numarası: **${kişi.id}** <a:verifiedmor:695166291488538715>`);
};

exports.config = {
name: "id",
aliases: []
};