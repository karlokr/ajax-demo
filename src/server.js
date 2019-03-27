// REQUIRES
const lists = require('./js/data');
const express = require('express');
const app = express();
const fs = require("fs");
const { JSDOM } = require('jsdom');
const bodyParser = require('body-parser');

app.use('/html', express.static('html'));
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/resources', express.static('resources'));

//Loads page when launched.
app.get('/', function (req, res) {
    let doc = fs.readFileSync('html/re-createdindex.html', "utf8");
    res.send(doc);
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