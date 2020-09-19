const { Sequelize } = require('sequelize');
const SongModel = require('./song.js')

const sequelize = new Sequelize({
	dialect: 'sqlite',
	logging: console.log,
	storage: './database.sqlite',
});

const Song = SongModel(sequelize, Sequelize);

sequelize.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`)
  });

module.exports = {
	Song
};