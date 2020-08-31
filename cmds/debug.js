const ytdl = require('ytdl-core');

module.exports = {
	name: 'debug',
	description: 'debugging puposes',
	async execute(message, args) {
        channel = await message.client.channels.fetch('746382206926061679');
        // message.client.channels.fetch('746382206926061679', channel => channel.join());
        connection =  await channel.join();
        let url = args[0]; 
        const dispatcher = connection.play(ytdl(url));
        return dispatcher;
	},
};