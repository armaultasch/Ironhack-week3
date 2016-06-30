// app.js

"use strict";

var fs = require('fs');


fs.readFile("./episodes.json", 'utf8', fileActions);

function fileActions(err, file){ 
    if (err) {
        throw err;
    }
    var episodes = JSON.parse(file);
    // console.log(episodes[0].title);
    var orderedEpisodes = episodes.sort(function(a, b){
     return a.episode_number-b.episode_number;
    });
    
    function isBigEnough(eachEpisode) {
    return eachEpisode.rating >= 8.5;
      }

    var filtered = orderedEpisodes.filter(isBigEnough);

    filtered.forEach(function (eachEpisode, index){
    
      var roundRating = Math.floor(eachEpisode.rating);
      var stars = "";

      for ( var i = 0; i < roundRating; i++){
        stars += "*" ;
      }
      
      console.log("title: " + eachEpisode.title + " , " + "\ndescription: " + eachEpisode.description + "\nrating: " + eachEpisode.rating + stars + "\nepisode_number: " + eachEpisode.episode_number); 

    }); 
}
