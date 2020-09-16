// make simple embed message template (still needs some work)

const Discord = require('discord.js');

module.exports = {
    name: 'tst',
	description: 'tst',
    execute() {
        message = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Now Plaing')
            .setDescription('Nothing\n\n⠀')
            .setThumbnail('https://i.imgur.com/kbR9hec.png')
            .addFields(
                { name: 'Queue', value: '⏸ mmmmmmmmmmmmmmmmmm...\n• 6\n• 7\n• 8', inline: true },
                { name: 'Requested By', value: '<@141493848676368384>\n <@91483820141862912>', inline: true },
            )
            .setFooter('▰▰▰▰▰▱▱▱▱▱', 'https://i.imgur.com/rF2SUu5.png');
        return message;},
}
