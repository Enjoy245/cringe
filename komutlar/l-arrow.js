const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`<a:hayir:699131258378256465> **Lütfen yazı yazınız.**`)
  const linqo = `https://dynamic.brandcrowd.com/asset/logo/1a2ebc7a-1b24-466a-bee7-9a0e8f5d8395/logo?v=4&text=${yazi}`
  .replace(' ', '+')

  
  const embed = new Discord.MessageEmbed()
  .setColor("#ff00f0")
  .setImage(linqo)
  .setFooter("devrimsoft.com")
  message.channel.send(embed)
}



exports.config = {
name: "arrow",
aliases: []
};