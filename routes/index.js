var fs = require('fs');
var config = JSON.parse(fs.readFileSync('config.json'));
var mysql = require("mysql");
var dbname = config.database.dbname;

var queryES = require('./queryES.js');
var question = require('./../models/question.js');

exports.index = function(request, response) {
	response.render('index', { title: "Homepage" });
}

exports.question = function(request, response) {
	if (request.headers['content-type'].indexOf('application/json') !== -1) {
		var question_id = request.params.id;
		var questionType = request.body.questionType;
		
		if (request.method === "GET") {
			queryES.getQuestion(question_id, questionType, function(result) {
				response.writeHead(200, { 'Content-Type': 'application/json' });
				response.end(JSON.stringify({ errorcode: 0, question: result }));
			});
		} else if (request.method === "PUT") {
			var questionBody = request.body.questionBody;
			queryES.updateQuestion(question_id, questionBody, questionType, function(result) {
				response.writeHead(200, { 'Content-Type': 'application/json' });
				response.end(JSON.stringify({ errorcode: 0 }));
			});
		} else if (request.method === "DELETE") {
			queryES.deleteQuestion(question_id, questionType, function(result) {
				response.writeHead(200, { 'Content-Type': 'application/json' });
				response.end(JSON.stringify({ errorcode: 0 }));
			});
		}
	}
}