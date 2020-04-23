const Discord = require('discord.js');
const settings = require('../settings.json');
const customisation = require('../customisation.json');
exports.run = (client, message, args) => {
    if(!message.channel.guild) return message.reply('** This command only for servers**');
    if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**احتاج لرتبة أعلى**");


  message.guild.member(user).ban(7, user);

message.channel.send(`**:white_check_mark: ${user.tag} banned from the server ! :airplane: **  `)
};

  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["امشطلعبرا"],
  permLevel: 0
};

exports.help = {
  name: '-ban',
  description: 'يسمح لك بحظر من تحدده من السيرفر.',
  usage: 'ban [mention] [reason]'
};