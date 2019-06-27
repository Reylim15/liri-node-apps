require('dotenv').config();
var fs = require('fs');
var axios = require('axios');
var keys = require('./keys.js');
var spotify = new Spotify(keys.spotify);

switch (action) {
	case 'concert-this':
		searchConcert();
		break;

	case 'spotify-this-song':
		searchSong();
		break;

	case 'movie-this':
		searchMovie();
		break;

	case 'do-what-it-says':
		listenToMe();
		break;
    }

    function searchConcert() {}

    function searchSong() {}

    function searchMovie() {}

    function listenToMe() {
	fs.readFile('random.txt', 'utf8', function(error, data) {
		if (error) {
			return console.log(error);
		}
		console.log(data);
		var txtPrint = data.split(',');
		console.log(txtPrint);
	})

	// axios api call to omdb
	// axios.get('http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy').then(function(response) {
	// 	// Then we print out the imdbRating
	// 	console.log("The movie's rating is: " + response.data.imdbRating);
	// 	if (err) {
	// 		console.log(err);
	// 	}
	// };
}
// axios.get
