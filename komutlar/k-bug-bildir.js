const Discord = require("discord.js");
exports.run = async (client, message, args) => {

  
let istek = args.slice(0).join(' ')
if(!istek) return message.channel.send('<a:hayir:699131258378256465> **Bug Bildirmek için Bir Bug Yazınız.**').then(message => message.delete({ timeout: 5000 }));

const embed = new Discord.MessageEmbed()
.setColor('#ff00f0')
.setDescription(`**Bug Kanalı** ${message.channel.name} \n **Bug Bildirilen Sunucu** \`${message.guild.name}\` \n **Bugu Bildiren Kullanıcı** <@${message.author.id}> \n **Bildirilen Bug :** \`${istek}\``)
client.channels.cache.get('800275879556808744').send(embed)
  
message.channel.send("<a:evet:699131398170214501> Bug bildiriminiz gönderildi.").then(message => message.delete({ timeout: 5000 }));
};
exports.config = {
name: "bug-bildir",
  aliases: ["bugbildir","hatabildir","hata-bildir"]
}