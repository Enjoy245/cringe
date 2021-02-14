const Discord = require('discord.js');
const db = require('quick.db')
const fynx = require("../ayarlar/bot.json");



exports.run = async(client, message, args) => {
  let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || fynx.prefix

  
  
 if(!message.member.hasPermission("MANAGE_EMOJIS")) return message.channel.send("<a:hayir:699131258378256465> Bu komutu kullanabilmek için `Emojileri yönet` yetkisine sahip olmalısınız")
      
  let link = args[0]
    let isim = args[1];
    let guild = message.guild;
 
 
    if (!link) return message.channel.send(`<a:hayir:699131258378256465> **Emojinin alınacağı linki girmedin.** ${prefix}emojiekle <link> <isim>`)
    if (!isim) return message.channel.send(`<a:hayir:699131258378256465> **Emojinin ismini belirlemedin.** ${prefix}emojiekle <link> <isim>`)

    guild.emojis.create(`${link}`, `${isim}`)
        .then(emoji => 
         message.channel.send(`${isim} ismiyle yeni bir emoji oluşturuldu`))
         message.react('<a:verifiedmor:695166291488538715>')
        .catch(console.error);

}

exports.config = {
name: "emojiekle",
  aliases: ["emoji-ekle"]
}


