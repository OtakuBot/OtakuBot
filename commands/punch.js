exports.run = (client, message) => { //lets started your commands script
  var owner = "YourID" //set your id here to never get punched
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply('wait bro , You must mention someone to punch them.') // if no one is mentioned , lets reply as
        if(user.id === owner){
          return message.reply("You can't hurt him you pleblord."); //if they mentioned you and you owner , lets reply as
  }else{
          message.reply('You have punched <@' + user.id + '>') // if you mentioned , lets reply as
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = { //lets load your commands 
  name: 'punch', //commands name
  description: 'Punches a user.', //commands description
  usage: 'punch <user>', //how they work
  example: 'punch <@Otaku#---->' //lets show a some example about how they work
};
//By NightcoreAT#3678
