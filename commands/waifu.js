const Discord = require('discord.js'); //npm i discord.js
const superagent = require('superagent'); //npm i superagent
const customisation = require('../customisation.json');

exports.run = async (client, message, args, tools) => {
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/waifu"); // where the bot is well searching for
    
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setImage(body.url) // to show random waifu
    .setFooter(`©${customisation.ownername}`); //it's optionel from customisation.json , you can leave it empty
    message.channel.send({embed})
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'waifu',
    description: 'random waifu OwO',
    usage: 'waifu'
  };
//By NightcoreAT#3678
