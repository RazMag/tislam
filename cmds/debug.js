const ytdl = require('ytdl-core');
const makeEmbedMessage = require('../makeEmbedMessage.js')

module.exports = {
	name: 'debug',
	description: 'debugging puposes',
	async execute(message, args) {
        // channel = await message.client.channels.fetch('746382206926061679');
        // message.client.channels.fetch('746382206926061679', channel => channel.join());
        // connection =  await channel.join();
        // let url = args[0]; 
        // const dispatcher = connection.play(ytdl(url));
        // return dispatcher;
        // const connection = await message.member.voice.channel.join();
        // console.log(message.client.voice.connections);
        // message.client.voice.connections.get('')
        eMessage = makeEmbedMessage.execute();
        message.channel.send(eMessage);
        // eMessage.fields[0].value = "3";
        // console.log(eMessage);
	},
};