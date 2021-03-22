const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../customisation.json');

exports.run = async (client, message, args, tools) => {
	if (!message.channel.nsfw) return message.channel.send(" :x: Woops, **you can not use this outside a room** **`NSFW`** !")
    const { body } = await superagent
    .get("https://nekos.life/api/neko");
    link = body.neko;
    
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle("Neko-Chan Neko-Chan UvU ")
    .setImage(body.neko) 
    .setFooter(`© OtakuGirl by ${customisation.ownername}`);
    message.channel.send({embed})
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'neko',
    description: 'Random Neko OwO',
    usage: 'neko'
  };
