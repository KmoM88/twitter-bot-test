console.log("Bot is starting")
var config = require('./config/config')
var Twit = require('twit');


var T = new Twit(config);


tweetThis();

//uncomment this if u want to run the event in certain interval
//setInterval(tweetThis,3600000)//every 1 hour(time is in ms)



function tweetThis() {
    var statsArray = ["hello","How ya doin","I love node"];
    //selects random tweets from the arrayvar stat = statsArray[Math.floor(Math.random()*statsArray.length)]


    var tweet = {
    status: stat
    }


T.post('statuses/update',tweet,tweeted); //posts tweets


function tweeted (err, data, response) {
    if(err){
        console.log("Something is wrong")
    }else{
        console.log("Works fine")
    }
} 
}