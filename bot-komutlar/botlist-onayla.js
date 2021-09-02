const discord = require('discord.js');
const database = require('nrc.db');
const db = require('nrc.db');
exports.run = (client, message, args) => {



//BU BOT KROM TARAFINDAN YAPILMIŞTIR!!
//BU BOT KROM TARAFINDAN YAPILMIŞTIR!!
let botid = args[0]
let sahipid = args[1]

//BU BOT KROM TARAFINDAN YAPILMIŞTIR!!
//BU BOT KROM TARAFINDAN YAPILMIŞTIR!!
let basvuru = db.fetch(`basvuru_${message.guild.id}`)
let kanal = db.fetch(`botekle_${message.guild.id}`)
//BU BOT KROM TARAFINDAN YAPILMIŞTIR!!
//BU BOT KROM TARAFINDAN YAPILMIŞTIR!!
let log =   db.fetch(`botlistlog_${message.guild.id}`)
//BU BOT KROM TARAFINDAN YAPILMIŞTIR!!
let yetkili =   db.fetch(`botlistyetkili_${message.guild.id}`)
let developerr =   db.fetch(`botlistdeveloper_${message.guild.id}`)
//BU BOT KROM TARAFINDAN YAPILMIŞTIR!!
let botrol =   db.fetch(`botlistbotrol_${message.guild.id}`)

//BU BOT KROM TARAFINDAN YAPILMIŞTIR!!
if(!log) return message.channel.send("Bu komudu kullanmak için ayarların ayarlı olması gerekiyor. .botlist-ayar").then(message => message.delete({timeout: 10000}))
if(!basvuru) return message.channel.send("Bu komudu kullanmak için ayarların ayarlı olması gerekiyor. .botlist-ayar").then(message => message.delete({timeout: 10000}))
if(!kanal) return message.channel.send("Bu komudu kullanmak için ayarların ayarlı olması gerekiyor. .botlist-ayar").then(message => message.delete({timeout: 10000}))
if(!yetkili) return message.channel.send("Bu komudu kullanmak için ayarların ayarlı olması gerekiyor. .botlist-ayar").then(message => message.delete({timeout: 10000}))
if(!developerr) return message.channel.send("Bu komudu kullanmak için ayarların ayarlı olması gerekiyor. .botlist-ayar").then(message => message.delete({timeout: 10000}))
if(!botrol) return message.channel.send("Bu komudu kullanmak için ayarların ayarlı olması gerekiyor. .botlist-ayar").then(message => message.delete({timeout: 10000}))

//BU BOT KROM TARAFINDAN YAPILMIŞTIR!!
if (!message.member.roles.cache.has(yetkili)) return message.channel.send('Bu komutu kullanamazsın çünkü yetkili rolüne sahip değilsin!').then(msg => msg.delete(10000))

//BU BOT KROM TARAFINDAN YAPILMIŞTIR!!
if(!botid) return message.channel.send(":no_entry: Lütfen kabul edeceğin botun ID'sini yaz.").then(message => message.delete({timeout: 10000}))
if(!sahipid) return message.channel.send(":no_entry: Lütfen kabul edeceğin botun sahibinin ID'sini yaz.").then(message => message.delete({timeout: 10000}))

const kabulet = new discord.MessageEmbed()
.setDescription(`<@${sahipid}> adlı kişinin <@${botid}> isimli botu kabul edildi.\nKabul eden yetkili: <@${message.author.id}>`)
.setColor("BLUE")
.setFooter( "Subzero ")
//BU BOT KROM TARAFINDAN YAPILMIŞTIR!!
client.channels.cache.get(log).send(kabulet);

//BU BOT KROM TARAFINDAN YAPILMIŞTIR!!
sahipid.roles.add(developerr)
botid.roles.add(botrol)
client.channels.cache.get(log).send(kabulet);

message.channel.send("Botu onayladınız.").then(message => message.delete({timeout: 10000}))

//BU BOT KROM TARAFINDAN YAPILMIŞTIR!!

//BU BOT KROM TARAFINDAN YAPILMIŞTIR!!


//BU BOT KROM TARAFINDAN YAPILMIŞTIR!!
};
exports.conf = {
  enabled: true,
  guildOnly: true, //Bu sadece sunucularda kullanılabilir ayarıdır true yazarsanız dm de kullanamazsınız false yazarsanız kullanabilirsiniz
  aliases: ["bot-onayla"] 
};

exports.help = {
  name: 'botonayla',
  description: 'komut açıklama',
  usage: ''
};