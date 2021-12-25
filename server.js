// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");
var bodyParser = require('body-parser');
var cors = require('cors')

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
app.listen(3200, function(){
    console.log("server runs on port 3200");
    //console.log('CORS-enabled web server listening on port 3200');
});


app.get('/getProjData',(req,res)=>{
    res.send(projectData);
});


app.post('/postProjData',(req,res)=>{
    const data = req.body;
    projectData = data;
    res.send()
});