const Discord = require('discord.js')

exports.run = (client, message, args, tools) => {

  var LuckNumber = Math.floor((Math.random() * 20) + 0.120);
  const numEmb = new Discord.RichEmbed()
  .setColor(0xFFFF00)
  .setAuthor('ŞANSLI NUMARA', 'https://vignette.wikia.nocookie.net/nintendo/images/0/02/Question_Block_NSMB.png/revision/latest?cb=20151206055532&path-prefix=en')
  .addField('Ve Şanslı Numaranız', `${LuckNumber}!`);
  message.channel.send({embed: numEmb})

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['şn', 'ln'],
  permLevel: 0
};

exports.help = {
  name: 'şanslınumara',
  description: 'şanslı numaranısı gösterir.',
  usage: '!lb'
};
