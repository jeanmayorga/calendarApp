var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});
app.get('/app', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index2.html'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});