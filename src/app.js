
'use strict';

// [START app]
const express = require('express');
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded());


var path  = require("path");
var firebase = require('./firebase.js');
initFireBase();

function initFireBase(){

  firebase.init();
  
}
function printObject(object){
  var properties = Object.keys(object);
        for(var i=0; i < properties.length; i++) {
          var prop = properties[i];
          if(prop )
          console.log('property: ' + prop + ' | value: '  + object[prop]);
        }
};

app.get('/', (req, res) => {
  // res.status(200).send('Agent21 tickets').end();
    res.sendFile(path.join(__dirname+'/index.html'));  
});


app.post('/api/actions', (req, res) => {
	console.log("Called /api/actions - latest build.");
	var JSONPayLoad = JSON.parse(req.body.payload);
	firebase.logTicket(JSONPayLoad);
	res.setHeader('Content-Type', 'application/json'); //Requires application/json MIME type

	var resData = {};
	resData.speech = '';
	resData.displayText = 'OK, A Human agent will help you shortly';
	resData.data = {};
	resData.contextOut = [];
	resData.source = "master";
	resData.followupEvent = {};
	res.status(200).json(resData);
});

app.post('/api/feedback/positive', (req, res) => {
	var resData = {};
	resData.speech = 'positive_feedback';
	resData.displayText = 'Thanks for the feedback';
	resData.data = {};
	resData.contextOut = [];
	resData.source = "master";
	resData.followupEvent = {};
	res.status(200).json(resData);
});

app.post('/api/feedback/negative', (req, res) => {
	var resData = {};
	resData.speech = 'negative_feedback';
	resData.displayText = 'Thanks for the feedback';
	resData.data = {};
	resData.contextOut = [];
	resData.source = "master";
	resData.followupEvent = {};
	res.status(200).json(resData);
});

app.post('/api/conversation', (req, res) => {
	var resData = {};
	resData.speech = 'conversation';
	resData.displayText = 'Hello. How may I assist you?';
	resData.data = {};
	resData.contextOut = [];
	resData.source = "master";
	resData.followupEvent = {};
	res.status(200).json(resData);	
});

app.post('/api', (req, res) => {
	var resData = {};
	res.status(200).json(resData);	
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END app]
