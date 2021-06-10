console.log("Bot is starting")
var config = require('./config/config')//imports keys
var Twit = require('twit');


var T = new Twit(config);


// var parameters = {
//     q : 'node',//query to search the twitter,can be any thing count : 2 //no. of data to fetch
// }
var parameters = {
    q: '@feder0ssi',
    // result_type: 'recent',
    // lang: 'en'
}

//  search twitter for all tweets containing the word 'suJJJan'
T.get('search/tweets',parameters,fetchData);


function fetchData (err, data, response) {
    var tweets = data.statuses;
    for(var i=0;i< tweets.length;i++){ // checks the statuses twiceconsole.log(tweets[i].text);//prints the text
    }
    console.log(data)
}