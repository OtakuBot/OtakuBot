const settings = require('../settings.json');
const Discord = require('discord.js');
const customisation = require('../customisation.json');
exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("**ما عندي برمشن**").then(msg => msg.delete(6000))
  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");
  let role = message.guild.roles.find (r => r.name === "Muted");
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")
  await toMute.removeRole(role)
  message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");
  return;
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["m"],
  permLevel: 0
};

exports.help = {
  name: '-unmute',
  description: 'mute member',
  usage: 'mute [mention]'
};