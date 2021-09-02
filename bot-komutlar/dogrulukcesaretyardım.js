const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(' Doğruluk - Cesaret Komutları')
.setTimestamp()
.addField(' .ds', 'Doğruluk Soruları Sorar')
.addField(' .cs', 'Cesaret Soruları Sorar')
.addField(' .p', 'Pas')
.addField(' .u', 'Bir kişiyi uyarırsınız')
.setImage("https://media.discordapp.net/attachments/769281758977458176/783299061012234260/standard_21.gif")
.setFooter('Cowboy', client.user.avatarURL())
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'dmicmiyardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};