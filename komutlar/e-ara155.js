const Discord = require('discord.js');


exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor('#ff00f0')
    .setAuthor(message.author.username, message.author.avatarURL())
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.MessageEmbed()
    .setColor('#ff00f0')
      .setFooter("devrimsoft.com")
    .setDescription('')
        .setImage(`https://media0.giphy.com/media/jMDmBd7VnMLlu/200.gif`)
    return message.channel.send(sunucubilgi);
    }
};



exports.config = {
name: "ara155",
aliases: []
};