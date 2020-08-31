const ytdl = require('ytdl-core-discord');
// const Discord = require('discord.js');



module.exports = {
	name: 'play',
	description: 'Play a song from a given source determined dynamiclly. returns dispatcher',
	async execute(message, args) {
               
                const connection = await message.member.voice.channel.join();
                let url = args[0]; 
                const broadcast = message.client.voice.createBroadcast();
                // message.client.connections.set(message.guild.id , broadcast ); //TODO use the message.guild.id as the key and check for it to determine the current server and if it has broadcast  
                const dispatcher = connection.play(await ytdl(url), {type: 'opus'});
                return dispatcher;

	},
};