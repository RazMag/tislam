const ytdl = require('ytdl-core-discord');
// const Discord = require('discord.js');


module.exports = {
	name: 'play',
	description: 'Play a song from a given source determined dynamiclly.',
	async execute(message, args) {   
        const connection = await message.member.voice.channel.join();
        message.client.guildToConnection.set(message.guild.id , connection );
        connection.play(await ytdl(args[0]), {type: 'opus'}); //TODO add a check if connected
        
	},
};