const settings = require('../settings.json');
const Discord = require('discord.js');
const customisation = require('../customisation.json');
exports.run = (client, message, args) => {
    if(!message.channel.guild) return message.reply('** This command only for servers**');
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
    message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
    }).then(() => {
        message.reply("**__تم فتح الشات__✅**")
    });
 }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["فتح"],
  permLevel: 0
};

exports.help = {
  name: '-unmutechannel',
  description: 'mute member',
  usage: 'mute [mention]'
};