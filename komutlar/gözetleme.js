const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let replies = ["https://media.giphy.com/media/3o752efSfqywG0p6ow/giphy.gif", "https://media.giphy.com/media/xTg8Bdi3qnku1lDbTa/giphy.gif", "https://media.giphy.com/media/l0K3YxMUznl4kvPzO/giphy.gif", "https://media.giphy.com/media/3o6vY5flG0zz1MQ1Py/giphy.gif", "https://media.giphy.com/media/3owvK28EpYXOm2pjFK/giphy.gif", "https://media.giphy.com/media/9RXFdcRm7LadLV1lNB/giphy.gif", "https://media.giphy.com/media/33E84uT5xqXPKTKmyv/giphy.gif", "https://media.giphy.com/media/1zl3hQzPKI7A54shpL/giphy.gif", "https://media.giphy.com/media/l3fzPDIRi4HbBmW8E/giphy.gif", "https://media.giphy.com/media/xT39CRKAu2F1BkLmw0/giphy.gif", "https://media.giphy.com/media/iqf3rZtCNLftC/giphy.gif", "https://media.giphy.com/media/8RPUju6m0pPSE/giphy.gif", "https://media.giphy.com/media/3o6vY3jqZmZexI6LAs/giphy.gif", "https://media.giphy.com/media/3gL3o69C2eigwBU43b/giphy.gif", "https://media.giphy.com/media/xT39D3N99IGzEWXeWQ/giphy.gif", "https://media.giphy.com/media/VPtakcmZS6z5K/giphy.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.RichEmbed()
        .setTitle("WWE DE OLSAYDIN BAKALIM HANGİ GÜREŞCİ OLACAKMIŞSIN!")
        .setColor("#FF69B4")
        .setFooter(`WWE DE OLSAYDIN BAKALIM HANGİ GÜREŞCİ OLACAKMIŞSIN! ${message.author.tag} `, message.author.avatarURL)
        .setImage(replies[result]);

    message.channel.send(gifembed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['wwe', "güreşci", "wweg", "wg", "wgüreşci"],
  permLevel: 0
};

exports.help = {
  name: 'wwewrestler',
  description: 'Hangi WWE Güreşcisi Olduğunu gösterir.',
  usage: 'wwewrestler'
};
