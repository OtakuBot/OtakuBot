//By NightcoreAT#3678
const request = require('node-superfetch'); //npm i node-superfetch
const Discord = require('discord.js'); //npm i discord.js
//no footer so we are not required to use customisation
//Please note that the search does not support multiple languages
exports.run = async (client, message, args, prefix) => {//From here our command starts
    //name: 'kitsu-manga',
    //aliases: ['kmanga', 'manga', 'kitsu-m'],
    //description: 'provides info about a particular manga',
    //usage: '[Manga Name]',
    //async execute(client, kayn, REGIONS, config, message, args, con, guilds) {
        function shorten(text, maxLen = 2000) { //Let’s tell the bot that the maximum number of characters is 2000
            return text.length > maxLen ? `${text.substr(0, maxLen - 3)}...` : text;
        }
        const query = args.join(' '); //After entering the name

        try {
			const { text } = await request //From here, the bot will start searching for your request 
				.get('https://kitsu.io/api/edge/manga') //To check the bot from kitsu.io api 
				.query({ 'filter[text]': query });//The bot starts collecting the search results
			const body = JSON.parse(text); //after done let's check  
			if (!body.data.length) return message.reply('Could not find any results.'); //If your search is missing or wrong, it does not support most languages
			const data = body.data[0].attributes; //Let's extract the data
			const embed = new Discord.RichEmbed() //Let's see the search results
				.setColor(0xF75239) //optional ; you can set it random  
				.setAuthor('Kitsu.io', 'https://i.imgur.com/lVqooyd.png', 'https://kitsu.io/explore/manga')
				.setURL(`https://kitsu.io/manga/${data.slug}`) //let's show your search results from data
				.setThumbnail(data.posterImage ? data.posterImage.original : null) //your manga poster image 
				.setTitle(data.canonicalTitle) 
				.setDescription(shorten(data.synopsis)) 
				.addField('❯ Type', `${data.subtype} - ${data.status}`, true) //Here it will give you anime description
				.addField('❯ Volumes / Chapters', `${data.volumeCount || '???'} / ${data.chapterCount || '???'}`, true) //To tell you the number of chapters manga
				.addField('❯ Start Date', data.startDate ? new Date(data.startDate).toDateString() : '???', true) //When it was released
				.addField('❯ End Date', data.endDate ? new Date(data.endDate).toDateString() : '???', true); //When it was ended
			return message.channel.send(embed);
		} catch (err) {
			return message.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`); //Let's check if your search has a bug
		}
    };
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: "manga", //your command name
    description: "Provides info about a particular manga; Please note that the search does not support multiple languages", //your command description
    usage: "manga [manga]" //how did it work
  };
//By NightcoreAT#3678
