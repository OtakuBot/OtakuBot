const moment = require('moment'); //npm i moment
const Discord = require('discord.js'); //npm i discord.js
const customisation = require('../customisation.json'); //your personnel footer
function checkDays(date) { // that will count the time you spent on server and discord
  let now = new Date();
  let diff = now.getTime() - date.getTime();
  let days = Math.floor(diff / 86400000);
  return days + (days == 1 ? " day" : " days") + " ago";
};
exports.run = async (client, msg, args) => {
  let user = msg.mentions.users.first(); 
  let muser = msg.guild.member(msg.mentions.users.first());
    if (!muser) muser = msg.member;
    if(!user) user = msg.author;
  const embed = new Discord.RichEmbed();
  embed.addField("Username", `${user.username}#${user.discriminator}`, true) //that field well show your information full on Discord Or Server
          .addField("ID", `${user.id}`, true) //your ID and your name OR your friends ID and his name
          .setColor(3447003)
          .setThumbnail(`${user.avatarURL}`) // your personnel avatar or your friends personnel avatar
          .setTimestamp()
          .setURL(`${user.avatarURL}`) 
          .addField('Currently', `${muser.presence.status.toUpperCase()}`, true) //check if your status is Online;Idle;DND;Offline
          .addField('Game', `${muser.presence.game === null ? "No Game" : muser.presence.game.name}`, true) //check your game qctivity or your custom status
          .addField('Joined Discord', `${moment(user.createdAt).toString().substr(0, 15)}\n(${moment(user.createdAt).fromNow()})`, true)
          .addField('Joined Server', `${moment(muser.joinedAt).toString().substr(0, 15)}\n(${moment(muser.joinedAt).fromNow()})`, true)
          .addField('Roles', `${muser.roles.array()}`, true) //All the roles that you own, but they do not apply to all servers in it, but to the server in which you use this command 
          .addField('Is Bot', `${user.bot.toString().toUpperCase()}`, true) //Most likely if you select a member he will say no and if it is a bot he will say yes
          .setFooter(`© ${customisation.ownername}`);
      msg.channel.send({embed});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["userstats"],
  permLevel: 0
};

exports.help = {
  name: 'userinfo',
  description: 'Displays information about a user.',
  usage: 'userinfo <@user>'
};
//By NightcoreAT#3678
