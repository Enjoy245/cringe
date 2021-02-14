const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
      if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hayir:699131258378256465> Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  if (!db.fetch(`küfürE_${message.channel.id}`)) {
  return message.reply(`<a:hayir:699131258378256465> **Bu özellik bu kanalda zaten kapalıymış!**`)
}
  db.delete(`küfürE_${message.channel.id}`)
  message.reply(`<a:evet:699131398170214501> **Bu özellik bu kanalda devre dışı bırakıldı.**`)
};
exports.config = {
 name: 'küfürkapat',
  aliases: ['küfür-kapat']

};