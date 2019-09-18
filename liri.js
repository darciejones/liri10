var keys = require('./keys.js'); 

var lArgs = process.argv;  //stored arguements for in array

var liriCommand = process.argv[];

var 

var songName = ""; 

var liriArg = '';
   for (var i=3)





var spotify = new Spotify(keys.spotify);  //from keys.js file so not shared public

var axios = require("axios");

var Spotify = require('node-spotify-api');

var moment = require('moment');

var fs = require("fs");




//spotify 

var getMeSpotify = function(songName) {

    spotify.search({type: 'track', query: songName }, function(err, data) {
        if (err) {
            console.log('error occured: ' + err);
            return;
        }

        console.log(data.tracks.items[0]);

    }});

}

var pick = function(caseData, functionData) {
    switch(caseData) {
        case 'spotify-this-song':
            getMeSpotify(functionData);
            break;

        case 
    }
}


var switchArg = process.argv[2]; // switch casses picking 1 or changing 

switch (switchArg) {

    case "concert-this":
        concertThis();
        break;

    case "spotify-this-song":
    spotifyThis();
    break;

    case "movie-this":
        movieThis();
        break;

    case "do-what-it-says":
        doIt();
        break;

};




//bands in town.    npm install --save bandsintown    
//

console.log(queryUrl);

  axios
    .get(queryUrl)
    .then(function (response) {
      
      // console.log(response.data); // Working

      console.log("\n\t ---------------------------------------------------------------\n");
      console.log("\t Upcoming Concerts for " + "'" + displayName + "'");
      console.log("\n\t ---------------------------------------------------------------\n");

      // Name of Venue
      console.log("\t " + displayName + "'s next show will be at the " + response.data[0].venue.name); // Working
      // Venue Location
      console.log("\t in " + response.data[0].venue.city + ", " + response.data[0].venue.country); // Working 
      // Date of the Event
      console.log("\t on " + moment(response.data[0].datetime).format("MM DD YYYY")); // Working
      // Line Break
      console.log("\n\t ---------------------------------------------------------------\n");


