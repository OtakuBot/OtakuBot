const Discord = require('discord.js'); //npm i discordjs@12.2.0
const superagent = require('superagent'); //npm i superagent
const sf = require("snekfetch"); //npm i snekfetch
const customisation = require('../customisation.json');

exports.run = async (client, message, args) => {
    const { body } = await superagent
    .get("http://aws.random.cat/meow");

    const embed = new Discord.MessageEmbed() //changed from RichEmbed to MessageEmbed once discord is updated to 12.0.0
    .setColor("#ff9900")
    .setTitle("Here's Your Cat") //you can change it 
    .setImage(body.file) //here your order is showing as body
    .setFooter(`© ${customisation.ownername}`);
    message.channel.send({embed});
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'cat',
    description: 'Sends a random cat',
    usage: 'cat'
  };
//By NightcoreAT#3678
