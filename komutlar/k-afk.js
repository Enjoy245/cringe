const db = require("quick.db");
const Discord = require("discord.js");
const ayarlar = require('../ayarlar/bot.json');
let prefix = ayarlar.prefix
 
exports.run = function(client, message, args) {

  var USER = message.author;
  var REASON = args.slice(0).join("  ");
  const embed = new Discord.MessageEmbed()
  .setColor('ff00f0')
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription(`Afk Olmak İçin Bir Sebep Belirtin.\n\n Örnek Kullanım : ${prefix}afk <sebep>`)
  if(!REASON) return message.channel.send(embed)
  db.set(`afk_${USER.id}`, REASON);
  db.set(`afk_süre_${USER.id}`, Date.now());
  const afk = new Discord.MessageEmbed()
  .setColor('ff00f0')
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription(`Başarıyla ${REASON} Sebebiyle \`Afk\` Moduna Başarıyla Girildi.`)
  message.channel.send(afk)
 
};
 

exports.config = {
name: "afk",
aliases: []
};