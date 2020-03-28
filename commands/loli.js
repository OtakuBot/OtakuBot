const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../customisation.json');

exports.run = async (client, message, args, tools) => {
    const { body } = await superagent
    .get("https://api.lolis.life/neko");
    
    const embed = new Discord.RichEmbed()
    .setColor("#ff9900")
    .setImage(body.url) 
    .setFooter(`©${customisation.ownername}`);
    message.channel.send({embed})
};

exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'loli',
    description: 'random loli OwO',
    usage: 'loli'
  };