const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require('../ayarlar/bot.json');


exports.run = async (client, message, args) => {
let prefix = await db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix 
const kullanıcı = new Discord.MessageEmbed()
.setColor("#ff00f0")
.setTitle("<a:fun:802836117577400351> Kullanıcı Komutları <a:fun:802836117577400351>")
 .setTimestamp()
.setFooter("devrimsoft.com")
.setDescription(`${prefix}avatar | Avatarınıza bakarsınız.\n${prefix}botbilgi | Bot istatistiklerini görürsünüz.\n${prefix}bitcoin | Ülkelerdeki güncel btc değerlerini gösterir.\n${prefix}bug-bildir | Botta gördüğünüz bir açığı bize bilirmenizi sağlar.\n${prefix}davet | Beni Sunucuna Ekle.\n${prefix}id | Birisinin id'sine Bakarsın.\n${prefix}istek | İstek ve önerilerinizi bize iletir.\n${prefix}kanal-id | Belirttiğiniz kanalın ID sini verir.\n${prefix}kısalt | Belirttiğiniz linki kısaltır.\n${prefix}ping | Botun Pingine Bakarsın.\n${prefix}profil | Profilini görürsün.\n${prefix}say | Sunucu Hakkında Bilgi Verir.\n${prefix}steam | Yazdığınız oyunun steamdeki tüm bilgilerini yazar.\n${prefix}sunucuresmi | Sunucunun resmini atar.\n${prefix}yetkilerim | Yetkilerini görürsün.\n${prefix}yılbaşı | Yılbaşına kalan süreyi söyler.\n\n<a:devrimlogo:804385665424293908>**Devrim Plus'a Özel Komutlar:**<a:devrimlogo:804385665424293908>\n${prefix}afk | Afk olursunuz ve biri sizi etiketlediğinde neden afk olduğunuzu söyler.\n${prefix}emoji-bilgi | İsmini yazdığınız emojinin bilgilerini verir.\n${prefix}döviz | Belirttiğiniz kurun güncel değerlerini verir.`)
.setImage("https://media.discordapp.net/attachments/591976610551431188/804396377399361556/devrim.gif")
message.channel.send(kullanıcı)
}

exports.config = {
name: "kullanıcı",
aliases: []
};
