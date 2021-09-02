const db = require("wio.db");
const Discord = require('discord.js');
exports.run = async (client, message, args) => { 

let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Kayıt Komutları`, client.user.avatarURL())
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
.setColor("BLUE")
.addField("> **.alınacak-rol**", "Kayıt Olunca Alınacak Rolü Ayarlar.", true)
.addField("> **.erkek-rol**", "Erkek Rolünü Ayarlar.", true)
.addField("> **.kız-rol**", "Kız Rolünü Ayarlar.", true)
.addField("> **.erkek**", "Erkek Üye Kayıt Eder.", true)
.addField("> **.kız**", "Kız Üye Kayıt Eder.", true)
.addField("> **.kayıt-kanal**", "Kayıt Olunacak Kanalı Ayarlar.", true)
.addField("> **.kayıtçı-rol**", "Kayıt Görevlisi Rolünü Ayarlar.", true)
.addField("> **.toplam-kayıt**", "Kayıt İstatistikleri.", true)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["kayarlar","kayityardım","kayıt-yardım"], 
    permLevel: 0
  };
  exports.help = {
    name: 'kayıtyardım'
  }; 
  