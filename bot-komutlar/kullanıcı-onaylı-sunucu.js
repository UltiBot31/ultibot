const { MessageAttachment, MessageEmbed } = require("discord.js");
const canvas = require("canvas");

exports.run = async(client, message, args) => {

let mesaj = args.slice(0).join(" ")
if(!mesaj) return message.channel.send("Bir sunucu ismi yaz.")
if(mesaj.length > 12) return message.channel.send("12 Karakterden az bir sunucu ismi yazman gerek.")
var sistemMesaj = {};
sistemMesaj.create = canvas.createCanvas(172, 31)
sistemMesaj.context = sistemMesaj.create.getContext("2d")
sistemMesaj.context.font = "18px calibri"
sistemMesaj.context.fillStyle = "#ffffff"

const bg = await canvas.loadImage("./verified.png")
    sistemMesaj.context.drawImage(bg, 0, 0, 172, 31)
    sistemMesaj.context.fillText(mesaj, 25, 20)
    sistemMesaj.context.beginPath()
    sistemMesaj.context.stroke()
    sistemMesaj.context.fill()

let resiim = sistemMesaj;
resiim.context.font = "42px calibri"
let resim = new MessageAttachment(resiim.create.toBuffer(), "ONAYLI-SUNUCU-UMEFEK.png")
message.channel.send(resim)

}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['verified-server'],
    permLevel: 0
};

exports.help = {
    name: 'onaylı-sunucu',
    description: 'Sunucuya onaylı sunucu efekti uygular.',
    usage: "onaylı-sunucu"
 }