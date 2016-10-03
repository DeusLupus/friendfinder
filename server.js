//dependencies
var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var path = require('path');

//middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.text());
app.use(bodyparser.json({type:'application/vnd.api+json'}));

//routes
// Basic route that sends the user first to the AJAX Page
require('./app/routing/html-routes.js')(app);
require('./app/routing/api-routes.js')(app);

//start application
var PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
	console.log('App listinening on PORT: ' + PORT);
});