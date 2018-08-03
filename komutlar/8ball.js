const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

  //!8ball <question fjdksf>
  if(!args [2]) return message.reply("lütfen sorunu sor");
  let replies = ["Evet.", "Hayır.", "Bilmiyorum.", "Sonra Sor."];

  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice(1).join(" ");

  let ballembed = new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setColor("#FF9900")
  .addField("Question", question)
  .addField("Answer", replies[result]);

  message.channel.send(ballembed)



}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['8ball', 'b8', '8b', 'ball8'],
  permLevel: 0
};

exports.help = {
  name: '8ball',
  description: 'Bota Soru Sorar',
  usage: '8ball'
};
