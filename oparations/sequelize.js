//db initialization

const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'user', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: console.log,
	storage: 'database.sqlite',
});

module.exports = sequelize;