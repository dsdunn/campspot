const fs = require('fs');
const availableSites = require('./campsites.js');

fs.readFile(process.argv[2], 'utf-8', (error, data) => {
  if(error){
    console.log(error);
  }
  else {
    console.log(availableSites(JSON.parse(data)));
  }
});