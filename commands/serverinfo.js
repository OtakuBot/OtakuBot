#By NightcoreAT
const Discord = require('discord.js'); //npm i discord.js
const customisation = require('../customisation.json'); //to import your personal footer

function checkDays(date) { //Let's give the bot what it needs to know the server history, including the day, month, and year
    let now = new Date();
    let diff = now.getTime() - date.getTime();
    let days = Math.floor(diff / 86400000);
    return days + (days == 1 ? " day" : " days") + " ago";
};
exports.run = (client, message, args) => { //Let's give the bot the information it needs to know the server history, including the day, month, and year
    let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"]; //Let's give the bot the server verif level
    let region = { //Let us give the bot all the available region that it needs in order to tell you which country is the server you requested
        "brazil": "Brazil",
        "eu-central": "Central Europe",
        "singapore": "Singapore",
        "us-central": "U.S. Central",
        "sydney": "Sydney",
        "us-east": "U.S. East",
        "us-south": "U.S. South",
        "us-west": "U.S. West",
        "eu-west": "Western Europe",
        "vip-us-east": "VIP U.S. East",
        "london": "London",
        "amsterdam": "Amsterdam",
        "hongkong": "Hong Kong"
    };
    
    var emojis;
    if (message.guild.emojis.size === 0) {
        emojis = 'None'; //The bot will tell you how many emojis are in the server, and if not, it will say none
    } else {
        emojis = message.guild.emojis.size; //The bot will tell you the number of emoji in the server, and if available, it will give you their number
    }

    const embed = new Discord.RichEmbed()
  .setAuthor(message.guild.name, message.guild.iconURL ? message.guild.iconURL : client.user.displayAvatarURL) //Let know the name of the server and its icon with your avatar
  .setThumbnail(message.guild.iconURL) //Here the server icon is placed
  .setTimestamp()
  .addField("Created", `${message.guild.createdAt.toString().substr(0, 15)},\n(${checkDays(message.guild.createdAt)})`, true) //I will tell you how long ago the server was created
  .addField("ID", message.guild.id, true) //the ID Of Server
  .addField("Owner", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true) //server ownership name
  .addField("Region", region[message.guild.region], true) //the region of server
  .addField("User Count", message.guild.memberCount, true) //it will tell you how many users the server has
  .addField("Member Count", message.guild.members.filter(m => !m.user.bot).size, true) //It will tell you how many members the server has
  .addField("Bot Count", message.guild.members.filter(m => m.user.bot).size, true) //It will tell you how many bots the server has
  .addField("AFK Timeout", message.guild.afkTimeout / 60 + ' minutes', true) //It will tell you the timeout for the afk set in the server
  .addField("Roles", message.guild.roles.size, true) //It will tell you how many roles the server has been created
  .addField("Channels", message.guild.channels.size, true) //It will tell you how many channels the server has been created on
  .addField("Emojis", `${emojis}/100`, true) //it's will tell you the number of emoji in the server
  .addField("Verification Level", verifLevels[message.guild.verificationLevel], true) //it will tell you The level of server verification
  .setColor(Math.floor(Math.random()*16777215)) //Optional and you can modify it because it is about choosing a color of rich embed
  .setFooter(`© ${customisation.ownername}`); //from customisation
  message.channel.send({embed});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["serverstats"],
  permLevel: 0
};

exports.help = {
  name: 'serverinfo',
  description: 'Displays information about the server.',
  usage: 'serverinfo'
};
//By NightcoreAT#3678
