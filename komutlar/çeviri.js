const Discord = require('discord.js')
exports.run = (client, message, args, tools) => {


  if(!args[0]) {

  const buyEmb = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTitle(`${message.author.username} kendine şeker aldın 🍬`)
  .setImage('https://data.whicdn.com/images/29808733/original.gif')
  message.channel.send({embed: buyEmb})
  return;
  }


  if(!message.mentions.members.first().user.username === message.isMentioned(message.author) ) {

  const candyEmb = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTitle(`${message.author.username} ${message.mentions.members.first().user.username} şeker hediye etti! 🍬`)
  .setImage('https://78.media.tumblr.com/427ed12ad003c4dae17f31a198396656/tumblr_nxxqz5SRlY1uf9lmco1_500.gif')
  message.channel.send({embed: candyEmb})
  return;
  }
  const buyEmb = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTitle(`${message.author.username} kendine şeker aldın! 🍬`)
  .setImage('https://data.whicdn.com/images/29808733/original.gif')
  message.channel.send({embed: buyEmb})

  }

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'şeker',
    description: 'kendine yada başkasına şeker hediye edersin.',
    usage: 'şeker'
  };
