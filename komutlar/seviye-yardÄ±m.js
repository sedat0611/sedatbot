const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Yetkili Yardım Menüsü")
  .setDescription('**Sentius Bot Yardım Komutları**')
  .setColor("RANDOM")
  .addField("<a:redyildiz:762063874794586153> **s!seviye <a:redyildiz:762063874794586153>**" , " **Seviyenizi Gösterir!** ")
  .addField("**<a:redyildiz:762063874794586153>  s!seviye resim <a:redyildiz:762063874794586153>**", " **Seviye Resim Belirler!** ",)
  .addField("**<a:redyildiz:762063874794586153>  s!seviye renk <a:redyildiz:762063874794586153>**", " **Seviyenize Renk Verir!**`",)
  .addField("**<a:redyildiz:762063874794586153>  s!seviye ödül @rol [Rolün Verileceği Seviye] <a:redyildiz:762063874794586153>**", "**Belirtilen Seviyeye Rol Ödülü Verir!** `",)
  .addField("**<a:redyildiz:762063874794586153>  s!seviye saydam <a:redyildiz:762063874794586153>**", "**Seviyenize Saydam Görüntü Verir!** `",)
  .setFooter('**--------------------------**')
  .setFooter('s!davet Yazarak Botumuzu Ekleyebilirsiniz!')
  .addField("**Developer**", " **Sedat0611 Drizzy.exe  ** ",)
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
  aliases: [""],
  permLevel: 0
};

exports.help = {
  name: 'seviye-yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};