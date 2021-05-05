const Discord  = require('discord.js');
const customisation = require('../customisation.json');
const integer = require('integer')

const agree    = "✅";
const disagree = "❎";

exports.run = async (bot, message, args) => {
  if(!args || args[0] === 'help') return message.reply("Usage: vote <question>")
  // Number.isInteger(itime)
  //  if (e) return message.reply('please supply a valid time number in seconds')
  
  let msg = await message.channel.send(`Question: ${message.content.split(" ").splice(1).join(" ")} \nVote now! (Vote time: 3min)`);
  await msg.react(agree);
  await msg.react(disagree);

  const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === disagree, {time: 120000});
  msg.delete();

  var NO_Count = reactions.get(disagree).count;
  var YES_Count = reactions.get(agree);

  if(YES_Count == undefined){
    var YES_Count = 1;
  }else{
    var YES_Count = reactions.get(agree).count;
  }

  var nightcoreat = new Discord.MessageEmbed()
  
            .addField("Voting Finished:", "----------------------------------------\n" +
                                          "Question: " + message.content.split(" ").splice(1).join(" ") + "\n" +
                                          "Total votes (Yes): " + `${YES_Count-1}\n` +
                                          "Total votes (NO): " + `${NO_Count-1}\n` +
                                          "----------------------------------------", true)

            .setColor("0x#FF0000")
            .setFooter(`© ${customisation.ownername}`);
  await message.channel.send({embed: nightcoreat});

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'vote',
    description: 'Vote for the message above.',
    usage: 'vote'
  };
