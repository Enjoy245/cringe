const Discord = require("discord.js");
exports.run = function(client, message, args) {
  const ping = new Discord.MessageEmbed()
  .setDescription(`<a:verifiedmor:695166291488538715> Ping: **${client.ws.ping}ms**\n<a:verifiedmor:695166291488538715> Mesaj Gecikmesi: **${new Date().getTime() - message.createdTimestamp}ms**`)
  .setColor('#ff00f0')
  .setFooter("devrimsoft.com")
  .setImage("https://media.discordapp.net/attachments/697145772801785876/716671769355747348/1.gif")
     message.channel.send(ping)
};

exports.config = {  
  name: 'ping',
  aliases: []
 
};