const db = require('quick.db')
const Discord = require('discord.js')
exports.run = async (bot, message, args) => {
let id = args[0]
if(!id){
  const gold2 = await db.fetch(`gold_${message.author.id}`);
    if (gold2 == 'acik') {
    message.channel.send(`Sen Bir Gold Üyesin!`)
    };
  if (gold2 == null) {
      message.channel.send(`Sen Bir Gold Üye Değilsin!`)
    };
};
  if(id){
  const gold = await db.fetch(`gold_${id}`);
    if (gold == "acik") {
      message.channel.send(`<@${id}> Bir Gold Üye!`)
    }
  if (gold == null) {
      message.channel.send(`<@${id}> Bir Gold Üye Değil!`)
    }
  }
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['g-s'],
  permLevel: 8// bende 8 sahibin id sizde neyse onu yapın
 };
exports.help = {
  name: 'gold-sorgu',
  description: 'gold var mı yok mu sorgular',
  usage: 'gold-sorgu'
};
