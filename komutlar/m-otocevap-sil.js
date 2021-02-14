
const Discord = require("discord.js")
const db = require('quick.db')

exports.run = async(bot, message, args) => {
  const fynx = require("../ayarlar/bot.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
                    
         var user = message.mentions.users.first() || message.author;
if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.sendEmbed(new Discord.MessageEmbed().setDescription('<a:hayir:699131258378256465> Bu Komutu Kullanmak İçin `Sunucuyu Yönet` Yetkisi Lazım!').setColor("RED")); 
                
                    
                   let komut = await db.fetch(`sunucuKomut_${message.guild.id}`) 
                	 let gonderileceksey = await db.fetch(`sunucuMesaj_${message.guild.id}`)
                	 if(!komut) return message.channel.send('<a:hayir:699131258378256465> Bu sunucuda özel komut ayarlı değil.')
                	 	let komutvarmi = await db.fetch(`sunucuKomut_${message.guild.id}`)
                	if(!args[0]) return message.channel.send(`<a:hayir:699131258378256465> Lütfen silmek istediğiniz özel komudu giriniz.\nMevcut özel komutlar: \`${komut}\``)
                	if(args[0] !== komut) return message.channel.send(`<a:hayir:699131258378256465> Bu komut mevcut değil.\nMevcut özel komutlar: \`${komut}\``)
                   if(args[0] == 'Bulunmuyor.') return message.channel.send(`<a:hayir:699131258378256465> Bu komut mevcut değil.\nMevcut özel komutlar: \`${komut}\``)
                    
                     let welcomeEmbed = new Discord.MessageEmbed()
                     .addField(`<a:evet:699131398170214501> Bu sunucudan özel komut silindi.`, `\`${komut}\` silindi.`)
                     .setColor('ff00f0')
                
                     db.set(`sunucuKomut_${message.guild.id}`, 'Bulunmuyor.')
                     db.delete(`sunucuMesaj_${message.guild.id}`, gonderileceksey)
                        message.channel.send(welcomeEmbed) 
                     };
exports.config = {
  name: 'otocevap-sil',
  aliases: ['otocevapsil','oto-cevap-sil'] 
};

