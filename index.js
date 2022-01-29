const Discord = require("discord.js");
const client = new Discord.Client();
const settings = require('./settings.json');
const fs = require('fs');
const moment = require('moment');
const { token } =require('./token.json')
require('./util/eventLoader')(client);

//loading messages
const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);
  log(`Loading a total of ${files.length} commands.`);
  files.forEach(f => {
    let props = require(`./commands/${f}`);
    log(`Command Loaded! ${props.help.name} 👌`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

//discordjs when they are upgarde to ver 12.2.0 , some feature is cannot working now !
client.on('ready', () => {
  setInterval(() => {
client.user.setStatus('idle')
client.user.setActivity(`Nothing`, {type: 'PLAYING'}) // {type: 'PLAYING - WATCHING - STREAMING - LISTENING'}
  }, 60000);
});

//command reload that the bot needed to work and respond of
client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.elevation = message => {
  if (message.channel.type === 'dm') return;
  let permlvl = 0;
  let mod_role = message.guild.roles.cache.find('name', settings.modrolename);
  if (mod_role && message.member.roles.has(mod_role.id)) permlvl = 1;
  let admin_role = message.guild.roles.cache.find('name', settings.adminrolename);
  if (admin_role && message.member.roles.has(admin_role.id)) permlvl = 2;
  let manager_role = message.guild.roles.cache.find('name', settings.managerrolename);
  if (manager_role && message.member.roles.has(manager_role.id)) permlvl = 3;
  let overlord_role = message.guild.roles.cache.find('name', settings.overlordrolename)
  if (overlord_role && message.member.roles.has(overlord_role.id)) permlvl = 4;
  if (message.author.id === settings.ownerid) permlvl = 5;
  return permlvl;
};

//Don't put anything here.. check token.json
client.login(token);
//By NightcoreATDZO#3550
