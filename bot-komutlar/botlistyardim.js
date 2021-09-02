const db = require("nrc.db");//Bu bot Krom tarafından yapıldı!
const Discord = require('discord.js');//Bu bot Krom tarafından yapıldı!
exports.run = async (client, message, args) => { 
//Bu bot Krom tarafından yapıldı!
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Botlist Komutları`, client.user.avatarURL())
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
.setColor("BLUE")
.addField("> **.botlist-ayar**", "Botlist Kanallarını ve Rollerini Ayarlarsınız.", true)
.addField("> **.botekle**", "Bot Eklersiniz.", true)
.addField("> **.botonayla**", "Birinin Botunu Onaylarsınız.", true)
.addField("> **.botreddet**", "Birinin Botunu Reddedersiniz.", true)
 message.channel.send(eklenti) //Bu bot Krom tarafından yapıldı!
  };//Bu bot Krom tarafından yapıldı!
  exports.conf = {
    enabled: true,  //Bu bot Krom tarafından yapıldı!
    guildOnly: false, 
    aliases: ["botlistayarlar"], //Bu bot Krom tarafından yapıldı!
    permLevel: 0
  };//Bu bot Krom tarafından yapıldı!
  exports.help = {
    name: 'botlistyardım'
  }; 
  