const Discord = require('discord.js'); //npm i discord.js
const customisation = require('../customisation.json');

exports.run = async (client, message, args) => {
    let avatar = message.mentions.users.size ? message.mentions.users.first().avatarURL : message.author.avatarURL; //to generate a random woosh with your avatar 
    
    const embed = new Discord.RichEmbed()
    .setColor("#ff9900")
    .setImage(`https://api.alexflipnote.dev/jokeoverhead?image=` + avatar) //with the woosh , it's well showing your friends with her avatar
    .setFooter(`© ${customisation.ownername}`); // it's optionel from customisation.json , you can leave it empty
    message.channel.send({embed}); //to send that command as embed
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'woosh',
    description: 'r/woosh',
    usage: 'woosh (w or w/o @mention)'
  };
//By NightcoreAT#3678
