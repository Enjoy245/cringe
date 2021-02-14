const Discord = require('discord.js');

exports.run = (client, message, args) => {
 let guild = message.guild;

    guild.fetchBans()
        .then(bans => message.channel.send(` <a:evet:699131398170214501>  **Sunucunuzda ${bans.size} banlanmış üye bulunmaktadır!**   `))
        .catch(console.error);

}

exports.config = {
name: "bansay",
  aliases: []
}
