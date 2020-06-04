//By NightcoreAT#3678
const nep = require('../data/nep.json'); //It will extract data from json
const Discord = require('discord.js'); //npm i discord.js
const customisation = require('../customisation.json'); //to import your personal footer

exports.run = (client, message, args) => { //from here your script is started
    args = args.join(" ");
    const embed = new Discord.RichEmbed() //let's check your results randomly
    .setColor(Math.floor(Math.random()*16777215)) //random color is default
    .setTimestamp()
    .setTitle("NEP NEP TOP NEP | Made By NightcoreAT") //it's optional
    .setImage(`${nep[Math.floor(Math.random() * nep.length)]}`) //bot will extract data from nep.json
    .setFooter(`© ${customisation.ownername}`); //your personal footer
    message.channel.send({embed})
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'nep', //your command name
  description: 'Sends a random nep gif or image.', //your command description
  usage: 'nep' //how did it work
};
//By NightcoreAT#3678
