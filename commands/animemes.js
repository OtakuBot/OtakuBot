//By NightcoreAT#3678
const Discord = require('discord.js'); //npm i discord.js 
const randomPuppy = require('random-puppy'); //npm i random-puppy
const customisation = require('../customisation.json'); //to import your personal footer

exports.run = (client, message, args) => { //Let's start the command script
    randomPuppy('animemes') //Let's check what we're looking for
    .then(url => { //then the results is
        const embed = new Discord.MessageEmbed() //as or is ; from here , your Command well become as RichEmbed Message {DiscordJS 12 has change it from RichEmbed to MessageEmbed}
        .setImage(url) //The link we requested turns into an image
        .setColor('#ff9900') //optinal ; you can set it random
        .setFooter(`© ${customisation.ownername}`); //here your personal footer
     return message.channel.send({ embed }); //done ; The image will be shown
})
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['amemes'], //You can modify the aliases or keep it Or leave it as is or add another aliases current side
    permLevel: 0
  };
  
  exports.help = {
    name: 'animemes', //your command name
    description: 'Sends a random post from r/animemes', //your command description ; you can set it as you want
    usage: 'animemes' //how that command is working
  };
//By NightcoreAT#3678
