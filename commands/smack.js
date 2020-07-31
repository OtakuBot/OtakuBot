exports.run = (client, message, args) => { //lets started your commands script
  let user = message.mentions.users.first(); //lets check that which mentions first well not be as smacked
  let reason = args.slice(0).join(' ');
  if (reason.length < 1) return message.reply('You cant smack thin air, pick someone fool.'); //lets make a reply if no one mentions
  if(message.mentions.users.first().id === "SetYourID") return message.reply('you cant hurt them , he well kill you.:facepalm:'); // lets make a some fun reply
  message.channel.send(`${message.author.username} smacked ${message.mentions.users.first().username}.`) //lets make a some fun reply
  }
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = { //lets load your commands
  name: 'smack', // commands name
  description: 'Smacks a user.', //commands description
  usage: 'smack <user>' //how they work
};
//By NightcoreAT#3678
