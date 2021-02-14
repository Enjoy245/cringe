const Discord = require("discord.js")
const client = new Discord.Client()
const TCMB_Doviz = require('tcmb-doviz');
const Doviz = new TCMB_Doviz();
const db = require('quick.db');
const ayarla = require("../ayarlar/bot.json");

exports.run = async (client, message, args) => {

    if(!args[0]) {
        let embed = new Discord.MessageEmbed();
        embed.setDescription("<a:hayir:699131258378256465> dövizin yanına hangi kura bakmak istiyorsan yazmalısın! \n Kur Birim Kodları= USD EUR JPY ");
        embed.setColor("ff00f0");
        message.channel.send({embed: embed});
    }
    if (args[0] === "USD"){
        const res = await Doviz.getKur("USD");
        const tarih = await Doviz.guncelTarih();
        let embed = new Discord.MessageEmbed();
        embed.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL());
        embed.setDescription(` \`\`${tarih}\`\` tarihinde güncellenmiştir.`);
        embed.setColor("ff00f0");
        embed.addField(`Alış`,res.alis);
        embed.addField(`Satış`,res.satis,true);
        embed.addField(`Birim Kodu`,res.kod,true);
        message.channel.send({embed: embed});
    }
   if(args[0] === "EUR"){
const res = await Doviz.getKur("EUR");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL())
     embed.setDescription(` \`\`${tarih}\`\` tarihinde güncellenmiştir.`);
embed.setColor("ff00f0")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }


   if(args[0] === "JPY"){
const res = await Doviz.getKur("JPY");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL())
     embed.setDescription(` \`\`${tarih}\`\` tarihinde güncellenmiştir.`);
embed.setColor("ff00f0")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
}

exports.config = {
name: "döviz",
aliases: []
};
