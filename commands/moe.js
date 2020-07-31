const Discord = require('discord.js'); //npm i discord.js
const randomPuppy = require('random-puppy'); //npm i random-puppy
const customisation = require('../customisation.json');

exports.run = (client, message, args) => { //lets started your commands script
    randomPuppy('awwnime') //lets see wut we went
    .then(url => {
        const embed = new Discord.MessageEmbed() //onec Discordjs is updated to 12.2.0 , richembed is removed ! they replaced now as MessageEmbed
        .setImage(url) //here moe is showing
        .setColor('#ff9900') //you set this as yo uwent
        .setFooter(`© ${customisation.ownername}`);//your personnel Footer
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
  name: 'moe', //commands name
  description: 'Sends a random awwnime image', //commands description
  usage: 'moe' //how they working
};
//By NightcoreAT#3678
