const Discord = require("discord.js");
exports.run = (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hayir:699131258378256465> Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  let every = message.guild.roles.cache.find(r => r.name === "@everyone");
 message.channel.createOverwrite(every, {
    SEND_MESSAGES: null
  });

  message.channel.send("<a:evet:699131398170214501> **Sohbet kanalı Yazılabilir duruma getirildi!**");
};

exports.config = {
name: "sohbet-aç",
aliases: []
};