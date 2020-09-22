const ytdl = require('ytdl-core-discord');
const join = require('../cmds/join');
const setFooter = require('./setFooter.js')
const { Song }  = require('../db/db.js');
// const Discord = require('discord.js');


module.exports = {
	name: 'play',
	description: 'Play the next song for a given guild.',
	async execute(message) {   
		try {connection = await join.execute(message)}
		catch(err){setFooter.execute(err)}
		var currentSongObject = await Song.findOne();
		toPlay = `https://www.youtube.com/watch?v=${currentSongObject.song_id}`;
		// const obj = await Song.findOne();
		// console.log(obj);
        connection.play(await ytdl(toPlay), {type: 'opus'}); //TODO add a check if connected
        
	},
};