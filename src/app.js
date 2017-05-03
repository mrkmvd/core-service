
'use strict';

// [START app]
const express = require('express');

const app = express();

var path  = require("path");


app.get('/', (req, res) => {
  // res.status(200).send('Agent21 tickets').end();
    res.sendFile(path.join(__dirname+'/index.html'));

  
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END app]
