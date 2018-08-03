const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Özel mesajlarını kontrol et bebek. :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Kredi:Bazı Kullanıcılardan,Rulet Ve Ya Otomatik olarak sorulan sorulardan,Ve Ya Bazılarından Dilenerek Alabilirsiniz! Ne işe Yarar?:!Marketten Çeşitli Şeyler Almaya,Özel Rollere Vb.Şeylere Yarar!');
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kredi bilgi', 'kredibilgi', 'kb', 'kredib', 'kbilgi','kredihakkında'],
  permLevel: 0
};

exports.help = {
  name: 'kredibilgi',
  description: 'Kredi ile ilgili bilgi verir.',
  usage: 'kredibilgi'
};
