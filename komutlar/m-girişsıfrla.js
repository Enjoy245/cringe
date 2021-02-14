const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require('../ayarlar/bot.json');
exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_GUILD"))
    return message.reply(
      `<a:hayir:699131258378256465> Bu komutu kullanabilmek için **Sunucuyu Yönet** iznine sahip olmalısın!`
    );
  
  let prefix = ayarlar.prefix;

  if (db.has(`gçkanal_${message.guild.id}`) === false) {
    const embed = new Discord.MessageEmbed()
      .setDescription(`<a:hayir:699131258378256465> Giriş çıkışı Ayarlamadığın İçin Sıfırlayamazsın!`)
      .setColor("ff00f0")
      .setTimestamp(`Ayarlamak İçin ${prefix}giriş-çıkış-ayarla #kanal`);
    message.channel.send(embed);
    return;
  }
  db.delete(`gçkanal_${message.guild.id}`);

  const embed = new Discord.MessageEmbed()
    .setDescription(`<a:evet:699131398170214501> Giriş Çıkış Başarıyla Sıfırlandı`)
    .setColor("ff00f0")
    .setTimestamp();
  message.channel.send(embed);
  return;
};


exports.config = {
name: "giriş-çıkış-sıfırla",
aliases: ["giriş-çıkış-kapat"]
};