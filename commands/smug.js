const Discord = require('discord.js'); //npm i discord.js
const superagent = require('superagent'); //npm i superagent
const customisation = require('../customisation.json'); //lets check your personnel footer

exports.run = async (client, message, args, tools) => { // lets started your commands
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/smug"); //wut we need
    
    const embed = new Discord.MessageEmbed() // once discordjs is updated to 12.2.0 , richembed method is renamed to MessageEmbed
    .setTitle('----') // i make it empty , change it as you went
    .setColor("#ff9900") //its personnel , you can change it
    .setImage(body.url) //here well shozing Smug Image
    .setFooter(`© ${customisation.ownername}`); //your personnel Footer
    message.channel.send({embed})
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = { //lets load commands
    name: 'smug', //commands name
    description: 'Smugs', //commands description
    usage: 'smug' // how they work
  };
//By NightcoreAT#3678
