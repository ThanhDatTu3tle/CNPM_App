const express = require('express');
const pug = require('pug');
const bodyParser = require('body-parser');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
// const shortid = require('shortid');

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
    res.render('index', {

    });
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
app.get('/personnel', (req, res) => {
    res.render('personnel/list', {
        users: database.get('users').value()
    });
});

// localhost:2703/list/search
app.get('/personnel/search', (req, res) => {
    var q = req.query.q;
    var matchedUser = database.get('users').value().filter((user) => {
        return user.user_machucvu.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });

    res.render('personnel/list', {
        input: req.query.q,
        users: matchedUser
    });
});

// localhost:2703/create
app.get('/personnel/create', (req, res) => {
    res.render('personnel/create');
});

app.get('/personnel/:id', (req ,res) => {
    var id = parseInt(req.params.id);
    

    var user = database.get('users').find({ id: id }).value();

    res.render('personnel/view', {
        user: user
    });
});

app.post('/personnel/create', (req, res) => {
    // req.body.user_id = shortid.generate();

    database.get('users').push(req.body).write();
    res.redirect('/personnel');
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