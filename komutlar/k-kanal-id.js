const Discord = require("discord.js")

exports.run = async (client, message, args) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor('2b00ff')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Bu Komut Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  let kanal = message.mentions.channels.first()
if (!kanal) return message.channel.send("<a:hayir:699131258378256465> **ID İstediğiniz kanalı belirtmelisiniz!**")
message.channel.send(kanal.id)

}

exports.config = {
name: "kanal-id",
aliases: ['kanalid']
};