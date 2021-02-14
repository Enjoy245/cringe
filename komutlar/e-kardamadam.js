const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");

exports.run = (client, message, params) => {
 if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor('ff00f0')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Gif Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sex = new Discord.MessageEmbed()
    .setColor('ff00f0')
    .setTimestamp()
      .setFooter("devrimsoft.com")
    .setDescription('')
    .setImage(`https://media.discordapp.net/attachments/788673281455685653/794315204338515978/original.gif`)
    return message.channel.send(sex);
    }
};


exports.config = {
name: "kardanadam",
aliases: []
};