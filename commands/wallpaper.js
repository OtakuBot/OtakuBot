const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../customisation.json');

exports.run = async (client, message, args, tools) => {
	if (!message.channel.nsfw) return message.channel.send(" :x: Woops, **you can not use this outside a room** **`NSFW`** !")
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/wallpaper");
    
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setImage(body.url) 
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
    name: 'wallpaper',
    description: 'Anime wallpapers OwO',
    usage: 'wallpaper'
  };
//By NightcoreATDZO#3550
