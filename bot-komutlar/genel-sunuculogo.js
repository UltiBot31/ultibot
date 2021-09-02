const Discord = require('discord.js');
const database = require('wio.db');
const db = require('wio.db');
exports.run = (client, message, params) => {
   
  const egehanss = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setTitle('Sunucunun resmi;')
  .setFooter( "Krom Code Sunar...", client.user.avatarURL())
  .setImage(message.guild.iconURL({dynamic: true}))
  message.channel.send(egehanss)
}

exports.conf = {
  enabled: true, 
  guildOnly: true, 
    aliases: ["sunucu-resmi","sunuculogo","sunucu-logo"],
}

exports.help = {
  name: 'sunucuresmi',
};