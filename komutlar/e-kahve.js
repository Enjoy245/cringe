const Discord = require("discord.js");
const fynx = require("../ayarlar/bot.json");


exports.run = (client, message, params) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
      .setColor("ff00f0")
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL())
      .addField("**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**");
    return message.author.send(ozelmesajuyari);
  }
  if (message.channel.type !== "dm") {
    const narcosembed = new Discord.MessageEmbed()
      .setTitle(`${message.author.username}  Türk Kahvesini İçti`) 
      .setColor("ff00f0")
      .setTimestamp()
    .setFooter("devrimsoft.com")
      .setDescription("")
      .setURL("")
      .setImage(
        `http://img03.blogcu.com/v2/images/orj/k/u/l/kulkedim/kulkedim_132520233787.gif`
      );
    return message.channel.send(narcosembed);
  }
};

exports.config = {
name: "kahve",
aliases: ['kahve-iç']
};