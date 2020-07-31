const Discord = require('discord.js'); //npm i discord.js
const superagent = require('superagent'); //npm i superagent
const customisation = require('../customisation.json');


exports.run = async (client, message, args, tools) => { //lets started your commands
    if (!message.mentions.users.first()) return message.reply(":x: | i see anything is wrong ,You need to mention someone to pat them"); //lets reply as this if you didnt mention anyone
    if (message.mentions.users.first().id === "482128001828651008") return message.channel.send('<a:yayyy:497742636439044096>'); //lets reply as this if you mentions
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/poke"); //lets check wut we need
    
    const embed = new Discord.MessageEmbed() // RichEmbed is renamed as MessageEmbed onec discordjs is updated to newest version
    .setColor("#ff9900") // you can set it random
    .setTitle(`i see that is, ${message.author.username} poked ${message.mentions.users.first().username}`) // lets reply as a funny reply
    .setImage(body.url) //here well poke image is showing
    .setFooter(`© ${customisation.ownername}`);
    message.channel.send({embed})
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = { // lets load your commands
    name: 'poke', // commands name
    description: 'Pokes anyone you went', // commands description
    usage: 'poke', //how they work
    example: 'poke <@otaku#---->' //here il show a some example to how they work    
  };
//By NightcoreAT#3678
