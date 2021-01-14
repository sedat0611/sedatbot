const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Yetkili Yardım Menüsü")
  .setDescription('**Sentius Bot Yardım Komutları**')
  .setColor("RANDOM")
  .addField("**s!istatistik **" , ":tada: **Botun İstatistiğini Gösterir!** :tada:")
  .addField("**s!rol-bilgi [rol etiketi]**", ":tada: **Etiketlediğiniz Rolün İstatistiklerine Bakarsınız** :tada:",)
  .addField("**s!tavsiye [açıklama]**", ":tada: **Tavsiye Kanalına Mesaj Atarsınız!**`:tada:",)
  .addField("**s!servericon **", ":tada:**Yazılan Sunucunun Fotoğrafını Atar!** `:tada:",)
  .addField("**s!yardım **", ":tada: **Yardım menüsünü açar** :tada:",)
  .addField("**s!davet **", ":tada: **Botun davet linkini atar.** :tada:",)
  .addField("**s!bot-bilgi **", ":tada: **Bot bilgilerine bakarsınız** :tada:",)
  .addField("**s!bilgi **", ":tada: **Bizim bilgilerimize bakarsınız** :tada:",)
  .addField("**s!korona [Ülke Kodu]**", ":tada: **Belirtilen Bölgenin Korona İstatistiğine Bakarsınız!** :tada:",)
  .addField("**s!banlist**", ":tada: **Banlı Listesini Gösterir!** :tada:",)
  .addField("**s!sunucu-bilgi**", ":tada: **Sunucu Hakkında Bilgi Verir!** :tada:",)
  .addField("**s!ping**", ":tada: **Botun Pingini Gösterir!** :tada:",)
  .setFooter('**--------------------------**')
  .setFooter('s!davet Yazarak Botumuzu Ekleyebilirsiniz!')
  .addField("**Developers**", " **Sedat0611 Drizzy.exe** ",)
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
  name: 'kullanıcı',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};