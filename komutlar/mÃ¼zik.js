const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const rexusyardım = new Discord.RichEmbed()
  .setTitle("Sentius Müzik Sistemi")
  .setColor("RANDOM")
  .addField("**s!çal**", "** `Girdiğiniz Müzik İsmini Veya Url'sini Çalar.`**",)
  .addField("**s!durdur**", "** `Şarkıyı Durdurur.`**",)
  .addField("**s!geç**", "** `Sıradaki Şarkıya Geçer.`**",)
  .addField("**s!kuyruk**", "** `Müziği Kuyruğa Alır.`**",)
  .addField("**s!ses**", "** `Müziğin Ses Seviyesini Artırır |Önerilen Max Ses seviyesi:10|.`**",)
  .addField("**s!tekrar**", "** `dinlediğiniz müziğiği tekrar dinlersiniz.`**",)
    .addField("**Developer**", " Sedat0611.exe Drizzy.exe Rip.exe",)

 
  
  
 
   
  
  

  
  
  .setFooter('Sentius Bot ©️ 2020 Tüm Hakları Saklıdır.')

  if (!params[0]) {
    const rexuscommand = Array.from(client.commands.keys());
    const longest = rexuscommand.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(rexusyardım);
  } else {
    let rexuscommands = params[0];
    if (client.commands.has(rexuscommands)) {
      rexuscommands = client.commands.get(rexuscommands);
      message.author.send('Sentius Bot', `= ${rexuscommands.help.name} = \n${rexuscommands.help.description}\nDoğru kullanım: ` + prefix + `${rexuscommands.help.usage}`);
    }
  }
};

exports.conf = {                             
  enabled: true,                             
  guildOnly: false,
  aliases: ['music',],
  permLevel: 0
};

exports.help = {
  name: 'müzik',
  description: 'Müzik çalar',
  usage: 'müzik'
};

