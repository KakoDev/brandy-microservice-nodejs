const path = require('path');

let config = {};

config.logFileDir  = path.join(__dirname, '../../log');
config.logFileName = 'app.log';
config.dbHost      = process.env.dbHost || 'mongo';
config.dbPort      = process.env.dbPort || '27017';
config.dbName      = process.env.dbName || 'keysoft-db';
config.serverPort  = process.env.serverPort || 4001;

config.MessageAppName = `
__   __             __      
|__) |__)  /\\  |\\ | |  \\ \\ / 
|__) |  \\ /~~\\ | \\| |__/  |  
`;

//datos momentaneos
config.secret           = 'supersecret';
config.database_url_dev = 'mongodb://'+process.env.dbHost+':'+process.env.dbPort+'/'+process.env.dbName+'';


module.exports = config;
