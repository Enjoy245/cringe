const Discord = require("discord.js");

exports.run = (client, message) => {
  const narcosembed = new Discord.MessageEmbed()
    .setColor("ff00f0")
    .setAuthor("taksim dayı")
 .setImage("https://media.discordapp.net/attachments/591976610551431188/804264630818045983/DevrimTaksim.jpg")
    .setFooter("hello");
  message.channel.send(narcosembed);
};

exports.config = {
name: "taksimdayı",
aliases: []
};