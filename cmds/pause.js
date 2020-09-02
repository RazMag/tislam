module.exports = {
	name: 'pause',
	description: 'Pauses the streamDispatcher for the relavent connection (by guild)',
	async execute(message, args) {
        connection = message.client.guildToConnection.get(message.guild.id); //get the relavent connection by guild ID
        connection.dispatcher.pause();
	},
};