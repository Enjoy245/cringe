const Discord = require('discord.js');
const data = require('quick.db');
const moment = require('moment');
moment.locale('tr');
require("moment-duration-format");
exports.run = async (client, message, args) => {
message.channel.send(new Discord.MessageEmbed()
.setColor('#ff00f0')
.setFooter("devrimsoft.com")
.setTitle(client.user.username)
.setThumbnail('https://images-ext-2.discordapp.net/external/o7RtiOC1_4sy7vfiVH07BMDNFd67-yHifMVFfq6_PvE/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/801130479201157192/9b848f483d3e54f6b2911ced4469230d.webp')
.addField('• Uptime', '```'+moment.duration(client.uptime).format("D [gün], H [saat], m [dakika], s [saniye]")+'```', true)
.addField('• Server', '```'+client.guilds.cache.size+'```', true)
.addField('• Kullanıcılar', '```'+client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()+'```', true)
.addField('• Ping', '```'+client.ws.ping.toFixed(0)+'```', true));
  







};
exports.config = {
name: "istatistik",
  aliases: ['i',"info"]
}