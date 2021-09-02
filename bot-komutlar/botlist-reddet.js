const discord = require('discord.js');
const database = require('nrc.db');
const db = require('nrc.db');
//BU BOT KROM TARAFINDAN YAPILMIŞTIR!!
exports.run = (client, message, args) => {
  //BU BOT KROM TARAFINDAN YAPILMIŞTIR!!

//BU BOT KROM TARAFINDAN YAPILMIŞTIR!!


//BU BOT KROM TARAFINDAN YAPILMIŞTIR!!
let botid = args[0]
//BU BOT KROM TARAFINDAN YAPILMIŞTIR!!
let sahipid = args[1]
let neden = args.slice(2).join(" ");
//BU BOT KROM TARAFINDAN YAPILMIŞTIR!!

//BU BOT KROM TARAFINDAN YAPILMIŞTIR!!
let basvuru = db.fetch(`basvuru_${message.guild.id}`)
let kanal = db.fetch(`botekle_${message.guild.id}`)
let log =   db.fetch(`botlistlog_${message.guild.id}`)
let yetkili =   db.fetch(`botlistyetkili_${message.guild.id}`)

//BU BOT KROM TARAFINDAN YAPILMIŞTIR!!
if(!log) return message.channel.send("Bu komudu kullanmak için ayarların ayarlı olması gerekiyor. .botlist-ayar").then(message => message.delete({timeout: 10000}))
if(!basvuru) return message.channel.send("Bu komudu kullanmak için ayarların ayarlı olması gerekiyor. .botlist-ayar").then(message => message.delete({timeout: 10000}))
if(!kanal) return message.channel.send("Bu komudu kullanmak için ayarların ayarlı olması gerekiyor. .botlist-ayar").then(message => message.delete({timeout: 10000}))
if(!yetkili) return message.channel.send("Bu komudu kullanmak için ayarların ayarlı olması gerekiyor. .botlist-ayar").then(message => message.delete({timeout: 10000}))

if (!message.member.roles.cache.has(yetkili)) return message.channel.send('Bu komutu kullanamazsın çünkü yetkili rolüne sahip değilsin!').then(message => message.delete({timeout: 10000}))

//BU BOT KROM TARAFINDAN YAPILMIŞTIR!!
if(!botid) return message.channel.send(":no_entry: Lütfen reddedeceğin botun ID'sini yaz.").then(message => message.delete({timeout: 10000}))
if(!sahipid) return message.channel.send(":no_entry: Lütfen reddedeceğin botun sahibinin ID'sini yaz.").then(message => message.delete({timeout: 10000}))
if(!neden) return message.channel.send(":no_entry: Lütfen reddetme sebebini yaz.").then(message => message.delete({timeout: 10000}))

//BU BOT KROM TARAFINDAN YAPILMIŞTIR!!
const reddet = new discord.MessageEmbed()
.setDescription(`<@${sahipid}> adlı kişinin <@${botid}> isimli botu reddedildi.\nReddeden yetkili: <@${message.author.id}>\nSebep:: ${neden}`)
.setColor("BLUE")
.setFooter( "Subzero ", client.user.avatarURL())
//BU BOT KROM TARAFINDAN YAPILMIŞTIR!!
client.channels.cache.get(log).send(reddet);

message.channel.send("Botu reddettiniz.").then(message => message.delete({timeout: 10000}))


//BU BOT KROM TARAFINDAN YAPILMIŞTIR!!


//BU BOT KROM TARAFINDAN YAPILMIŞTIR!!
};
exports.conf = {
  //BU BOT KROM TARAFINDAN YAPILMIŞTIR!!
  enabled: true,
  guildOnly: true, //Bu sadece sunucularda kullanılabilir ayarıdır true yazarsanız dm de kullanamazsınız false yazarsanız kullanabilirsiniz
  aliases: ["bot-reddet"] 
};
//BU BOT KROM TARAFINDAN YAPILMIŞTIR!!

exports.help = {
  name: 'botreddet',
  //BU BOT KROM TARAFINDAN YAPILMIŞTIR!!
  description: 'komut açıklama',
  //BU BOT KROM TARAFINDAN YAPILMIŞTIR!!
  usage: ''
};
//BU BOT KROM TARAFINDAN YAPILMIŞTIR!!