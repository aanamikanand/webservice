const express = require("express");
const app = express();
var exports = module.exports = {};
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const formatter = require('./csvformatter');


const server = app.listen(port, () => {
    console.log('Server started! At http://localhost:' + port);
});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: 'false'}));

// This responds with "Hello World" on the homepage
app.get("/", (req, res) => {
    console.log("Got a GET request");
   res.send('Hello World');
});

// This responds a POST request for the homepage
app.post('/', (req, res) => {
    console.log("Got a POST request");
    res.send('Hello POST');
 });


app.get('/csvformatter', (req, res) => {
    res.sendFile(`${__dirname}/index.htm`);
});

app.post('/csvformatter', (req, res) => {
    // Prepare output in JSON format
    if(req.body.csvString) {
        const response = formatter(req.body.csvString);
        res.send(response);
    }
    else {
        res.send('CSV String empty');
    }
 });

app.post("/api/csvformatter", (req, res) => {
    if(req.body.data) {
        const response = formatter(req.body.data);
        res.send(response);
    }
    else {
        res.send('CSV String empty');
    }
});

exports.closeServer = () => {
    server.close();
};
