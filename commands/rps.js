//By NightcoreAT#3678
let rps = ["**:moyai: rock**", "**:pencil: papper**", "**:scissors: scissors**"]; //let's check rock , papper , scissors with its icons
function random() { return `${rps[Math.floor(Math.random() * rps.length)]}!` } //The bot starts collecting information about what we gave about icons and names
exports.run = (client, msg, args) => { //let's started
    let choice = args.join(" ").toLowerCase(); //To extract the available choice of rps
    if (choice === '') return msg.reply("wait."); //wait a second to load all the choice that available
    if (choice !== "rock" && choice !== "papper" && choice !== "scissors") return msg.reply(`please choose wut it's available. ${choice} not valide :P`); //If rps is found ; The bot will reply you a rock, papper, or scissors And if what you have choice is not available, it will reply with
    msg.reply(random()); // random : The bot will choose either a rock or a paper or a scissors
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [], //Leave it empty as better
  permLevel: 0
};

exports.help = {
  name: 'rps', //your command name
  description: 'Rock, Papper, Scissors.', //your command description
  usage: 'rps' //how did it work
};
//By NightcoreAT#3678
