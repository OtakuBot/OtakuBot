//Made By NightcoreAT#3678
const Discord = require('discord.js'); //npm i discord.js
const customisation = require('../customisation.json'); //it's optional to set your personal footer on the bot
exports.run = (client, msg, args) => { //from here we started that tested command without using richembed , as you know
  msg.delete(); // If you want to have the message deleted automatically within minutes, you can specify the duration as desired
  const embed = new Discord.MessageEmbed() //Now let's create a  new richembed ; You can also create two richembed and I will explain it in another command  as soon
  .setColor(0xFFFF00) //that is optional ! You can choose the color either by name or by hexcolor : When using the HEX code do not add # because it's unaccpepted
  .addTitle('') //Choose a title for the command, knowing that it will be large and then not used as an description and fields
  .addField('' or ``) // In this field type what you want as you can create multiple fields like
  .addField('')
  .addField('')
  .addField(' \n ') // If you do not want to create multiple fields, you can do this for each sentence ; Please note that you do not make any mistakes when writing symbols
  .addDescription('') // This works as an explanation, or in other words, it has the same role as the field, but it has another work that we will explain about in another command
  .setImage(Url Or Body Link) // followed get or const or from
  .setFooter(`©${customisation.ownername}`); //here your personal footer
  msg.channel.send({embed}); // let's show your command 
    
};

exports.conf = { // let's conf that command
    enabled: true, // check if this command is enabled or no
    guildOnly: false, // check if that command is working with guildOnly or no
    aliases: [], // optional aliases ; add or modify or change as you like for example ['h',hh']
    permLevel: 0 //Determine the rank of those who are able to use commandos, given your ability to understand what this means 
  };
  
  exports.help = { //Let's attach the command to the bot command list
    name: 'test-commands',
    description: 'your command description put them here as short.',
    usage: 'test-commands'
  };
  //Made By NightcoreAT#3678
