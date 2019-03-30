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
    user: "karlo",
    password: "karlosqlpass1",
    database: "lab8"
});

db.connect(function(err){
    if (err){
        console.log(info() + " " + err);
    } else {
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
    
    function sqlTabContents() {
        return "SELECT * FROM " + tab;
    }
    
    function getHTML() {
        res.setHeader('Content-Type', 'text/html');
        db.query(sqlTabContents(), function(err, result, fields) {
            if (err) {
                console.log(err);
                res.send({msg: 'Wrong Format!, or DB error'});
            } else {
                console.log(result);
                if (tab == "reviews") {
                    res.send(generateReviewsHTML(result));
                } else if (tab == "facilities") {
                    res.send(generateFacilitiesHTML(result));
                }
                console.log("Sent result");
            }
        });
    }

    function getJSON() {
        res.setHeader('Content-Type', 'application/json');
        db.query(sqlTabContents(), function(err, result, fields) {
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
    
    function generateReviewsHTML(result) {
        let html = "";
        for (i = 0; i < result.length; i++){
            html += "<div class=\"infoItems\">";
            html += "<div class=\"stars\">";
            for (j = 1; j <= 5; j++) {
                if (j <= result[i]['number_of_stars']) {
                    html += "<img class=\"star-icon\" src=\"../resources/star.png\">";
                } else {
                    html += "<img class=\"star-icon-grey\" src=\"../resources/star.png\">";
                }
            }
            html += "<p class=\"location-name\">" + result[i]['location'] + "</p>";
            html += "</div>";
            html += "<div class=\"textbox\">"
            html += "<p class=\"text\" id=\"p" + (i + 1) + "\">" + result[i]['comment']+ "</p>";
            html += "</div>";
            html += "<div class=\"name\">";
            html += "<img class=\"profile-pic\" src=\"../resources/shrek.png\">";
            html += "<p class=\"actual-name\">" + result[i]['name'] + "</p>";
            html += "<p class=\"time\">" + result[i]['date_written'] + "</p>";
            html += "</div></div>"
        }
        return html;
    }

    function generateFacilitiesHTML(result) {
        let html = "";
        for (i = 0; i < result.length; i++){
            html += "<div class=\"infoItems\">";
            html += "<div class=\"location\">";
            html += "<p class=\"locationName\">" + result[i]['name'] + "</p>";
            html += "<p class=\"address\">" + result[i]['city'] + "</p>";
            html += "</div>";
            html += "<div class=\"mapbox\">"
            html += result[i]['map'];
            html += "</div></div>"
        }
        return html;
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