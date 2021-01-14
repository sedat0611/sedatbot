const db = require('quick.db')
const Discord = require('discord.js')
exports.run = async (bot, message, args) => {
  
  let id = args[0]
  if (!args[0]) return message.channel.send(`Gold'u İptal Edilecek Kullanıcının ID'sini Yazmalısın!`)
const gold = await db.fetch(`gold_${id}`);
   if (gold == null) {
     message.channel.send(`<@${id}> adlı kullanıcı zaten gold üye değil!`)
    } 
  if (gold == "acik") {
   db.set(`gold_${id}`,  null) 
     return message.channel.send(`<@${id}> adlı kullanıcı artık gold üye değil!`)
    }
  }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gold-ç'],
  permLevel: 8// bende 8 sahibin id sizde neyse onu yapın
};
exports.help = {
  name: 'gold-çıkar',
  description: 'gold çıkarır',
  usage: 'gold-çıkar'
};
  