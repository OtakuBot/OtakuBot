const settings = require('../settings.json');
const Discord = require('discord.js');
const customisation = require('../customisation.json');
exports.run = (client, message, args) => {
    if(!message.channel.guild) return message.reply('** This command only for servers**');
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
    message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
    }).then(() => {
        message.reply("**__تم تقفيل الشات__ ✅ **")
    });
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["غلق"],
  permLevel: 0
};

exports.help = {
  name: '-mutechannel',
  description: 'mute member',
  usage: 'mute [mention]'
};