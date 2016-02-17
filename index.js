var express = require('express');
var fs = require('fs');

var app = express();
app.use(express.static('public'));

app.get('*', function(req, res) {
  var pathName = 'public' + req.path + '.html';
  fs.readFile(pathName, 'utf8', function(err, data) {
    if (err) {res.sendStatus(404)}
    res.send(data);
  });
});

app.listen(3000);
