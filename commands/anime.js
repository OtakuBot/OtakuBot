//By NightcoreAT#3678
const request = require('node-superfetch'); //npm i node-superfetch 
const Discord = require('discord.js'); //npm i discord.js
//no footer so we are not required to use customisation
//Please note that the search does not support multiple languages
exports.run = async (client, message, args, prefix) => { //From here our command starts
    //name: 'kitsu-anime',
    //aliases: ['kanime', 'anime', 'kitsu-a'],
    //description: 'provides info about an anime',
    //usage: '[Anime Name]',
    //async execute(client, kayn, REGIONS, config, message, args, con, guilds) {
    function shorten(text, maxLen = 2000) { //Let’s tell the bot that the maximum number of characters is 2000
		return text.length > maxLen ? `${text.substr(0, maxLen - 3)}...` : text;
	}
    const query = args.join(' '); //After entering the name
    try {
		const { text } = await request //From here, the bot will start searching for your request 
			.get('https://kitsu.io/api/edge/anime') //To check the bot from kitsu.io api 
			.query({ 'filter[text]': query }); //The bot starts collecting the search results
		const body = JSON.parse(text); //after done let's check 
		if (!body.data.length) return message.reply('Could not find any results.'); //If your search is missing or wrong, it does not support most languages
		const data = body.data[0].attributes; //Let's extract the data
		const embed = new Discord.MessageEmbed() //Let's see the search results
			.setColor(0xF75239) //optional ; you can set it random  
			.setAuthor('Kitsu.io', 'https://i.imgur.com/lVqooyd.png', 'https://kitsu.io/explore/anime')
			.setURL(`https://kitsu.io/anime/${data.slug}`) //let's show your search results from data
			.setThumbnail(data.posterImage ? data.posterImage.original : null) //your anime image 
			.setTitle(data.canonicalTitle)
			.setDescription(shorten(data.synopsis)) //Here it will give you anime description
			.addField('❯ Type', `${data.showType} - ${data.status}`, true) //To tell you its type, manga, movie or anime; With his statuts if it is continuous or finished
			.addField('❯ Episodes', data.episodeCount || '???', true) //To tell you how many episodes it has, it may not tell you the number of episodes of most of the episodes if their episodes are not specified in total
			.addField('❯ Start Date', data.startDate ? new Date(data.startDate).toDateString() : '???', true) //When did it started
			.addField('❯ End Date', data.endDate ? new Date(data.endDate).toDateString() : '???', true); //When did it ended
		return message.channel.send(embed);
	} catch (err) {
		return message.reply(`ops, something is wrong: \`${err.message}\`. please try again later !`); //Let's check if your search has a bug
	}
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [], //You can add your aliases as you want
    permLevel: 0
  };
  
  exports.help = {
    name: "anime", //your command name
    description: "Provides info about an anime ; Please note that the search does not support multiple languages", 
    usage: "anime [anime name]" //how did that command is working
  };
//By NightcoreAT3678
