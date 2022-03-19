var express = require('express');
var ffmpeg = require("ffmpeg");
var res = require('express/lib/response');
var app = express();
app.get('/', function (req, res) {
    res.send('f2343');
});
function getFrames(url) {
    
app.get('/api/video-extraction', function (req, res) {
    var params = req.params;
    var query = req.query;
    // params
    var url = query.url;
    // query
    var width = query.width;
    var height = query.height;
    var frames = getFrames(url);
    res.send(url);
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("listening on ".concat(port));
});
