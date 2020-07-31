const Discord = require('discord.js');//npm i discordjs@12.2.0 
const superagent = require('superagent'); //npm i superagent
const customisation = require('../customisation.json');

exports.run = async (client, message, args, tools) => {
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/baka"); //wut we went to use
    
    const embed = new Discord.MessageEmbed() // changed from RichEmbed to MessageEmbed Method
    .setColor("#ff9900")
    .setImage(body.url)  // your commands well showing your order here
    .setFooter(`© ${customisation.ownername}`);
    message.channel.send({embed})
};

exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'baka',
    description: 'Baka UwU',
    usage: 'baka'
  };
//By NightcoreAT#3678
