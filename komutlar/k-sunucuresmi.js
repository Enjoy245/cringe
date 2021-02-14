const Discord = require('discord.js');
const ayarlar = require('../ayarlar/bot.json')
 
exports.run = (client, message, params) => {
   if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor('ff00f0')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Bu Komut Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  
  
  const CrewCodeembed = new Discord.MessageEmbed()
  .setColor("ff00f0")
  .setFooter("devrimsoft.com")
  .setTitle(`${message.guild.name}`)
  .setImage(message.guild.iconURL())
  message.channel.send(CrewCodeembed)
}


exports.config = {
name: "sunucuresmi",
aliases: ['sunucu-resmi']
};