const Discord = require('discord.js'); //npm i discord.js
const superagent = require('superagent'); //npm i superagent.js
const customisation = require('../customisation.json'); 

exports.run = async (client, message, args, tools) => {
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/wallpaper"); //where the bot is searching for
    
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900") // you can set it as you went
    .setImage(body.url) //to show the randome image of wallpaper
    .setFooter(`© ${customisation.ownername}`); //it's optionel from customisation.json ; you can leave it empty 
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
//By NightcoreAT#3678
