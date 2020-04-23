const Discord = require('discord.js');
const customisation = require('../customisation.json');
exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply('**حدد من ترغب بطرده.**').catch(console.error);
  if (user.id === message.author.id) return message.reply("**انا لن اسمح لك بفعلها, طرد نفسك عمل سيء**");
  if (user.id === client.user.id) return message.reply("**انت مجنون ؟, كيف تستخدم البوت ليطرد نفسه?**:");
  
  if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("❌**خطا:** لا تمتلك صلاحية طرد الأعضاء!");
  
  if (message.mentions.users.first().id === "242263403001937920") return message.reply("**لا يمكنك طرد المطور**");
  if (reason.length < 1) reason = 'No reason supplied';

  if (!message.guild.member(user).kickable) return message.reply('**لا يمكنني طرد هذا العضو**');
  message.guild.member(user).kick();

  const embed = new Discord.RichEmbed()
    .setColor(0x0000FF)
    .setTimestamp()
    .addField('Action:', 'Kick')
    .addField('User:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Reason', reason)
    .setFooter(` ${customisation.ownername}`);
  let logchannel = message.guild.channels.find('name', 'logs');
  if  (!logchannel){
    message.channel.send(`** نجاح! لقد تم طرد هذا الشخص.**`)
  }else{
    message.channel.send(`:** نجاح! لقد دخل الطرد الى **<#${logchannel.id}>.`)
    client.channels.get(logchannel.id).send({embed});
  }
  if(user.bot) return;
  return message.mentions.users.first().send({embed}).catch(e =>{
    if(e) return
  });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["برا"],
  permLevel: 0
};

exports.help = {
  name: '-kick',
  description: 'Kicks the mentioned user.',
  usage: 'kick [mention] [reason]'
};