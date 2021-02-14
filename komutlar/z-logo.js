const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require('../ayarlar/bot.json');


exports.run = async (client, message, args) => {
let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix
const eğlence = new Discord.MessageEmbed()
.setColor("#ff00f0")
.setTitle("<a:devrimlogo:804385665424293908> Logo ve Banner Komutları <a:devrimlogo:804385665424293908>")
 .setTimestamp()
.setFooter("devrimsoft.com")
.setDescription(`${prefix}alev | Kendinize alevli banner hazırlar.\n${prefix}anime | İstediğiniz yazıyı anime fontunda yazar.\n${prefix}arrow | Arrow logo oluşturur.\n${prefix}elmas | Elmas yazı yazarsınız.\n${prefix}green | Yeşil logo oluşturur.\n${prefix}ejderha | Ejderha logosu oluşturur.\n${prefix}altın | Altın yazı yazarsınız.\n${prefix}banner | Yazınızı basit banner yapar.\n${prefix}yellow | Sarı logo oluşturur.\n${prefix}habbo | İstediğiniz yazıyı habbo fontunda yazar.\n${prefix}kalın | İstediğiniz yazıyı 3D mavi fontta yazar.\n${prefix}red | İstediğiniz yazıyı kırmızı bannere dönüştürür.\n${prefix}neonmavi | İstediğiniz yazıyı neon lambalara dönüştürür.\n${prefix}kalp | İstediğiniz yazıyı kalpli logo yapar.\n${prefix}mavi | İstediğiniz yazıyı 2D mavi fontta yazar.\n${prefix}cool | İstediğiniz yazıyı cool fontta yazar.\n${prefix}comic | İstediğiniz yazıyı sohbet bulutunun içine yazar.\n${prefix}bubble | İstediğiniz yazıyı renkli bir şekilde yazar.`)
.setImage("https://media.discordapp.net/attachments/591976610551431188/804396377399361556/devrim.gif")
message.channel.send(eğlence)
}


exports.config = {
name: "logo",
aliases: []
};

