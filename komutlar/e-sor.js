const Discord = require('discord.js');

const cevaplar = [                  'Bu kesin.',
                                    'Kesinlikle öyle.',
                                    'Kuşkusuz.',
                                    'Evet, Kesinlikle.',
                                    'Buna güvenebilirsin.',
                                    'Gördüğüm kadarıyla, Evet.',
                                    'Büyük olasılıkla.',
                                    'Görünüşe göre, iyi.',
                                    'Evet.',
                                    'İşaretler eveti gösteriyor.',
                                    'Şimdi söylemesen iyi olur.',
                                    'Buna güvenme.',
                                    'Cevabım, hayır.',
                                    'Kaynaklarım hayır diyor.',
                                    'Görünüşe göre, bu iyi değil.',
                                    'Çok şüpheli.',
                                    'Şüpheli.',
                                    'Büyük olasılıkla, hayır.',
                                    'İçgüdüm, hayır diyor.'                      
];

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    if(!soru) return message.reply('<a:hayir:699131258378256465> **Bana bir soru sormalısın!**  ')
    else message.channel.send(cevap)

}; 
exports.config = {
name: "sor",
aliases: []
};