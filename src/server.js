const express = require('express');
const app = express();
const fs = require("fs");
const { JSDOM } = require('jsdom');
const bodyParser = require('body-parser');
const mysql = require('mysql');

app.use('/html', express.static('html'));
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/resources', express.static('resources'));

var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "lab8"
});

db.connect(function(err){
    if (err){
        console.log(info() + " " + err);
    }
    else {
        console.log(info() + " connected...");
    }
});

function info() {
    now = new Date();
    return now.getTime();
};

app.get('/', function (req, res) {
    let doc = fs.readFileSync('html/index.html', "utf8");
    res.send(doc);
})

app.get("/ajax-GET-tab-content", function (req, res) {
    let format = req.query['format'];
    let tab = req.query['tab'];
    
    function getHTML() {
        res.setHeader('Content-Type', 'text/html');
        console.log("html requested");
        var sql = "SELECT * FROM " + tab;
        db.query(sql, function(err, result, fields) {
            if (err) {
                console.log(err);
                res.send({msg: 'Wrong Format!, or DB error'});
            } else {
                console.log(result);
                for (i = 0; i < result.length; i++){
                    let html = '<p>' + result[i]['comment']+ '</p>'
                    result[i]['comment'] = html;
                }
                res.send(result);
                console.log("Sent result");
            }
        });
    }

    function getJSON() {
        res.setHeader('Content-Type', 'application/json');
        console.log("json requested");
        var sql = "SELECT * FROM " + tab;
        db.query(sql, function(err, result, fields) {
            if (err) {
                console.log(err);
                res.send({msg: 'Wrong Format!, or DB error'});
            } else {
                console.log(result);
                res.send(result);
                console.log("Sent result");
            }
        });
    }

    if (format == 'html') {
        getHTML();
    } else if (format == 'json') {
        getJSON();
    }
});

app.use(function (req, res, next) {
  res.status(404).send("<html><head><title>Page not found!</title></head><body><p>Nothing here.</p></body></html>");
    
})

let port = 3000;
app.listen(port, function () {
    console.log('Karlo\'s Gym CLUB ! listening on port ' + port + '!');
})