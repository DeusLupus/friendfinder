//require friends data
var friends = require('../data/friends.js');

//routes
module.exports = function(app){
	app.get('/api/friends', function(req, res){
		res.json(friends);
	});

	app.post('/api/friends', function(req, res){
		var buddy = {
			name: "",
			photo: "",
			friendDifference: 1000
		};

		var userData = req.body;
		var userName = userData.name;
		var userPhoto = userData.photo;
		var userScores = userData.scores;

		var totalDifference = 0;

		for (var i = 0; i < friends.length; i++){
			console.log(friends[i].name);
			totalDifference = 0;

			for (var j = 0; j < friends[i].scores[j]; j++){
				totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[i]));

				if (totalDifference <= buddy.friendDifference){
					buddy.name = friends[i].name;
					buddy.photo = friends[i].photo;
					buddy.friendDifference = totalDifference;
				}
			}
		}

		friends.push(userData);

		res.json(buddy);
	});
};