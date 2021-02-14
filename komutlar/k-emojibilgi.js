const Discord = require("discord.js");
const db = require('quick.db');
const ayarlar = require('../ayarlar/bot.json');

exports.run = async(client, message, args) => {
  let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix
  let emojiname = args[0];
  const emoji = message.guild.emojis.cache.find(
    motion => motion.name === `${emojiname}`
  );
  if (!emojiname)
    return message.channel.send(
      `<a:hayir:699131258378256465> **Emoji ismi yazmalısın!**: ${prefix}emoji-bilgi emoji`
    );
  const motion = new Discord.MessageEmbed()
    .setColor("ff00f0")
    .setThumbnail(`${emoji.url}`)
    .addField("<a:devrimlogo:804385665424293908> Emojinin ismi", `${emojiname}`)
    .addField("<a:devrimlogo:804385665424293908> Emoji ID", `${emoji.id}`)
    .addField("<a:devrimlogo:804385665424293908> Link", `${emoji.url}`)
    .setTimestamp();
  message.channel.send(motion);
  console.log(motion);
};
exports.config = {
name: "emoji-bilgi",
aliases: []
};