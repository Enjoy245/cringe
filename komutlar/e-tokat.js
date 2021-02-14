const Discord = require("discord.js");

exports.run = function(client, message, args) {

let user = message.mentions.users.first();

if (message.mentions.users.size < 1)
return message

      .reply("<a:hayir:699131258378256465> **Tokatlamam gereken kişiyi etiketlemelisin! **")
      .catch(console.error);

const Embedmatador = new Discord.MessageEmbed()

    .setColor("ff00f0")
    .setDescription(
      message.author.username + ` ${user}` + "** adlı kişiyi, Tokatladı! 🖐️ **"
    )
.setFooter("devrimsoft.com")
    .setImage("https://4.bp.blogspot.com/-WfzGkNhjFIE/Vi-vwoWklXI/AAAAAAAAPCc/HXSnXtEMGs0/s1600/kemal_sunal_sener_sen_tokat.gif")
    

message.channel.send(Embedmatador);

};

exports.config = {
name: "tokat",
aliases: ['tokat-at']
};