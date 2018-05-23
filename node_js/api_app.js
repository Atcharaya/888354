var express = require('express');
var app = express();
var products = require('./products');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var port = 8080;
app.get('/', function (req, res) {
    res.send('<h1>Hello SE by Node.js</h1>');
    res.end();
});

app.get('/products', function (req, res) {
    res.json(products.findAll());
});

app.get('/products/:id', function (req, res) {
    var id = req.params.id;
    res.json(products.findById(id));
});

app.post('/newproduct', function (req, res) {
    var json = req.body;
    // res.send('Add new ' + json.name + ' Completed!');
    var id = json.id;
    res.json(products.findById(id));
});


app.listen(port, function () {
    console.log('Starting node.js on port ' + port);
});