const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = (client, message, params) => {
 if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor('ff00f0')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')

    return message.author.send(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const nükler = new Discord.MessageEmbed()
    .setAuthor(message.author.username + " Nükler bomba attın!")
    .setColor('ff00f0')
    .setTimestamp()
      .setFooter("devrimsoft.com")
    .setDescription('')
    .setImage(`https://cdn.discordapp.com/attachments/779099271441809420/780018167421468672/nukler.gif`)
    return message.channel.send(nükler);
    }
};
exports.config = {
name: "nükleer",
aliases: []
};