const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../customisation.json');

exports.run = async (client, message, args, tools) => {
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/baka");
    
    const embed = new Discord.RichEmbed()
    .setColor("#ff9900")
    .setImage(body.url) 
    .setFooter(`© NightcoreAMV Bot by ${customisation.ownername}`);
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