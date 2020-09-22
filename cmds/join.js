module.exports = {
	name: 'join',
	description: 'Joins the channel of the initiator of the command. Returns connection(voicestate)',
	async execute(message) { //TODO add check for not in channel
		if (message.client.guildToConnection.get(message.guild.id) != undefined){
			if (message.client.guildToConnection.get(message.guild.id).channel != message.member.voice.channel){ //current connection in guild != connection of sender
				throw "Already connected to a diffrent voice channel";
			}
			else if(message.member.voice.channel == null){ //user not connected
				throw "User not connected to voice channel"
			}
		} 	/*TODO reformat this bullshit check 
			1. if connected already, if "message.client.guildToConnection.get(message.guild.id)" is null meaning that no connection is defined for this guild
			2. if connection defined check if user is connected to voice
			3. if connection is defined and user is connected to voice, check if it is to the channel of the sender
			4. in the future compare dude who asked for join
			*/
		const connection = await message.member.voice.channel.join();
		message.client.guildToConnection.set(message.guild.id , connection );
        return connection;
	}
};