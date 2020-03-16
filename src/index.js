const express = require('express');
const exphds = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const ejs = require('ejs');

const app = express();

// view engine setup
app.engine('handlebars', exphds());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// index page 
app.get('/', function(req, res) {
    res.render('helloworld');
});

app.listen(7000, function() {
    console.log('Example app listening on port 7000!')
})