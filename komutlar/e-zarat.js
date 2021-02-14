const Discord = require('discord.js')

exports.run = function(bot, message) {
    message.channel.send(new Discord.MessageEmbed()
    .setColor("#ff00f0")
                         .setFooter("devrimsoft.com")
    .setTitle('🎲 Zarın: ' + narcoscode()));

    function narcoscode() {
        var rand = ['1', '2', '3', '4', '5', '6'];

        return rand[Math.floor(Math.random()*rand.length)];
    }
}

exports.config = {
name: "zarat",
aliases: []
};