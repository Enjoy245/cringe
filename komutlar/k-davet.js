const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor("#ff00f0")
  .setTitle("<a:saturn:699130788846764145> Beni Sunucuna Eklemen İçin Sunucumuza Katılmalısınız ")
  .setDescription("\n <a:verifiedmor:695166291488538715> [__**Sunucumuza Katılmalısınız**__](https://discord.gg/5H4Cujh6ks) \n <a:verifiedmor:695166291488538715> [__**WebSitemiz**__](https://devrimsoft.com) ")
  .setImage("https://media.discordapp.net/attachments/591976610551431188/799908455305576468/Screenshot_2.png")
  message.channel.send(davet)
}


exports.config = {
name: "davet",
  aliases: []
}


