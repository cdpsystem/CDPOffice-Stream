const Colorizer = require('../../utils/logColorizer');
let oth2 = require('simple-oauth2');

Colorizer.ok("Controller oauth2 Loaded");

//Twitch Configuration show
Colorizer.value("Client ID",process.env.CLIENT_ID,true);
Colorizer.value("Client Secret",process.env.CLIENT_SECRET);

let Oauth2 = {

}

module.exports = Oauth2;