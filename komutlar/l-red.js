const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`<a:hayir:699131258378256465> **Lütfen yazı yazınız.**`)
  const linqo = `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=booking-logo&text=${yazi}`
  .replace(' ', '+')

  
  const embed = new Discord.MessageEmbed()
  .setColor("ff00f0")
  .setImage(linqo)
  .setFooter("devrimsoft.com")
  message.channel.send(embed)
}

exports.config = {
name: "red",
aliases: []
};