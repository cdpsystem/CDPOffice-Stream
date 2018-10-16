'use strict'
let Config = {

	//Server Ip, not change, not supported yet
	serverIP : 'http://localhost/',
	//Node Port
	serverPort : 3700,

	//Router file
	routerPath: './routes/router',

	//Prefix for api, can be empty Ex.: http://localhost:3700/<api>/yourroutes
	apiPath : 'api',

	//Ip of mongo database
	mongoIP : 'localhost',

	//Port of mongo database
	mongoPort : 27017,

	//Mongo database
	mongoDB : '',

	//Mongo Username
	mongoUser: '',

	//MongoPass
	mongoPass: ''
	
};
module.exports = Config;