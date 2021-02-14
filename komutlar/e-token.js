const Discord = require('discord.js');
const ayarlar = require('../ayarlar/bot.json');


exports.run = async(client, message, params, args) => {

   if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor('ff00f0')
    .setTimestamp()
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
      const token = new Discord.MessageEmbed()
    .setAuthor(message.author.username + " Buyur tokenim  ")
    .setColor('ff00f0')
    .setTimestamp()
      .setFooter("devrimsoft.com")
    .setDescription('')
    .setImage(`https://media.discordapp.net/attachments/591976610551431188/806796015071789076/devrimnah.gif`)
    return message.channel.send(token);
    }
};


exports.config = {
name: "token",
aliases: []
};