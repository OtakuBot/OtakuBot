const Discord = require('discord.js'); //npm i discord.js
const superagent = require('superagent'); //npm i superagent
const customisation = require('../customisation.json');

exports.run = async (client, message, args, tools) => { //lets started your commands script
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/fox_girl"); //lets see wut we went
    
    const embed = new Discord.MessageEmbed() //onec Discordjs is updated to 12.2.0 , richembed is removed ! they replaced now as MessageEmbed
    .setColor("#ff9900") //you can set it as you went
    .setTitle(`kitsune is here !`) // optionel !
    .setImage(body.url) //fox girl well showing here
    .setFooter(`© ${customisation.ownername}`); //your personnel Footer
    message.channel.send({embed})
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'kitsune', //commands name
    description: 'Kitsunes )w)', //commands description
    usage: 'kitsune' //how they work
  };
//By NightcoreAT#3678
