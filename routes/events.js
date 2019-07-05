/**
 * Events route handler
 */

const express = require('express');
const mysql = require('mysql');
const globals = require('../helpers/globals');
const moment = require('moment');

const router = express.Router();
var con = globals.dbConnection;

// Getting the main page
router.get('/d2aefeac9dc661bc98eebd6cc12f0b82', (req, res, next) => {
	
	con.query("SELECT join_time FROM events ORDER BY join_time DESC", (err, result, fields) => {
		if (err) throw err;
		
		var players = result.length;
		var timeStampList = [];
		var countdown = moment("2019-02-27 04:30:00").fromNow(); 
		
		result.forEach((result) => {
			timeStampList.push(moment(result.join_time).fromNow());
		});
		
		// Build the page
		res.render('pages/event-viking-conquest-1', {playerCount: players, timeStamp: timeStampList, cd: countdown});
	});

});

// Showing interest by posting to blah/interested
router.post('/d2aefeac9dc661bc98eebd6cc12f0b82/interested', (req, res, next) => {
	
	var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	
	con.query("SELECT * FROM events WHERE ip_addr = ?", ip, (err, result, fields) => {
		if (err) throw err;
		
		if(result.length != 1) {
			
			con.query("INSERT INTO events (ip_addr) VALUES (?)", ip, (err, result, fields) => {
				if (err) throw err;
				
				res.send("You are interested .... excellent");
			});
		} else {
			res.send("Yeah.. we know you're interested");
		}
	});
	
});
module.exports = router;