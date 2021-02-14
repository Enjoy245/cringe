const Discord = require('discord.js');

exports.run = async(client, message) => {
     
      const alkis = new Discord.MessageEmbed()
    .setAuthor('Seni alkışlıyorum.👏')
    .setColor("#2b00ff")
        .setImage(`https://media.discordapp.net/attachments/591976610551431188/804395261740580915/devrim_alkis_gif.gif`)
    return message.channel.send(alkis);
    
};



exports.config = {
name: "alkış",
aliases: []
};