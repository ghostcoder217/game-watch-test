/**
 * GLobals file holds cross server variables and functions
 */

const mysql = require('mysql');

var globals = {}
var credentials;

if (process.env.NODE_ENV == 'development') {
	
	credentials = {
		host: "localhost",
		user: "root",
		password: ",
		database: ""
	};
	
} else {
	
	credentials = {
		host: process.env.RDS_HOSTNAME,
		user: process.env.RDS_USERNAME,
		password: process.env.RDS_PASSWORD,
		port: process.env.RDS_PORT,
		database: ""
	};
	
}

globals.dbConnection = mysql.createConnection(credentials);

module.exports = globals;