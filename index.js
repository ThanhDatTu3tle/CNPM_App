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

app.use(express.static('public'));

// localhost:2703/
app.get('/', (req, res) => {
    res.render('index');
});

// localhost:2703/salaryCoefficient
app.get('/salaryCoefficient', (req, res) => {
    res.render('category/salaryCoefficient');
});

// localhost:2703/position
app.get('/position', (req, res) => {
    res.render('category/position');
});

// localhost:2703/list
app.get('/list', (req, res) => {
    res.render('personnel/list');
});

// localhost:2703/create
app.get('/create', (req, res) => {
    res.render('personnel/create');
});

// localhost:2703/commonHouse
app.get('/commonHouse', (req, res) => {
    res.render('personnel/commonHouse');
});

// localhost:2703/commonHousePay
app.get('/commonHousePay', (req, res) => {
    res.render('personnel/commonHousePay');
});

// localhost:2703/payroll
app.get('/payroll', (req, res) => {
    res.render('department/payroll');
});

// localhost:2703/workplace
app.get('/workplace', (req, res) => {
    res.render('department/workplace');
});

// localhost:2703/workarrangement
app.get('/workarrangement', (req, res) => {
    res.render('department/workarrangement');
});

app.post('/create', (req ,res) => {
    
});

// start server at port
app.listen(port, () => {
    console.log('Server listening port ' + port);
});