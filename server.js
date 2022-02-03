const express     = require('express');
const config      = require('./libs/config/config.dev');
const cors        = require('cors');
const router_api  = require('./routes/routes_rn');
const app         = express();
const port        = config.serverPort;

require('dotenv').config()
//Configurar cors de acuerdo a requerimientos.

async function main() {
  try {
    await app.listen(port);
    //let mongoDB = await connectMongoDB();
    let serverInfo = {
      "SERVICE": process.env.APP_NAME,
      "STATUS": "ok",
      "MSG" : "Server Init",
      "PORT" : process.env.PORT || 4001,
      "VERSION": process.env.VERSION_APP,
      "BASE_URL" : `localhost:${process.env.PORT}/${process.env.APP_PATH_SERVICE}/`,
      //"MONGODB": mongoDB.message
    }
    console.table(serverInfo);
    console.log (`Welcome to \n\r${config.MessageAppName}\n\rRestfuls Api`);
  } catch (error) {
    console.log(error)
    throw new Error("Internal Server Error");
  }
}

app.use(cors());

//Rutas api 
app.use('/api', router_api);

//Index route
app.get('/', (req, res) => {
  res.status(200).send({
    response: `Welcome to \n\r${config.MessageAppName}\n\rRestfuls Api`
  });
});

main();

