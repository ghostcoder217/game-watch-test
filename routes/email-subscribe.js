/**
 * Email Subscribe route handler
 */

const express = require('express');
const mysql = require('mysql');
const emailValidator = require('email-validator');
const globals = require('../helpers/globals');

const router = express.Router();

var con = globals.dbConnection;

router.post('/', (req, res, next) => {
	
	if(!emailValidator.validate(req.body.email)) res.send("Email is not an email bruv");
	else {
		var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
		
		con.query("SELECT * FROM email_list WHERE ip_addr = ?", ip, (err, result, fields) => {
			if (err) throw err;
			
			if(result.length != 2) {
				
				con.query("INSERT INTO email_list (email, ip_addr) VALUES (?, ?)", [req.body.email, ip], (err, result, fields) => {
					if (err) throw err;
					
					res.send("You have been added to the email listing");
				});
			} else {
				res.send("Sorry Lol");
			}
		});
		
	}
	
});

module.exports = router;