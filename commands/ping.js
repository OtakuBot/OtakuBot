exports.run = (client, message) => { //here your commands started from
  message.channel.send('Ping?').then(m => m.edit(`Roundtrip took: ${message.createdTimestamp - m.createdTimestamp}ms. Heartbeat: ${Math.round(client.ws.ping)}ms.`))
}; //lets show your bot ping is ...

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = { //lets load commands 
  name: 'ping', //commands name
  description: 'the ping of bot', //commands description
  usage: 'ping'//how they working
};
//By NightcoreAT#3678
