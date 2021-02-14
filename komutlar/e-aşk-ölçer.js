const Discord = require('discord.js')
 
exports.run = async (client, message, args) => {
        let member = message.guild.member(message.mentions.users.array()[0] || message.guild.members.cache.get(args[0]))
        let member2 = message.guild.member(message.mentions.users.array()[1] || message.guild.members.cache.get(args[1]))
        var s = message.author
        if(member2) {
                var s = member2.user
        }      //RedCode
        if(!member) {
                const embed = new Discord.MessageEmbed()
                        .setDescription(`<a:hayir:699131258378256465> Ölçmek İçin Birini Etiketlemelisin!`)
                        .setColor("#ff00f0")
                .setImage("https://media.discordapp.net/attachments/697145772801785876/716671769355747348/1.gif")
                        .setTimestamp()
                message.channel.send({embed}).then(message => message.delete({ timeout: 5000 }));
                return
        }
 
        var anasonuc = Math.floor(Math.random() * 101)
        var kalp = ''
        var akalp = ''
        if(Math.floor(Math.round(anasonuc / 10) * 10) >= 10) {
                var c = 0
                for(var i = 0; i < Math.floor(Math.round(anasonuc / 10)); i++) {
                        kalp += '<a:evet:699131398170214501>'
                        c++
                }
                for(var x = c; x < 10; x++) {
                        akalp += `<a:hayir:699131258378256465>`
                }
        } else {
                var kalp = '<a:hayir:699131258378256465>'
                var akalp = '<a:hayir:699131258378256465><a:hayir:699131258378256465><a:hayir:699131258378256465><a:hayir:699131258378256465><a:hayir:699131258378256465><a:hayir:699131258378256465><a:hayir:699131258378256465><a:hayir:699131258378256465><a:hayir:699131258378256465>'
        }
        var yorum = `Sizi evlendirelim <3`
        if(anasonuc < 80) {
                var yorum = 'Biraz daha uğraşırsan bu iş olacak gibi :)'
        }
        if(anasonuc < 60) {
                var yorum = 'Eh biraz biraz bir şeyler var gibi.'
        }
        if(anasonuc < 40) {
                var yorum = 'Azıcıkta olsa bir şeyler hissediyor sana :)'
        }
        if(anasonuc < 20) {
                var yorum = 'Seni Sevmiyor AGA BEEE.'
        }
        const embed = new Discord.MessageEmbed()
                .setAuthor(`${member.user.tag} | ${s.tag}`)
                .setDescription(`Aşk Yüzdesi: ${anasonuc}\n${kalp}${akalp}\n\n${yorum}`)
                .setColor("#2b00ff")
        .setImage("https://media.discordapp.net/attachments/697145772801785876/716671769355747348/1.gif")
                .setTimestamp()
        message.channel.send({embed})
}
 
exports.config = {
name: "aşkölçer",
aliases: ['aşk-ölçer']
};