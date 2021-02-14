const Discord = require('discord.js');

exports.run = (client, message, args) => {
if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor('ff00f0')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Logo Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  let isim = args.slice(0).join("+")
  if(!isim)return message.channel.send("<a:hayir:699131258378256465> **Lütfen Bişey Yaz**")
let link = "https://bcassetcdn.com/asset/logo/4362501d-64af-4538-8b4e-051670b7dc5f/logo?v=4&text="+isim
  const CrewCodeembed = new Discord.MessageEmbed()
  .setImage(link)
  .setColor('ff00f0')
  .setFooter("devrimsoft.com")
  message.channel.send(CrewCodeembed)
};
exports.config = {
name: "kalp",
aliases: []
};