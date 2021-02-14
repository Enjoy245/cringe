const Discord = require("discord.js");
exports.run = async (client, message, args) => {

  
let istek = args.slice(0).join(' ')
if(!istek) return message.channel.send('<a:hayir:699131258378256465> **İstek Bildirmek için Bir İstek Yazınız.**').then(message => message.delete({ timeout: 5000 }));

const embed = new Discord.MessageEmbed()
.setColor('#ff00f0')
.setDescription(`**İstek Kanalı** ${message.channel.name} \n **İstek Bildirilen Sunucu** \`${message.guild.name}\` \n **İsteği Bildiren Kullanıcı** <@${message.author.id}> \n **İstenilen özellik :** \`${istek}\``)
client.channels.cache.get('800275879556808744').send(embed)
  
message.channel.send("<a:evet:699131398170214501> İsteğiniz gönderildi gönderildi.").then(message => message.delete({ timeout: 5000 }));
};
exports.config = {
name: "istek",
aliases: ['istek-bildir','istek-kod']
};