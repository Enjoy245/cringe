const Discord = require("discord.js");
const { Command } = require("discord.js-commando");
const { stripIndents } = require("common-tags");

const slots = ["<a:starr:695166292549697536>", "<a:mstar:697883464401420438>", "<a:ystar:697883485397975080>", "<a:bstar:699127034219331665>"];

exports.run = function(client, message) {

var meyrnnrise = slots[Math.floor(Math.random() * slots.length)];
var meyrnnrise2 = slots[Math.floor(Math.random() * slots.length)];
var meyrnnrise3 = slots[Math.floor(Math.random() * slots.length)];

  if (meyrnnrise === meyrnnrise2 && meyrnnrise3 === meyrnnrise) { return message.channel.send(stripIndents`**Tebrikler, kazandınız!** \n\n${meyrnnrise} **:** ${meyrnnrise2} **:** ${meyrnnrise3}`);

  } else {
   return message.channel.send(stripIndents`**Maalesef, kaybettin! Tekrar Denemelisin.** \n\n${meyrnnrise} **:** ${meyrnnrise2} **:** ${meyrnnrise3}`);
  }
};
exports.config = {
name: "slots",
aliases: []
};