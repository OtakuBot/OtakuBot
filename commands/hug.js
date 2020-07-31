const Discord = require('discord.js'); //npm i discord.js
const superagent = require('superagent'); //npm i superagent
const customisation = require('../customisation.json');

exports.run = async (client, message, args, tools) => { //lets started your commands script
    if (!message.mentions.users.first()) return message.reply("You need to mention someone to hug them"); //if no one is mentions , lets reply as
    const { body } = await superagent
    .get("https://nekos.life/api/hug"); //lets see wut we went
    
    const embed = new Discord.MessageEmbed() //onec Discordjs is updated to 12.2.0 , richembed is removed ! they replaced now as MessageEmbed
    .setColor("#ff9900") // you can set it as you went
    .setTitle(`).), ${message.author.username} hugged ${message.mentions.users.first().username}`) // lets reply like this if we mentions
    .setImage(body.url) // hug gif well showing here
    .setFooter(`© ${customisation.ownername}`);//your personnel Footer
    message.channel.send({embed})
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = { //lets load commands
    name: 'hug', //commands names
    description: 'hugs which you went', //commands description
    usage: 'hug', //how they work
    example: 'hug <@NightcoreAt#---->' //here a some example about how they work
  };
//By NightcoreAT#3678
