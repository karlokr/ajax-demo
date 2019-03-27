// REQUIRES
const lists = require('./core/data');
const express = require('express');
const app = express();
const fs = require("fs");
const { JSDOM } = require('jsdom');
const bodyParser = require('body-parser');

app.use('/html', express.static('static/html'));
app.use('/css', express.static('static/css'));
app.use('/js', express.static('static/js'));
app.use('/resources', express.static('static/resources'));
app.use('/core/data.js', express.static('core/data.js'));

app.get('/', function (req, res) {
    let doc = fs.readFileSync('./static/html/re-createdindex.html', "utf8");
    console.log("called index");
    res.send(doc);
})

// create a callback that always gets called when any of the paths are referenced
// ... useful for logging, etc.
//var myLogger = function (req, res, next) {
//  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
//  console.log('LOGGED', ip);
//  next();
//}

//app.use(myLogger);




app.get('/ajax-GET', function (req, res) {

    // set the type of response:
    res.setHeader('Content-Type', 'text/html');
    let d = new Date();
    console.log(d);

    res.send({ msg: d });

})
app.get("/ajax-GET-list", function (req, res) {

//    res.setHeader('Content-Type', 'application/json');
    console.log(req.query['format']);
    let formatOfResponse = req.query['format'];
    let dataList = null;

    if(formatOfResponse == 'html-list') {

        res.setHeader('Content-Type', 'text/html');
        dataList = lists.getHTML();
        res.send(dataList);

    } else if(formatOfResponse == 'json-list') {

        res.setHeader('Content-Type', 'application/json');
        dataList = lists.getJSON();
        res.send(dataList);

    } else {
        res.send({msg: 'Wrong format!'});
    }
});

// for page not found (i.e., 404)
app.use(function (req, res, next) {
  res.status(404).send("<html><head><title>Page not found!</title></head><body><p>Nothing here.</p></body></html>");
    
})

// RUN SERVER
let port = 3000;
app.listen(port, function () {
    console.log('Karlo\'s Gym CLUB ! listening on port ' + port + '!');
})