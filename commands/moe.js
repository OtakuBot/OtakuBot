const Discord = require('discord.js');
const randomPuppy = require('random-puppy');
const customisation = require('../customisation.json');

exports.run = (client, message, args) => {
	if (!message.channel.nsfw) return message.channel.send(" :x: Woops, **you can not use this outside a room** **`NSFW`** !")
    randomPuppy('awwnime')
    .then(url => {
        const embed = new Discord.MessageEmbed()
        .setImage(url)
        .setColor('#ff9900')
        .setFooter(`© OtakuGirl by ${customisation.ownername}`);
        return message.channel.send({ embed });
   })
   }
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
    };
     
exports.help = {
  name: 'moe',
  description: 'random awwnime',
  usage: 'moe'
};
