// REQUIRES
const express = require('express');
const app = express();
const fs = require('fs');
const { JSDOM } = require('jsdom');

// so '/stuff' will map to the directory '/files'
// try: http://localhost:8000/stuff/week08.html
app.use('/stuff', express.static('files'));
app.use('/html', express.static('html'));
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/resources', express.static('resources'));

app.get('/', function (req, res) {
    let doc = fs.readFileSync('html/re-createdindex.html', "utf8");
    res.send(doc);
})

// create a callback that always gets called when any of the paths are referenced
// ... useful for logging, etc.
var myLogger = function (req, res, next) {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log('LOGGED', ip);
  next();
}

app.use(myLogger);

app.use(function (req, res, next) {
  res.status(404).send("Nothing there, 404.");
})

// RUN SERVER
let port = 3000;
app.listen(port, function () {
    console.log('Karlo\'s Gym CLUB ! listening on port ' + port + '!');
})