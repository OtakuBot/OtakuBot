const fights = require('../data/fights.json');
exports.run = (client, message, args) => {
  let user = message.mentions.users.first();
  let reason = args.slice(0).join(' ');
  if (reason.length < 1) return message.reply('choose the user which you need to fight them.');
  if(message.mentions.users.first().id === "482128001828651008") return message.reply('kame hame ha , your damage was 16 so i won');
  if(message.mentions.users.first().id === "242263403001937920") return message.reply('you cannot won , because he well kill you:wink:');
      message.channel.send(`${message.author.username} راه الضارب كونطر ${message.mentions.users.first().username} ${fights[Math.floor(Math.random() * fights.length)]}`)
  }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'fight',
  description: 'Fights a user.',
  usage: 'fight <user>'
};