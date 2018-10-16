'use strict'

//Variables de entorno
require('dotenv').config();


let mongoose = require('mongoose');
let Colorizer = require('./utils/logColorizer');
let Clear = require('clear');
let Config;

Clear();
Colorizer.fwcdWd();

try{
	Config = require('./config/config');
} catch(err){
	Colorizer.err("Error: config.js not found. Remember to rename and configurate config.js before start the application",true)
	Colorizer.err(err);
	return false
}

if(Config.serverPort == ''){
	Colorizer.err("Error: Specify a port for the server",true);
	return false;
}
if(Config.routerPath == ''){
	Colorizer.err("Error: Specify a path for the router file",true);
	return false;
}
if(Config.mongoIP == ''){
	Colorizer.err("Error: Specify a IP for the mongo database",true);
	return false;
}
if(Config.mongoPort == ''){
	Colorizer.err("Error: Specify a port for the mongo database",true);
	return false;
}
if(Config.mongoDB == ''){
	Colorizer.err("Error: Specify a database for config/config.js is needed to continue",true);
	return false;
}


//A partir de este punto se entiende que config.js está cargado y bien configurado
let app = require('./app');

Colorizer.ok("Connecting with " + Config.mongoIP + ":" + Config.mongoPort + "/" + Config.mongoDB ,true);
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://' + Config.mongoIP +  ':' + Config.mongoPort + '/' + Config.mongoDB,{useNewUrlParser: true } )
.then( ()=>{
	//Conexion realizada correctamente	a la base de datos
	Colorizer.ok("Connected with " + Config.mongoDB.toUpperCase() +" database in",true)
	Colorizer.value("Mongo ip",Config.mongoIP);
	Colorizer.value("Mongo Port",Config.mongoPort);
	app.listen(Config.serverPort,()=>{
		//Servidor UP
		Colorizer.ok("Node server listening in",true);
		Config.apiPath != '' ? 
			Colorizer.value("Server ip",Config.serverIP + Config.apiPath + '/' ) : 
			Colorizer.value("Server ip",Config.serverIP);
		Colorizer.value("Server port",Config.serverPort);

		Colorizer.ok("Server waiting for requests",true)
	});
})
.catch(err => {
	//Error no se ha podido conectar a la base de datos
	Colorizer.err("Error. Can't connect to the mongo database. Is it Mongod running?",true);
	Colorizer.err(err);
}); 