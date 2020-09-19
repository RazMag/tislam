const { Song } = require('../db/db.js');

module.exports = {
	name: 'debug',
	description: 'debugging puposes',
	async execute(message, args) {
		Song.create({
			song_url: args[0],
			guild_id: message.guild.id
		});
		test = await Song.findOne()
		console.log(test.toJSON())
	},
};