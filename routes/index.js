var fs = require('fs');
var config = JSON.parse(fs.readFileSync('config.json'));
var mysql = require("mysql");
var dbname = config.database.dbname;

var queryES = require('./queryES.js');
var question = require('./../models/question.js');

exports.index = function(request, response) {
	response.render('index', { title: "Homepage", username: checkAuth(request), _csrf: request.session_csrf });
}

exports.question = function(request, response) {
	if (request.headers['content-type'] === 'application/json') {
		if (request.method === "GET") {
			var username = request.body.id;
			
			response.writeHead(501, { 'Content-Type': 'application/json' });
			response.end(JSON.stringify({ message: 'not implemented' }));
			
		} else if (request.method === "POST") {
		
			response.writeHead(501, { 'Content-Type': 'application/json' });
			response.end(JSON.stringify({ message: 'not implemented' }));
			
		} else if (request.method === "PUT") {
		
			response.writeHead(501, { 'Content-Type': 'application/json' });
			response.end(JSON.stringify({ message: 'not implemented' }));
			
		} else if (request.method === "DELETE") {
		
			response.writeHead(501, { 'Content-Type': 'application/json' });
			response.end(JSON.stringify({ message: 'not implemented' }));
			
		}
	}
}