const Discord = require("discord.js");

exports.run = (client, message, args) => {

  let mesaj = args.slice(0).join(" ");
  if (mesaj.length < 1) return message.channel.send("<a:hayir:699131258378256465> Kimi öpeceksin?");

const Embedmeyrnn = new Discord.MessageEmbed()

    .setAuthor(" ")
    .setColor(`ff00f0`)
.setFooter("devrimsoft.com")
    .setDescription(
      message.author.username +
        ` **adlı kullanıcı, ${mesaj} adlı kullanıcıyı öptü.**<a:fun:802836117577400351>`
    )

    .setImage(
               `https://64.media.tumblr.com/1cdaf3c58c6737a9c447a29e54229e4e/911b7a27dc3f0ec4-41/s250x400/530e4765537f674b3d321d221998fbc68fac8807.gif`
 );
  return message.channel.send(Embedmeyrnn);
};
exports.config = {
name: "öp",
aliases: []
};