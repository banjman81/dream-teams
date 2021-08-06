const Twitter = require('twitter');
require('dotenv/config');

const apiKey = process.env.apikey
const apiKeySecret = process.env.apikeysecret
const accessToken = process.env.accesstoken
const accessTokenSecret = process.env.accesstokensecret
let client = new Twitter({
    consumer_key: apiKey,
    consumer_secret: apiKeySecret,
    access_token_key: accessToken,
    access_token_secret: accessTokenSecret
});

let params = {screen_name: 'playnewworld'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
        console.log(tweets);
    }
});