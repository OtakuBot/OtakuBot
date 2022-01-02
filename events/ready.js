const Discord = require('discord.js');
const settings = require('../settings.json');
const client = new Discord.Client();
const fs = require('fs');
module.exports = client => {
    console.log(`yourbots Online and ready to serve ${client.guilds.cache.size} servers.`);
};
