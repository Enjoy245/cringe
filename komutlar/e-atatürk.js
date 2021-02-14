const Discord = require('discord.js');

exports.run = async(client, message) => {
     
      const vatan = new Discord.MessageEmbed()
    .setAuthor('Mustafa Kemal Atatürkü Anıyoruz.')
    .setColor("#ff00f0")
        .setImage(`https://i.hizliresim.com/8CIYMl.gif`)
      .setFooter("devrimsoft.com")
    return message.channel.send(vatan);
    
};



exports.config = {
name: "atatürk",
aliases: []
};