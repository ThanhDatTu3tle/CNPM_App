const express = require('express');
const bodyParser = require('body-parser');
const low = require('lowdb');
const FileSync =require('lowdb/adapters/FileSync');

const app = express();
const adapter = new FileSync('database.json');
database = low(adapter);

// Set some defaults
database.defaults({ users: [] }).write();

const port = 2703;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// localhost:2703/
app.get('/', (req, res) => {
    res.render('index');
});

// localhost:2703/category
app.get('/category', (req, res) => {
    res.render('category/salaryCoefficientTable');
});

app.get('/position', (req, res) => {
    res.render('category/position');
});

// start server at port
app.listen(port, () => {
    console.log('Server listening port ' + port);
});