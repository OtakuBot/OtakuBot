const Discord = require('discord.js');
const types = ['Psychopath', 'Depressed', 'Cheerful', 'Bright', 'Dark', 'God', 'Deceiver', 'Funny', 'Fishy', 'Cool', 'Insecure', 'Lonely', 'Optimistic', 'Brave', 'Brilliant', 'Dreamer', 'Nurturer', 'Peaceful', 'Hot', 'weeb', 'otaku', 'Perfect', 'Overthinker', 'Idealist'];
const social = ['Loser', 'The nice guy', 'The cute girl', 'Dank memer', 'Nerd', 'Kinky'];
const relationship = ['Single', 'Married', 'Taken', 'Forever alone'];
const hobbies = ['Art', 'Drawing', 'Painting', 'Singing', 'Writing', 'Anime', 'Memes', 'Minecraft', 'Subscribing to PewDiePie from alt accounts', 'Deleting T-Series', 'League Of Legends', 'Pubg'];
const genres = ['Nightcore', 'Heavy Metal', 'Alternative', 'Electronic', 'Classical', 'Dubstep', 'Jazz', 'Pop', 'Rap', 'Country'];

exports.run = async (client, message) => { 
  try {
    let user = message.mentions.members.first() || message.author;

    let embed = new Discord.MessageEmbed()
    .setTitle('Personality')
    .setThumbnail(user.avatarURL())
    .setAuthor(user.username + '\'s personality')
    .addField('Types', `${types[Math.floor(Math.random() * types.length)]}`)
    .addField('Social', `${social[Math.floor(Math.random() * social.length)]}`)
    .addField('Relationship', `${relationship[Math.floor(Math.random() * relationship.length)]}`)
   	.addField('Hobbies', `${hobbies[Math.floor(Math.random() * hobbies.length)]}`)
	.addField('Genres', `${genres[Math.floor(Math.random() * genres.length)]}`)
    .setColor('#37dbde');

    message.channel.send(embed);
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['pers','identity','iden'],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'personality',
  description: 'Returns your personality.',
  usage: 'personality'
};