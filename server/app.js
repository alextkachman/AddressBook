var express = require('express');
var path = require('path');
var http = require('http');
var parseString = require('xml2js').parseString;
var reload = require('reload');

var app = express();

app.set('port', process.env.PORT || 4000);
app.use(express.static(path.join(__dirname, '../dist')));


app.get('/*', function (req, res, next) {
    next();
});

app.get('/api/v1/contacts', function (req, res, next) {
    var url = "http://www.bindows.net/documentation/download/ab.xml";
    xmlToJson(url, function (err, result) {
        if (err) {
            res.status(500);
            return res.json(err);
        }
        res.status(200).send(JSON.stringify({data: result}));
    })
});

function xmlToJson(url, callback) {
    var req = http.get(url, function (res) {
        var xml = '';

        res.on('data', function (chunk) {
            xml += chunk;
        });

        res.on('error', function (e) {
            callback(e, null);
        });

        res.on('timeout', function (e) {
            callback(e, null);
        });

        res.on('end', function () {
            parseString(xml, function (err, result) {
                callback(null, result);
            });
        });
    });
}

var server = http.createServer(app);

// Reload code here
reload(server, app);

server.listen(app.get('port'), function () {
    console.log('Web server listening on port ' + app.get('port'));
});