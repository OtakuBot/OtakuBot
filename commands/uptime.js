// By NightcoreAT#3678
exports.run = (client, message) => { //From here our script will start
    var milliseconds = parseInt((client.uptime % 1000) / 100), //This field is intended to give the bot the number of hours and timing it needs to know the length of time the bot is running on
        seconds = parseInt((client.uptime / 1000) % 60),
        minutes = parseInt((client.uptime / (1000 * 60)) % 60),
        hours = parseInt((client.uptime / (1000 * 60 * 60)) % 24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        message.channel.send(":chart_with_upwards_trend: I've been running for** " + hours + " **hours, **" + minutes + "** minutes and **" + seconds + "." + milliseconds + "** seconds!"); //Here he will tell in full detail how long he spent while working
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'uptime', //follow description :)
  description: 'Shows how long the bot has been online for.',
  usage: 'uptime'
};
// By NightcoreAT#3678
