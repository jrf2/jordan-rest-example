var express = require('express');
var routes = require('./routes');
var fs = require('fs');
var config = JSON.parse(fs.readFileSync('config.json'));

var app = module.exports = express.createServer();

app.configure(function() {
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(express.cookieParser());
	app.use(express.bodyParser());
	app.use(express.session({ secret: "keyboard cat",
			store: express.session.MemoryStore({ reapInterval: 60000 })
		}));
	app.use(express.csrf());
	app.use(app.router);
	app.use(express.static(__dirname + "/public"));
});

app.configure('development', function(){
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
	app.use(express.errorHandler());
});

app.dynamicHelpers({
	token: function(request, response) {
		return request.session._csrf;
	}
});

// routing
app.get('/', routes.index);

// user
app.get("/user", routes.user);
app.post("/user", routes.user);
app.put("/user", routes.user);
app.delete("/user", routes.user);

// course
app.get("/course", routes.course);
app.post("/course", routes.course);
app.put("/course", routes.course);
app.delete("/course", routes.course);

// file
app.get("/file", routes.file);
app.post("/file", routes.file);
app.put("/file", routes.file);
app.delete("/file", routes.file);

// tag
app.get("/tag", routes.tag);
app.post("/tag", routes.tag);
app.put("/tag", routes.tag);
app.delete("/tag", routes.tag);

// studygroup
app.get("/studygroup", routes.studygroup);
app.post("/studygroup", routes.studygroup);
app.put("/studygroup", routes.studygroup);
app.delete("/studygroup", routes.studygroup);

// resource
app.get("/resource", routes.resource);
app.post("/resource", routes.resource);
app.put("/resource", routes.resource);
app.delete("/resource", routes.resource);

// like
app.get("/like", routes.like);
app.post("/like", routes.like);
app.put("/like", routes.like);
app.delete("/like", routes.like);

// question
app.get("/question", routes.question);
app.post("/question", routes.question);
app.put("/question", routes.question);
app.delete("/question", routes.question);

// answer
app.get("/answer", routes.answer);
app.post("/answer", routes.answer);
app.put("/answer", routes.answer);
app.delete("/answer", routes.answer);

// comment
app.get("/comment", routes.comment);
app.post("/comment", routes.comment);
app.put("/comment", routes.comment);
app.delete("/comment", routes.comment);

exports.server = app

// listening
app.listen(process.env.DEPLOY_PORT || config.server.port, function(){
	console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});