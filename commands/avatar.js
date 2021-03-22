//By NightcoreATDZO#3550
const Discord =  require('discord.js');
const customisation = require('../customisation.json');
exports.run = (client, message, args) => {
    let avatar = message.mentions.users.size ? message.mentions.users.first().avatarURL({ format: 'png', dynamic: true, size: 2048 }) : message.author.avatarURL({ format: 'png', dynamic: true, size: 2048 });
    if (message.mentions.users.size > 0) {
      const embed = new Discord.MessageEmbed()
        .setColor(0xFFFF00)
        .setTitle(`${message.mentions.users.first().username}: avatar`)
        .setImage(`${avatar}`)
        .setFooter(`© ${customisation.ownername}`);
        message.channel.send({embed});
    } else {
      const embed = new Discord.MessageEmbed()
      .setColor(0xFFFF00)
      .setTitle(`${message.author.username}: avatar`)
      .setImage(`${avatar + "?size=2048"}`)
      .setFooter(`© ${customisation.ownername}`);
      message.channel.send({embed});
    }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: 'Fetches a user\'s avatar.',
  usage: 'avatar <user>'
};
//By NightcoreATDZO#3550
