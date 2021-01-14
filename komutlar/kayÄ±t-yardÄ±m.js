const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Kayıt Yardım Menüsü")
  .setDescription('**Sentius Bot Yardım Komutları**')
  .setColor("RANDOM")
  .addField("**s!kayıt-kanal-ayarla #kanal**" , ":tada: **Kayıt Kanalını Ayarlar!** :tada:")
  .addField("**s!kanal-aylara**", ":tada: **Kayıt Bildirim Kanalını Ayarlar!** :tada:",)
  .addField("**s!kayıt-verilecek-rol-ayarla @rol**", ":tada: **Kayıt Olunca Verilecek Rolü Ayarlar!**`:tada:",)
  .addField("**s!kayıt-alınacak-rol-ayarla @rol**", ":tada:**Kayıt Olunca Alınacak Rolü Ayarlar!** `:tada:",)
  .addField("**s!kayıt-ol**", ":tada: **Kayıt Olursunuz!** :tada:",)
  .addField("**s!kayıt-yardım**", ":tada: **Kayıt Komutlarını Gösterir!** :tada:",)
  .setFooter('**--------------------------**')
  .setImage("https://media.discordapp.net/attachments/777562068790018050/777841297758486538/standard_8.gif")
  .setFooter('s!davet Yazarak Botumuzu Ekleyebilirsiniz!')
  .addField("**Developer**", " **Sedat0611 Drizy.exe** ",)
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
  name: 'kayıt-yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};