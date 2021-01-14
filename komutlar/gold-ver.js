 const db = require('quick.db')
const Discord = require('discord.js')
exports.run = async (bot, message, args) => {
  
  let id = args[0]
  if (!args[0]) return message.channel.send(`Gold Verilecek Kullanıcının ID'sini Yazmalısın!`)

   const gold = await db.fetch(`gold_${id}`);
   
   if (gold == 'acik') {
     message.channel.send(`<@${id}> adlı kullanıcı zaten gold üye!`)
    }
 if (gold == null) {
   db.set(`gold_${id}`,  'acik') 
     return message.channel.send(`<@${id}> adlı kullanıcı artık gold üye!`)
    }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gold'],
  permLevel: 8 // bende 8 sahibin id sizde neyse onu yapın
 
};
exports.help = {
  name: 'gold-ver',
  description: 'gold verir',
  usage: 'gold-ver'
};
