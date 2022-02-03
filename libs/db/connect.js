const { Sequelize } = require('sequelize');
const config = require('../config/config.dev');

const sequelize = new Sequelize(config.database_url_dev) 

const connectToDb = async () => {
	try {
				await sequelize.authenticate();
				console.log('Connection has been established successfully.');
				return sequelize;
		} catch (error) {
				console.error('Unable to connect to the database:', error);
				return null;
		}
}
module.exports = connectToDb;