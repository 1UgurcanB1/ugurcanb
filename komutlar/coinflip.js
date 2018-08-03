const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  message.channel.send(`Sonuç: **${Math.floor(Math.random() * 2) == 0 ? "Kazandın!" : "Kaybettin"}**!`);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['coinflip', 'cf'],
  permLevel: 0
};

exports.help = {
  name: 'coinflip',
  description: 'Coinflip oynanır.',
  usage: 'coinflip'
};
