const Discord = require('discord.js');
const customisation = require('../customisation.json');

exports.run = async (client, message, args) => {
	let messageArray = message.content.split(" ");   
    if(args && args.length > 1){
      const embed = new Discord.MessageEmbed()
                .setColor("#3bb9ff")
                .setDescription(`**${message.author.username}** has paid their respects`)
        message.channel.send(embed)
          } else {
            const embed2 = new Discord.MessageEmbed()
                .setColor("#3bb9ff")
                .setDescription(`**${message.author.username}** has paid their respects for **${args}**`)
        message.channel.send(embed2)
          }
    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["res", "respect", "r"],
    permLevel: 0
  };
  
  exports.help = {
    name: 'f',
    description: 'Press F to pay Respekt',
    usage: 'f'
  };