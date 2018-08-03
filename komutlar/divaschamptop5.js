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
    .setDescription('Buradaki Olayımız WWE Tarafından Seçilen En İyi 5 Divas Şampiyonluğudur\n\n1-AJ Lee:Kazanma Sayısı 3,Sahip Olduğu Gün Sayısı 406\n\n2-Nikki Bella:Kazanma Sayısı 2,Sahip Olduğu Gün Sayısı 307\n\n3-Maryse:Kazanma Sayısı 2,Sahip Olduğu Gün Sayısı 265\n\n4-Eve Torres:Kazanma Sayısı 3,Sahip Olduğu Gün Sayısı 260\n\n5-Michelle McCool-Kazanma Sayısı 2,Sahip Olduğu Gün Sayısı 218');
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['divaschampion', 'dc', 'top5', 'dct5', 'dcbilgi','dchakkında'],
  permLevel: 0
};

exports.help = {
  name: 'divaschampiontop5',
  description: 'WWE ile ilgili bilgi verir.',
  usage: 'divabilgi'
};
