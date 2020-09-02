module.exports = {
	name: 'disconnect',
	description: 'Disconnect from the voice channel of the sender',
	async execute(message, args) {
        connection = message.client.guildToConnection.get(message.guild.id);
        connection.disconnect();
	},
};