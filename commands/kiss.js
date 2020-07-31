//By NightcoreAT#3678
const Discord = require('discord.js'); //npm i discord.js | if you need download using Git Bash => discord.js version 12.2.0
const superagent = require('superagent'); //npm i superagent
const customisation = require('../customisation.json'); //to export your footer and put it as your own footer down

exports.run = async (client, message, args, tools) => {
    if (!message.mentions.users.first()) return message.reply("You need to mention someone to kiss them");
    const { body } = await superagent
    .get("https://nekos.life/api/kiss");
    
    const embed = new Discord.MessageEmbed() //RichEmbed is changed to MessageEmbed because the newest update is remove `RichEmbed` Method
    .setColor("#ff9900") // you can set it random color
    .setTitle(`OwO, ${message.author.username} kissed ${message.mentions.users.first().username}`) 
    .setImage(body.url) // from .get to insert image as body
    .setFooter(`© ${customisation.ownername}`);
    message.channel.send({embed}) // your resulte well showing here
};

exports.conf = { //config commands
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = { //config export help to make bots is know where or what the commands names
    name: 'kiss',
    description: 'Kisses someone OwO',
    usage: 'kiss'
  };
//By NightcoreAT#3678
