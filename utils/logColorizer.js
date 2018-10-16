'use strict'

//https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
let Colorizer = {

	ok:(str,jump = false)=>{
		if(jump) console.log('');
		console.log("\x1b[32m%s\x1b[0m",str);

	},

	value: (str,val,jump = false)=>{
		if(jump) console.log('');
		console.log("\x1b[32m%s\x1b[0m",str + " -> ","\x1b[33m"+val+"\x1b[0m")

	},

	err: (str,jump = false)=>{
		if(jump) console.log('');
		console.log("\x1b[31m\x1b[47m%s\x1b[0m",' '+str);
		if(jump) console.log('');
	},

	fwcdWd:()=>{
		console.log("\x1b[33m%s"," ____________________________________________________________________________________");
		console.log("\/___\/___\/___\/___\/___\/___\/___\/___\/___\/___\/___\/___\/___\/___\/___\/___\/___\/___\/___\/___\/___\/");
		console.log('');
		console.log('');
		console.log('  ________  ___    ____         __              _  ______  ___  ____                         ');
		console.log(" \/ ___\/ _ \\\/ _ \\  \/ __\/_ _____ \/ \/____ __ _    \/ |\/ \/ __ \\\/ _ \\\/ __\/                         ");
		console.log("\/ \/__\/ \/\/ \/ ___\/ _\\ \\\/ \/\/ (_-<\/ __\/ -_)  \' \\  \/    \/ \/_\/ \/ \/\/ \/ _\/                           ");
		console.log("\\___\/____\/_\/    \/___\/\\_, \/___\/\\__\/\\__\/_\/_\/_\/ \/_\/|_\/\\____\/____\/___\/                           ");
		console.log("                    \/___\/                                                                    ");
		console.log("");
		console.log(' Creado por Cristian Diaz Prado')
		console.log(" ____________________________________________________________________________________");
		console.log("\/___\/___\/___\/___\/___\/___\/___\/___\/___\/___\/___\/___\/___\/___\/___\/___\/___\/___\/___\/___\/___\/");
		console.log("\x1b[0m");
	}
}

module.exports = Colorizer;