const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message, args) => {

message.channel.send("Balık Tuttun Balığı Çekiyorsun..").then(message => {

    var motion = [
      "``Sazan Tuttun!`` :fish:",
      "``Köpek Balığı Tuttun İyi Para Eder Sat Sat`` :fish:",
      "``Uskumru Tuttun!`` :fish:",
      "``Mezgit Tuttun! Havyarıda Var Hee`` :) :fish:",
      "``Japon Balığı Tuttun Yemeyi Düşünmüyorsun Herhalde?``",
      "``Hamsi Tuttun!`` :fish:",
      "``Levrek Tuttun!`` :fish:",
      "``Hiçbirşey Tutamadın Maalesef!`` :wastebasket:",
      "``Alabalık Tuttun!`` :fish:",
      "``Maalesef Balık Oltadan Kaçtı!`` :wastebasket:",
      "``İstavrit Tuttun!`` :fish:"
    ];
    var motion = motion[Math.floor(Math.random() * motion.length)];
    message.edit(`${motion}`);
  });
};

exports.config = {
name: "balıktut",
aliases: ['balık-tut']
};