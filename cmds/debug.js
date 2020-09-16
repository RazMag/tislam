const ytdl = require('ytdl-core');
const makeEmbedMessage = require('../oparations/makeEmbedMessage.js');
const conn = require('../oparations/sequelize.js');

module.exports = {
	name: 'debug',
	description: 'debugging puposes',
	async execute(message, args) {
                console.log(conn);
	},
};