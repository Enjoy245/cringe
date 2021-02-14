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
let link = "https://habbofont.net/font/bubble/"+isim+".gif"
  const CrewCodeembed = new Discord.MessageEmbed()
  .setColor("ff00f0")
  .setImage(link)
  .setFooter("devrimsoft.com")
  message.channel.send(CrewCodeembed)
};
exports.config = {
name: "bubble",
aliases: []
};