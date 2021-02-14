const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require('../ayarlar/bot.json');

exports.run = async (client, message, args) => {
let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix
const eğlence = new Discord.MessageEmbed()
.setColor("#ff00f0")
.setTitle("<a:devrimeglence:804365415874035763> Eğlence Komutları <a:devrimeglence:804365415874035763>")
 .setTimestamp()
.setFooter("devrimsoft.com")
.setDescription(`${prefix}adam-asmaca | Adam asmaca oynarsınız.\n${prefix}alkış | Bot sizi alkışlar.\n${prefix}ara155 | Polis gifi atar.\n${prefix}atatürk | Liderimizin gifini atar.\n${prefix}aşk-ölçer | İki Kullanıcı Arasındaki Sevgiyi Ölçer.\n${prefix}balıktut | Çeşitli balıklar tutarsınız.\n${prefix}csgokasa | Csgo kasa açma oyunu.\n${prefix}düello | Düello Atarsın.\n${prefix}hediye | İstediğiniz kullanıcıyı hediye verirsiniz.\n${prefix}ilginçbilgi | Rastgele ilginç bilgi verir.\n${prefix}kahve | Türk kahvesi içersiniz.\n${prefix}kardanadam | Kardan adam yaparsınız.\n${prefix}kartopu | İstediğiniz kişiye kartopu atarsınız.\n${prefix}kaçcm | Malafatınızın uzunluğunu söyler.\n${prefix}nükleer | Nükleer bomba atarsınız.\n${prefix}öp | Belirttiğiniz kullanıcıyı öpersiniz.\n${prefix}slots | Slot oyunu oynarsınız.\n${prefix}sor | Bota Soru Sorarsınız.\n${prefix}şanslı-sayım | Şanslı sayınızı söyler.\n${prefix}taksimdayı | Taksim Dayı gifi atar.\n${prefix}tavşan | Tavşan gifi atar.\n${prefix}tersyazı | Yazdığınız yazıyı tersten yazar.\n${prefix}tokat | Belirttiğiniz kişiye tokat atar.\n${prefix}token | Tokenimi Öğrenmek İstemezmisin?\n${prefix}zarat | Zar atarsınız.\n${prefix}wasted | Etiketlediğiniz kişiye wasted efekti uygular.\n\n<a:devrimlogo:804385665424293908>**Devrim Plus'a Özel Komutlar:**<a:devrimlogo:804385665424293908>\n${prefix}düello | Normalde 500 can yerine oyuncular 1000 canla başlar!`)
.setImage("https://media.discordapp.net/attachments/591976610551431188/804396377399361556/devrim.gif")
message.channel.send(eğlence)
}
exports.config = {
name: "eğlence",
aliases: []
};