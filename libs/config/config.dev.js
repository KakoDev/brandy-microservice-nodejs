const path = require('path');

let config = {};

config.logFileDir  = path.join(__dirname, '../../log');
config.logFileName = 'app.log';
config.serverPort  = process.env.serverPort || 4001;

config.MessageAppName = `
__   __             __      
|__) |__)  /\\  |\\ | |  \\ \\ / 
|__) |  \\ /~~\\ | \\| |__/  |  
`;

//datos momentaneos
config.secret           = 'supersecret';
config.database_url_dev = process.env.DBURI;


module.exports = config;
