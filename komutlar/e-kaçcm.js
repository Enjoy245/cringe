const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message) => {

message.channel.send(" Düşüneyim 1 saniye.").then(message => {

    var meyrnn = [

      "**Senin Malafatın  18CM ** <a:unlem:695166283746115606> ",
      "**Senin Malafatın  11CM ** <a:unlem:695166283746115606>",
      "**Senin Malafatın 32CM  ** <a:kral:699128334776533023>",
      "**Senin Malafatın  35CM ** <a:unlem:695166283746115606>",
      "**Senin Malafatın  8CM  ** <a:cigara:699262396878946426>",
      "**Senin Malafatın  65CM  ** <a:kral:699128334776533023>",
      "**Senin Malafatın 5CM  ** <a:cigara:699262396878946426>",
      "**Senin Malafatın 31CM  ** <a:kral:699128334776533023>",
      "**Senin Malafatın  14CM ** <a:unlem:695166283746115606>",
      "**Senin Malafatın  1CM ** <a:cigara:699262396878946426>",
      "**Senin Malafatın  3415578694679046CM ** <a:kral:699128334776533023>",
      "**Senin Malafatın nerde ben bulamadım bence yok** <a:cigara:699262396878946426>",
      "**Senin Malafatın 0.00000000001 cm Geçmiş olsun** <a:cigara:699262396878946426>",
      "**Senin Malafatını ölçecek alet yok bu evrende naptın be kral** <a:kral:699128334776533023>"



    ];

    var meyrnn= meyrnn[Math.floor(Math.random() * meyrnn.length)];

    message.edit(`${meyrnn}`);
  
  });
};
exports.config = {
name: "kaçcm",
aliases: ["kaccm","kaç-cm"]
};