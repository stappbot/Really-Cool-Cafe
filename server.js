var express = require('express');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function () {
    console.log('App listening on PORT: ' + PORT)
});

// DATA
var tableArray = [
    {
        customerName: '',
        customerEmail: '',
        customerID: '',
        phoneNumber: ''
    }
];

var waitinglistArray = [
    {
        customerName: '',
        customerEmail: '',
        customerID: '',
        phoneNumber: ''
    }
]

//ROUTES
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'))
});

app.get('/tables', function (req, res) {
    res.sendFile(path.join(__dirname, 'tables.html'))
});

app.get('/reservations', function (req, res) {
    res.sendFile(path.join(__dirname, 'reservations.html'))
});

//API ROUTES
app.get('/api/tables', function (req, res) {
    res.json();
});

app.get('/api/waitingList', function (req, res) {
    res.json();
});