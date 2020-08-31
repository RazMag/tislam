const ytdl = require('ytdl-core');

module.exports = {
	name: 'play',
	description: 'Play a song from a given source determined dynamiclly. returns dispatcher',
	async execute(message, args) {
        const connection = await message.member.voice.channel.join();
        let url = args[0]; 
        const dispatcher = connection.play(ytdl(url));
        return dispatcher;

	},
};