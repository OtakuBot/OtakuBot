const Discord = require('discord.js'); //npm i discord.js
const superagent = require('superagent'); //npm i superagent
const customisation = require('../customisation.json');

exports.run = async (client, message, args, tools) => { //lets started your commands script
    if (!message.mentions.users.first()) return message.reply("You need to mention someone to slap them"); //if no one is mentions , lets reply as
    if(message.mentions.users.first().id === "SetYourID") return message.reply('you cant slap them, your are baka.:facepalm:'); //if they mentions you , lets reply as
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/slap"); //wut we need 
    
    const embed = new Discord.MessageEmbed() //once discordjs is updated to 12.2.0 , richembed is removed , they replaced as MessageEmbed Method
    .setColor("#ff9900") // you can set it as you went
    .setTitle(`bro , ${message.mentions.users.first().username} you have been slaped by ${message.author.username}`) //lets reply as a some fun reply
    .setImage(body.url) //lets show slap image (GIF}
    .setFooter(`© ${customisation.ownername}`); //personnel footer
    message.channel.send({embed})
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'slap', //commands name
    description: 'Slaps anyone you went', //commands description
    usage: 'slap', //how they work
    example: 'slap <@Otaku#---->' //lets make a some example about how they work
  };
//By NightcoreAT#3678
