console.log("Bot is started");


var twit = require('twit');
var config = require('./config/config');


var T = new twit(config);


reTweet();


// find latest tweet according the query 'q' in parameters
//set q as # or @ for hashtags and username.Can keep both as '@tag,#hash'
function reTweet() {
    var parameters = {
        q: '@feder0ssi',
        // result_type: 'recent',
        // lang: 'en'
    }


    T.get('search/tweets', parameters, function(err, data) {
        if (!err) {
//gets the tweetidvar retweetId = data.statuses[0].id_str;
//retweets the status in which the 'q' is mentioned
            T.post('statuses/retweet/:id',{ id : retweetId },tweeted);
            function tweeted(err2, response) {
                if (response) {
                    console.log('Retweeted successfully');
                }
                else {
                // if there was an error while tweeting if (err) {
                    console.log('Duplicate tweet or Something went wrong');
                }
            }
        }
        console.log('Nothing found');
    });
}