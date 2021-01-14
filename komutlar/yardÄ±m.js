const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Yardım Menüsü")
  .setDescription('**<a:756526137760415906:780349528271224832>  Sentius Yardım Komutları <a:776435749452382238:780068972682805248> **')                  
  
  .setColor("RANDOM")
  .addField("**<a:756526137760415906:780349528271224832>  s!yardım <a:776435749452382238:780068972682805248>**" , " **Yardım Menüsünü Gösterir!** ")
  .addField("**<a:756526137760415906:780349528271224832>  s!yetkili <a:776435749452382238:780068972682805248>**", " **Yetkili Komutlarını Gösterir!** ",)
  .addField("**<a:756526137760415906:780349528271224832> s!kullanıcı <a:776435749452382238:780068972682805248>**", " **Kullanıcı Komutlarını Gösterir!**`",)
  .addField("**<a:756526137760415906:780349528271224832> s!eğlence <a:776435749452382238:780068972682805248>**", " **eğlence komutlarını gösterir!** ",)
  .addField("**<a:756526137760415906:780349528271224832> s!seviye-yardım <a:776435749452382238:780068972682805248>**", " **seviye komutlarını gösterir!** ",)
  .addField("**<a:756526137760415906:780349528271224832> s!site <a:776435749452382238:780068972682805248>**", " **Sentius Bot sitemize yönlendirir!** ",)
 .addField("**<a:756526137760415906:780349528271224832> s!sunucutanıt <a:776435749452382238:780068972682805248> **", " **sunucunuzu tanıtır!** ",)
  .addField("**<a:756526137760415906:780349528271224832> s!istekbildir <a:776435749452382238:780068972682805248> **", " **isteklerinizi girersiniz!** ",)
  .addField("**<a:756526137760415906:780349528271224832>  s!müzik <a:776435749452382238:780068972682805248> **", " **müzik komutlarını gösteriri!** ",)
  .addField("**<a:756526137760415906:780349528271224832>  s!reklam-engelleme aç/kapat <a:776435749452382238:780068972682805248> **"," **reklam yapan kişinin mesajını siler!** ",)
  .setImage("https://cdn.discordapp.com/attachments/757343062115745974/785985556412497940/standard_10.gif")
  .setFooter('s!davet Yazarak Botumuzu Ekleyebilirsiniz!')
  
  .addField("<a:756526137760415906:780349528271224832>   **Developer**", " Sedat0611.exe Drizzy.exe Rip.exe ",)
  
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
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};