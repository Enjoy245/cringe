const Discord = require('discord.js');
exports.run = (client, message, args) => {
if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor('ff00f0')
    .setTimestamp()
    .setFooter("devrimsoft.com")
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Logo Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  let isim = args.slice(0).join("+")
  if(!isim)return message.channel.send("<a:hayir:699131258378256465> **Lütfen Bişey Yaz**")
let link = "https://flamingtext.com/net-fu/proxy_form.cgi?script=adidas-logo&fontname=ethnocentric&text="+isim+"&script=adidas-logo&text=Discord&fontname=ethnocentric&fillTextColor=%236d81e7&fillOutlineColor=%23fbfaf9&shadowType=0&backgroundRadio=0&imageoutput=true"
  const CrewCodeembed = new Discord.MessageEmbed()
  .setColor("ff00f0")
  .setImage(link)
  .setFooter("devrimsoft.com")
  message.channel.send(CrewCodeembed)
};
exports.config = {
name: "mavi",
aliases: []
};