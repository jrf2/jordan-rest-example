var fs = require('fs');
var config = JSON.parse(fs.readFileSync('config.json'));
var mysql = require("mysql");
var dbname = config.database.dbname;

exports.index = function(request, response) {
	response.render('index', { title: "Homepage", username: checkAuth(request), _csrf: request.session_csrf });
}

exports.user = function(request, response) {
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

exports.course = function(request, response) {
	if (request.headers['content-type'] === 'application/json') {
		if (request.method === "GET") {
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

exports.file = function(request, response) {
	if (request.headers['content-type'] === 'application/json') {
		if (request.method === "GET") {
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

exports.tag = function(request, response) {
	if (request.headers['content-type'] === 'application/json') {
		if (request.method === "GET") {
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

exports.studygroup = function(request, response) {
	if (request.headers['content-type'] === 'application/json') {
		if (request.method === "GET") {
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

exports.resource = function(request, response) {
	if (request.headers['content-type'] === 'application/json') {
		if (request.method === "GET") {
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

exports.like = function(request, response) {
	if (request.headers['content-type'] === 'application/json') {
		if (request.method === "GET") {
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

exports.question = function(request, response) {
	if (request.headers['content-type'] === 'application/json') {
		if (request.method === "GET") {
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

exports.answer = function(request, response) {
	if (request.headers['content-type'] === 'application/json') {
		if (request.method === "GET") {
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

exports.comment = function(request, response) {
	if (request.headers['content-type'] === 'application/json') {
		if (request.method === "GET") {
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