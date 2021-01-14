const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Yetkili Yardım Menüsü")
  .setDescription('**Sentius Bot Yardım Komutları**')
  .setColor("RANDOM")
  .addField("<a:776435749452382238:780068972682805248>s!ban @kullanıcı [Sebep]", " Belirtilen Kullanıcıyı Banlar!`",)
  .addField("<a:776435749452382238:780068972682805248>s!kick @kullanıcı [Sebep]", "Belirtilen Kullanıcıyı Sunucudan Atar! `",)
  .addField("<a:776435749452382238:780068972682805248>s!reklam-engelleme-aç", " Reklam Engel Komutunu Açar Reklamları Engeller! ",)
  .addField("<a:776435749452382238:780068972682805248>s!reklam-engelleme-kapat", "Reklam Engel Komutunu Kapatır Reklamları Engellemez! ",)
  .addField("<a:776435749452382238:780068972682805248>s!reklam-kick aç", " Reklam Kick Komutunu Açar Reklamları Engeller! 3 Kere Reklam Yapanı Sunucudan Atar ",)
  .addField("<a:776435749452382238:780068972682805248>s!reklam-kick kapat", " Reklam Kick Komutunu Kapatır Reklamları Engellemez! ",)
  .addField("<a:776435749452382238:780068972682805248>s!otobotsiliciaç", " Botların Mesajını Belirli Bir Saniyede Siler ",)
  .addField("<a:776435749452382238:780068972682805248>s!otobotsilicikapat", " Botların Mesajını Belirli Bir Saniyede Silme Komutunu Kapatır ",)
  .addField("<a:776435749452382238:780068972682805248>s!özelodasistemi", " Özel Oda Sistemi Açar! ",)
.addField("<a:776435749452382238:780068972682805248>s!ses-mute", " sesdeki kişiyi susturursunuz! ",)
    .addField("<a:776435749452382238:780068972682805248>s!sa-as aç/kapat", " ayarlanabilir sa as yapabilrsiniz! ",)
  .addField("<a:776435749452382238:780068972682805248>s!yavaşmod [Süre]", " Yavaşmodu Belirtilen Sürede Yazılan Kanala Uygular! ",)
  .addField("<a:776435749452382238:780068972682805248>s!sunucupanel ", " Server panel kurar ",)

  .addField("<a:776435749452382238:780068972682805248>s!sil [sayı] ", " Yazdıgınız Sayı İçinde o Kadar Siler ",)
  .addField("<a:776435749452382238:780068972682805248>s!ses-kanal-aç [Ses Kanal İsmi] ", " Belirtilen İsimde Ses Kanalı Açar! ",)
  .addField("<a:776435749452382238:780068972682805248>s!unban [Kullanıcı İD] ", " Belirtilen İD'ye Sahip Kullanıcının Banını Kaldırır! ",)
  .addField("<a:776435749452382238:780068972682805248>s!oylama [Oylama Yapılacak Konu] ", " Bulunduğunuz Kanalda Oylama Yaparsınız! ",)
  .addField("<a:776435749452382238:780068972682805248>s!kurallar  ", " hazır kurallar vardır! ",)



  
  .setFooter('s!davet Yazarak Botumuzu Ekleyebilirsiniz!')
  .addField("**Developers**", " **Sedat0611- Drizzy.exe** ",)
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
  aliases: ["yetkililer"],
  permLevel: 0
};

exports.help = {
  name: 'yetkili',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};

  
  