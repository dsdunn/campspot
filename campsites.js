const fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', (error, data) => {
  if(error){
    console.log(error);
  }
  else {
    console.log(availableSites(JSON.parse(data)));
  }
});

const availableSites = (searchObj) => {

  const searchStart = new Date(searchObj.search.startDate).getTime();
  const searchEnd = new Date(searchObj.search.endDate).getTime();
  const res = searchObj.reservations;
  const day = 1000 * 60 * 60 * 24;
  let openSites = [];

  for (let i = 0; i < searchObj.campsites.length; i++) {
    let siteId = searchObj.campsites[i].id;
    let available = true;

    for (let j = 0; j < res.length; j++) {
      let currentRes = res[j];
      let resStart = new Date(currentRes.startDate).getTime();
      let resEnd = new Date(currentRes.endDate).getTime();

      if (res[j].campsiteId < siteId) {
        continue;
      }
      if (res[j].campsiteId > siteId) {
        break;
      }
      if (searchStart < resStart) {
        if (searchEnd === resStart - (2 * day) || searchEnd > resStart) {
          available = false;
        }
      } else if (searchStart < resEnd || searchStart === resEnd + (2 * day)) {
        available = false;
      }
    }
    if (available) {
      openSites.push(searchObj.campsites[i].name);
    }
  }
  return openSites;
}

module.exports = availableSites;
