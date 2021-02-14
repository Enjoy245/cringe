const Discord = require("discord.js")
const db = require('quick.db')

exports.run = async(bot, message, args) => {
          let komut = await db.fetch(`sunucuKomut_${message.guild.id}`)

                     let gonderileceksey = await db.fetch(`sunucuMesaj_${message.guild.id}`)
                     if(!komut) await db.set(`sunucuKomut_${message.guild.id}`, 'Bulunmuyor.')
                  
                  
                     let welcomeEmbed = new Discord.MessageEmbed()
                     .addField(`<a:evet:699131398170214501> Mevcut özel komutlar.`, `\`${komut}\``)
                     .setColor('ff00f0')
                        message.channel.send(welcomeEmbed)
                     };

exports.config = {
  name: "otocevap-liste",
  aliases: ['otocevapliste','oto-cevap-liste']
};

