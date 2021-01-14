const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor(message.author.username + ' Polis Geliyor!!!!')
    .setColor('RANDOM')
    .setTimestamp('https://images-ext-2.discordapp.net/external/ALXGyy_LjtcnHtGEH0DSvXPko6Qi0yp5CbkdFQomSTg/http/www.hareketligifler.net/data/media/114/polis-hareketli-resim-0023.gif?width=192&height=144')
    .setDescription('https://images-ext-2.discordapp.net/external/ALXGyy_LjtcnHtGEH0DSvXPko6Qi0yp5CbkdFQomSTg/http/www.hareketligifler.net/data/media/114/polis-hareketli-resim-0023.gif?width=192&height=144')  
       setImage(`http://www.hareketligifler.net/data/media/114/polis-hareketli-resim-0023.gif`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help ={
  name: 'ara155',
  description: 'Polisi Arar (ciddiye almayın)',
  usage: 'ara155'
};