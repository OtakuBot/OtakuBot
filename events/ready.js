const chalk = require('chalk'); //npm i clalk
const Discord = require('discord.js'); //npm i discord.js
const settings = require('../settings.json'); //where the bot well insert token
const client = new Discord.Client();
const fs = require('fs'); //npm i fs
module.exports = client => {
    console.log(chalk.bgGreen.black(`Your Bot is online with ${client.guilds.cache.size} servers.`)); //after discordjs is updated , you must add cache btw guilds.size for like i do
  let blacklist = JSON.parse(fs.readFileSync("./blacklist.json", "utf8"));
    client.guilds.forEach((guild) => {
      if (!blacklist[guild.ownerID]) {
        return;
      }else{
        if(blacklist[guild.ownerID].state === true) {
          message.guild.leave(guild.id)
        }
      }
    })
};
