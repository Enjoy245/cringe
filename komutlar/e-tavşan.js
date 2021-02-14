const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");

exports.run = (client, message, params) => {
     if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor('ff00f0')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor('ff00f0')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const tavşan = new Discord.MessageEmbed()
    .setAuthor(message.author.username + " şunun şirinliğine baaakk!")
    .setColor('ff00f0')
    .setTimestamp()
      .setFooter("devrimsoft.com")
    .setDescription('')
    .setImage(`https://cdn.discordapp.com/attachments/779099271441809420/780010223855206400/tavsan.gif`)
    return message.channel.send(tavşan);
    }
};

exports.config = {
name: "tavşan",
aliases: []
};