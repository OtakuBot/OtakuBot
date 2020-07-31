const Discord = require('discord.js'); //npm i discord.js
const superagent = require('superagent'); //npm i superagent
const customisation = require('../customisation.json');

exports.run = async (client, message, args, tools) => {
    if (!message.mentions.users.first()) return message.reply("you cant spank nobody , you must choose one by mention them");
    if(message.mentions.users.first().id === "Put Your ID here") return message.reply('You can\'t spank my Dev you pleblord.:facepalm: , you must know they well kill you');
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/spank"); // lets check wut we went
    
    const embed = new Discord.MessageEmbed() // once discordjs is updated , richembed is renamed to messageembed
    .setColor("#ff9900") //set random color or personnel as you went
    .setTitle(`${message.author.username} Spanked ${message.mentions.users.first().username} xDD`) // lets make a some reply fun
    .setImage(body.neko) // lets showing image
    .setFooter(`© ${customisation.ownername}`);
    message.channel.send({embed})
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = { //lets load commands
    name: 'spank', //commands name
    description: 'Spanks someone bro', //command description
    usage: 'spank', //how they work
    example: 'spank <@NightcoreAT#---->' //here some example to how they work
  };
//By NightcoreAT#3678
