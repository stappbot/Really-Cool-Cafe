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

app.get('/reservation', function (req, res) {
    res.sendFile(path.join(__dirname, 'reservation.html'))
});

//API ROUTES
app.get('/api/tables', function (req, res) {
    res.json(tableArray);
});

app.get('/api/waitingList', function (req, res) {
    res.json(waitinglistArray);
});

//POST DATA
app.post('/api/tables', function (req, res) {
    //console.log(req.body);
    if (tableArray.length < 5) {
        tableArray.push(req.body);

        //response into JSON object
        res.json(true);
        console.log(tableArray);
    }
    else {
        waitinglistArray.push(req.body);

        res.json(false);
    }
})

//CLEAR DATA
app.post('/api/clear', function (req, res) {
    tableArray.length = 0;
    waitinglistArray.length = 0;
})