//dependencies
var path = require('path');

//routes
module.exports = function(app){
	app.get('/', function(req, res){
		var homepage = '/../public/home.html';
		res.sendFile(path.join(__dirname + homepage));
	});
};
/*
module.exports = function(app){
	app.get('/survey', function(req, res){
		var surveypage = '/../public/survey.html';
		res.sendFile(path.join(__dirname + surveypage));
	});
};
*/