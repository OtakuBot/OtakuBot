exports.run = (client, message, args) => {
    let user = message.mentions.users.first()|| client.users.get(message.content.split(' ')[1])
    if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('❌|**\`BAN_MEMBERS\`لا توجد لديك رتبة`**');
        if(!user) return  message.channel.send(`Do this ${prefix} <@ID user> \n or \n ${prefix}unban ID user`);
        message.guild.unban(user);
        message.guild.owner.send(`لقد تم فك الباند عن الشخص \n ${user} \n By : <@${message.author.id}>`)
        message.channel.send(`**Ban has been removed from** ${user} `)
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["ارجع"],
    permLevel: 0
  };
  
  exports.help = {
    name: '-unban',
    description: 'فك حظر العضو.',
    usage: 'unban [mention] [reason]'
  };