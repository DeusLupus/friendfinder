//dependencies
var express = require('express');

//route to survey
app.get('/survey', function(req, res){
	res.sendFile(path.join(__dirname, 'survey.html'));
});

app.use('/', function (req, res){

})