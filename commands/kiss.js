const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../customisation.json');

exports.run = async (client, message, args, tools) => {
	if (!message.channel.nsfw) return message.channel.send(" :x: Woops, **you can not use this outside a room** **`NSFW`** !")
    if (!message.mentions.users.first()) return message.reply("O3o you must mention user that you want to kiss him/her");
	if (message.mentions.users.first().id === message.author.id) return message.channel.send('wai , why you want to kiss yourself');
    const { body } = await superagent
    .get("https://nekos.life/api/kiss");
    
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle(`OwO, ${message.author.username} has kissed ${message.mentions.users.first().username}`)
    .setImage(body.url) 
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
    name: 'kiss',
    description: 'kiss anyone',
    usage: 'kiss'
  };
