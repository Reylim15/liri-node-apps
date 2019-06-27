// instructions told me to put this hears... but it basically imports the .env file
require('dotenv').config();

// fs so i can read the RandomSource.txt file
var fs = require('fs');

// axios for the api
var axios = require('axios');
// spotify stuff
var keys = require('./keys.js');
var spotify = new Spotify(keys.spotify);

// takes user input
var action = process.argv[2];
var value = process.argv[3];

// the premade commands, when user types in certain command. Launches function then breaks so it stops.
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


    // The purpose of the function below finds town artists and console.logs their venues and time with moment and bandintown api.
    function searchConcert() {}

    // The purpose of the funciton below is to find information about the song you've submitted.
    function searchSong() {}

    // The purpose of the function below is that it finds and console logs the  information of the movie from the omdb api
    function searchMovie() {}
    // axios api call to omdb
	axios.get('http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy').then(function(response) {
		// Then we print out the imdbRating
		console.log("The movie's rating is: " + response.data.imdbRating);
		if (err) {
			console.log(err);
		}
	


    // The purpose of the function below is to print out the text int the random.txt File.
    function listenToMe() {
	fs.readFile('random.txt', 'utf8', function(error, data) {

        // console logs the error
		if (error) {
			return console.log(error);
        }
        // prints out to console
		console.log(data);
		var txtPrint = data.split(',');
		console.log(txtPrint);
	})

    
	

}
});
