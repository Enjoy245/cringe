const discord = require('discord.js')
const ayarlar = require('../ayarlar/bot.json');
exports.run = async(client, message, args) => {

  
 let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix
exports.run = function(client, message, args,params) {

  if (args.length < 1) {
    return message.reply(`<a:hayir:699131258378256465>  Doğru Kullanım ${prefix}tersyazı <yazı>`)
  }
   
message.channel.send(args.join(' ').split('').reverse().join(''))
};
}
exports.config = {
name: "tersyazı",
aliases: []
};