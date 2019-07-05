/**
 * Entry file for web server
 */

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const globals = require('./helpers/globals');

// Import the route handlers
const baseRoute = require('./routes/base');
const eventsRoute = require('./routes/events');
const emailSubscribeRoute = require('./routes/email-subscribe');

const port = process.env.PORT || 80;
const app = express();

// Collect stats
var con = globals.dbConnection;

/*app.use(["/"], (req, res, next) => {
	
	if (req.path.includes("/events") || req.path == "/") {
		
		let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
		console.log(ip);
		
		con.query("INSERT INTO stats (ip_addr, target) VALUES (?, ?)", [ip, req.path], (err, result, fields) => {
			if (err) throw err;
		});
		
	}
	
	next();
});*/

// Config
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));

// Set route handlers
app.use('/', baseRoute);
app.use('/events', eventsRoute);
app.use('/email-subscribe', emailSubscribeRoute);

// Allow serving static assets from public folder
app.use('/public', express.static('public'));

app.listen(port);