const Discord = require('discord.js');
const shorten = require('isgd');
const db = require('quick.db');
const fynx = require("../ayarlar/bot.json");

exports.run = async(client, message, args, tools) => {
  
   let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || fynx.prefix
    message.delete();
    if (!args[0]) return message.channel.send(`<a:hayir:699131258378256465>Kullanım: ${prefix}kısalt www.google.com.tr  `)

    if(!args[1]) {

        shorten.shorten(args[0], function(res) {
            if (res.startsWith('Hata:')) message.channel.send('<a:hayir:699131258378256465> **Lütfen dogru URL adresi giriniz.**');

            message.channel.send(`**<${res}>**`);
        })
    } else {
        shorten.custom(args[0], args[1], function(res) {

            if (res.startsWith('Hata:')) message.channel.send(`**<!{res}>**`);

            message.channel.send(`**<!{res}>**`);
        })
    }

};



exports.config = {
name: "kısalt",
aliases: []
};