var express = require('express');
let app = express();
let five = require('johnny-five');
let url = require('url');
let query = require('querystring');


app.get('/', function(req, res) {

    res.sendFile('/home/vivi/dev/mBot2/index.html');
})

app.listen(9000);