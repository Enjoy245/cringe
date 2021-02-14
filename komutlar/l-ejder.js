const Discord = require("discord.js");

exports.run = (client, message, args) => {

let meyrnn = args.slice(0).join("+");
if (!meyrnn) return message.channel.send("<a:hayir:699131258378256465> Lütfen Yazı Yazınız");
let link ="https://dynamic.brandcrowd.com/asset/logo/055241ff-dc4f-4743-90be-1c9caa0c900b/logo?v=4&text=" + meyrnn;

const Embedmeyrnn = new Discord.MessageEmbed()
.setColor("#ff00f0")
.setFooter("devrimsoft.com")
.setImage(link);

return message.channel.send(Embedmeyrnn);
};

exports.config = {
name: "ejder",
aliases: []
};