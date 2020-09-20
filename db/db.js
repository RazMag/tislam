const { Sequelize } = require('sequelize');
const SongModel = require('./song.js')

const sequelize = new Sequelize({
	dialect: 'sqlite',
	logging: console.log,
	storage: './database.sqlite', //TODO add a test for dev/prod env (in dev ::memory)
}); 

const Song = SongModel(sequelize, Sequelize);

sequelize.sync({ force: true }) //TODO add a test for dev/prod env 
  .then(() => {
    console.log(`Database & tables created!`)
  });

module.exports = {
	Song
};