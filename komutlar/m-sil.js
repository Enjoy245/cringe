const Discord = require('discord.js');
exports.run = function(client, message, args) {
  
  if (args[0] < 1) return message.reply("<a:hayir:699131258378256465> **1** adetten az mesaj silemem!").then(message => message.delete({ timeout: 5000 }));
if (args[0] > 100) return message.reply("<a:hayir:699131258378256465> **100** adetten fazla mesaj silemem!").then(message => message.delete({ timeout: 5000 }));
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("<a:hayir:699131258378256465> **Bu Komutu Kullanmak İçin İzniniz Yok**");
if(!args[0]) return message.channel.send("<a:hayir:699131258378256465>  **Lütfen Silinicek Mesaj Miktarını Yazın!** ").then(message => message.delete({ timeout: 5000 }));
message.channel.bulkDelete(args[0]).then(() => {
  
  message.channel.send(`<a:evet:699131398170214501> **${args[0]}** **Adet Mesajı Sildim**`).then(message => message.delete({ timeout: 5000 }));
})
}

exports.config = {
name: "temizle",
aliases: ["sil","clear"]
};