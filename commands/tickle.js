const Discord = require('discord.js'); //npm i discord.js
const superagent = require('superagent'); //npm i superagent
const customisation = require('../customisation.json'); //set your personnel footer

exports.run = async (client, message, args, tools) => { // lets started your script
    if (!message.mentions.users.first()) return message.reply("You need to mention someone to tickle them");
    if(message.mentions.users.first().id === "you ID here") return message.reply('You cant tickle him. he well return it.');
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/tickle"); // lets load (body.url) image
    
    const embed = new Discord.MessageEmbed() //onec discord js is updated to newest ver , RichEmbed method is renamed to MessageEmbed
    .setColor("#ff0000") //set is as you went
    .setTitle(`hehe, ${message.author.username} tickled ${message.mentions.users.first().username}`) // lets make it so fun
    .setImage(body.url) //lets show your image
    .setFooter(`© ${customisation.ownername}`);
    message.channel.send({embed})
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = { 
    name: 'tickle', // command name
    description: 'lets tickle anyone', //commands description
    usage: 'tickle <@mention>', //how they work
    example: 'tickle <@Otaku#---->' //how you can use it for example
  };
//By NightcoreAT#3678
