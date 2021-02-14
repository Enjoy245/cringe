const Discord = require('discord.js');

exports.run = (client, message, params) => {

const nhediyeci = message.mentions.users.first() 
if (!nhediyeci) return message.channel.send("<a:hayir:699131258378256465> Hediye vereceğin kişiyi etiketlemelisin.")

 

      const narcoshediye = new Discord.MessageEmbed()
    .setDescription(`${nhediyeci} Sana Hediye Alan Biri Var Aramızda 😊`)
    .setColor("ff00f0")
    .setTimestamp()
      .setFooter("devrimsoft.com")
    .setImage("https://media.giphy.com/media/3oz8xBkRsgPTnbK1GM/giphy.gif")
    message.channel.send(narcoshediye)
};
exports.config = {
name: "hediye",
aliases: ['hediye-ver',]
};