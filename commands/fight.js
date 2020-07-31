const fights = require('../data/fights.json'); //lets export data
exports.run = (client, message, args) => { // lets started your command script
  let user = message.mentions.users.first();
  let reason = args.slice(0).join(' ');
  if (reason.length < 1) return message.reply('choose the user which you need to fight them.'); //if you didnt mention anyone , return as
  if(message.mentions.users.first().id === "put random ID") return message.reply('kame hame ha , your damage was 16 so i won'); //lets make a some reply as fun
  if(message.mentions.users.first().id === "YourID") return message.reply('you cannot won , because he well kill you:wink:'); //lets make your friends is cannot fight you
      message.channel.send(`${message.author.username} is fighting vs ${message.mentions.users.first().username} ${fights[Math.floor(Math.random() * fights.length)]}`)// lets export a random respond
  }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'fight', // commands name
  description: 'Fights a user.', // commands description
  usage: 'fight <user>', // how they work
  example: 'fight <@NightcoreAt#---->' //let show an example to how working
};
//By NightcoreAT#3678
