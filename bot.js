require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');

//import commands from cmds folder
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./cmds').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./cmds/${file}`);
	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Ready!');
});

client.login(process.env.DISCORD_TOKEN); 

client.on('debug', debug => console.log(debug));

client.connections = new Discord.Collection(); // server : broudcast

client.on('message', async message => { //TODO add isready bool
	if (!message.content.startsWith(config.prefix)|| message.author.bot) return;  // check for prefix
	const args = message.content.slice(config.prefix.length).trim().split(' '); // create args array with words after command
	const command = args.shift().toLowerCase(); // take commad from word after prefix
	for(let configCmd in config.commands){
		config.commands[configCmd].forEach(alias => {
			if (command == alias) {
				client.commands.get(configCmd).execute(message, args); //TODO try
				// TODO add break
			}
		});
	}
	// else if(config.commands["join"].includes(message.content.substring(1).toLocaleLowerCase())) {
	// 	// let connection = await message.member.voice.channel.join();
	// 	// let dispatcher = connection.play("./rick.mp3");
	// 	client.commands.get('debug').execute(message);
	// }
	
});
