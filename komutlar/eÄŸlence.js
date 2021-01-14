const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Eğlence Yardım Menüsü")
  .setDescription('**Sentius Bot Yardım Komutları**')
  .setColor("RANDOM")
  .addField("**<a:776435749452382238:780068972682805248>s!aşkölçer [etiket]**" , " **Etiketlediginiz Kişi İlt Aşkınızı Ölçer Siniz** ")
  .addField("**<a:776435749452382238:780068972682805248>s!öp [etiket] **", " **Etiketlediğiniz Kişiyi Öpersiniz** ",)
  .addField("**<a:776435749452382238:780068972682805248>s!saat **", "**Saatin Kaç Oldugunu Gösterir** `",)
  .addField("**<a:776435749452382238:780068972682805248>s!koş **", " **Koşarsınız**",)
  .addField("**<a:776435749452382238:780068972682805248>s!banner-yaz **", "**Mesajınızı Banner Olarak Yazar!** `",)
  .addField("**<a:776435749452382238:780068972682805248>s!embed-yaz **", "**Mesajınızı Embed Olarak Yazar!** `",)
  .addField("**<a:776435749452382238:780068972682805248>s!çekiliş **", " **çekiiliş yaparsınız!**",)
   .addField("**<a:776435749452382238:780068972682805248>s!kasa-aç **", " **CS:GO Kasa Açar!**",)
    .addField("**<a:776435749452382238:780068972682805248>s!yapımcım **", " **yapımcımızı gösterir!**",)
  .setFooter('**--------------------------**')
  .setFooter('!davet Yazarak Botumuzu Ekleyebilirsiniz!')
  .addField("**Developer**", " Sedat0611 Drizzy Rip.exe",)
  
  
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["eglence"],
  permLevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};