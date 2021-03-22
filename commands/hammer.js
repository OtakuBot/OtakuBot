//By NightcoreATDZO#3550
const settings = require('../settings.json');
exports.run = (client, message, args) => {
  let user = message.mentions.users.first();
  let reason = args.slice(0).join(' ');
  if (reason.length < 1) return message.reply('You can\'t throw a hammer at thin air, pick someone fool.');
  if(message.mentions.users.first().id === "145608354495070208") return message.reply('You can\'t hurt him you pleblord.:facepalm:')
  message.channel.send(`${message.author.username} threw a hammer at ${message.mentions.users.first().username}. :hammer:`)
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'hammer',
  description: 'Gives you a hammer to throw at a pleb.',
  usage: 'hammer'
};
