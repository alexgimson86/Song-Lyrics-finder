var express = require('express');
var app = express();
var request = require('request');


app.get('/lyrics', function(req, res) {
    var artist, title;
    var reqObj = req.query;
    artist = reqObj.artist;
    title = reqObj.title;
    console.log(req.query);
    var text = 'https://api.lyrics.ovh/v1/' + artist + '/' + title;
    request(text, function(error, response, body) {
        var data = JSON.parse(body);
        var lyrics = "";
        lyrics = data.lyrics.replace(/\n/g, " <br> ");
        res.render('lyrics.ejs', { lyrics: lyrics });
    });
});
app.get('/', function(req, res) {
    res.render('home.ejs');
});
app.listen(3000, function() {
    console.log("App is listening on port 3000");
});