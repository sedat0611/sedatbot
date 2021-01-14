const Discord = require('discord.js');

exports.run = async (client, message, args) => {
const embed = new Discord.RichEmbed();
embed.setDescription("** <a:756526137760415906:780349528271224832> Işte Sitemiz [TIKLA](http://www.botsentius.tk/)**")

message.channel.send(embed)
}
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['site'],
permLevel: 0
}

exports.help = {
name: 'sitemiz',

}
 