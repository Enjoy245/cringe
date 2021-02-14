const Discord = require('discord.js');

 exports.run = (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hayir:699131258378256465>  **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);


   let question = args.join(' ');

   let user = message.author.username
     const embedd = new Discord.MessageEmbed()

     if (!question) return message.channel.send(new Discord.MessageEmbed().setColor("#ff00f0").setTitle(`<a:hayir:699131258378256465> Ne Hakkında Oylama Yapmak İstiyorsanız Yazmalısınız!`)).then(m => m.delete(({ timeout: 5000})));
   
 

       const embed = new Discord.MessageEmbed()

       .setColor("#ff00f0")
       .setThumbnail(client.user.avatarURL)
       .setTimestamp()
       .setFooter('devrimsoft.com', client.user.avatarURL())
       .setImage("https://media.discordapp.net/attachments/697145772801785876/716671769355747348/1.gif")

       .addField(`${client.user.username}`, `**${question}**`);
   
     message.channel.send(embed).then(function(message) {

         message.react('<a:evet:699131398170214501>');

         message.react('<a:hayir:699131258378256465>');

       });

     };

exports.config = {
name: "oylama",
aliases: ["oylama-yap"]
};

