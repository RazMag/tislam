module.exports = {
	name: 'join',
	description: 'Joins the channel of the initiator of the command. Returns connection(voicestate)',
	async execute(message, args) { //TODO add check for not in channel
        const connection = await message.member.voice.channel.join();
        return connection;
	}
};