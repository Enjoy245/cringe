const Discord = require("discord.js");

exports.run = (client, msg, args) => {

let meyrnnrise = args.slice(0).join(" ");
if (meyrnnrise.length < 1) {

return msg.reply("<a:hayir:699131258378256465> **Kime kartopu atmak isterin ya isim yaz yada etiketle!**");

} else {

    msg.channel
      .send("<=====     :snowflake:")
      .then(nmsg => nmsg.edit("<=====    :snowflake:"))
      .then(nmsg => nmsg.edit("<====    :snowflake:"))
      .then(nmsg => nmsg.edit("<===   :snowflake:"))
      .then(nmsg => nmsg.edit("<==  :snowflake:"))
      .then(nmsg => nmsg.edit("<= :snowflake:"))
      .then(nmsg => nmsg.edit(":snowflake:"))
      .then(nmsg => nmsg.edit(`${meyrnnrise} artık :snowman: oldu.`));
  }
};


exports.config = {
name: "kartopu",
aliases: []
};