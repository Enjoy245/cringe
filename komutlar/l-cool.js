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
let link = "https://dynamic.brandcrowd.com/asset/logo/2fa9614c-e8fd-47be-b522-14aa07bd8f22/logo?v=4&text="+isim
  const CrewCodeembed = new Discord.MessageEmbed()
  .setColor("ff00f0")
  .setImage(link)
  .setFooter("devrimsoft.com")
  message.channel.send(CrewCodeembed)
};
exports.config = {
name: "cool",
aliases: []
};