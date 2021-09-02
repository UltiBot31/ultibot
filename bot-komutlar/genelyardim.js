const db = require("wio.db");
const Discord = require('discord.js');
exports.run = async (client, message, args) => { 

let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Ticket Komutları`, client.user.avatarURL())
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
.setColor("BLUE")
.addField("> **.afk**", "AFK Moduna Geçersiniz.", true)
.addField("> **.avatar**", "Etiketlediğiniz Kişinin Avatırını Görürsünüz.", true)
.addField("> **.corona**", "Ülkeler ve Dünya Hakkında COVID-19 Bilgisi Alırsınız.", true)
.addField("> **.çeviri**", "Mesajı Çevrirsiniz.", true)
.addField("> **.deprembilgi**", "Türkiye'deki Yaşanan Son 10 Depremi Görürsünüz.", true)
.addField("> **.hesapla**", "Matematik İşlemi Yaparsınız.", true)
.addField("> **.kullanıcı-bilgi**", "Belirtilen Kullanıcının Bilgilerine Bakarsınız.", true)
.addField("> **.roller**", "Sunucudaki Rolleri Görürsünüz.", true)
.addField("> **.şarkı-sözü**", "Yazdığınız Şarkının Sözlerini Görürsünüz.", true)
.addField("> **.sesli-aktivite**", "Sesli Kanalda Oyun Oynamaya veya YouTube İzlemeye Ne Dersin?", true)
.addField("> **.sunucubilgi**", "Sunucu Bilgilerini Görürsünüz.", true)
.addField("> **.sunuculogo**", "Sunucunun Logosunu Görürsünüz.", true)
.addField("> **.sunucutanıt**", "Sunucunuzu tanıtırsınız.", true)
.addField("> **.yetkilerim**", "Yetkilerinizi Görürsünüz.", true)
.addField("> **.yılbaşı**", "Yılbaşına Kalan Süreyi Görürsünüz.", true)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: [], 
    permLevel: 0
  };
  exports.help = {
    name: 'genelyardım'
  }; 
  