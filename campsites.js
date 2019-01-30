const searchObj = {
  "search": {
    "startDate": "2018-06-04",
    "endDate": "2018-06-06"
  },
  "campsites": [
    {
      "id": 1,
      "name": "Cozy Cabin"
    },
    {
      "id": 2,
      "name": "Comfy Cabin"
    },
    {
      "id": 3,
      "name": "Rustic Cabin"
    },
    {
      "id": 4,
      "name": "Rickety Cabin"
    },
    {
      "id": 5,
      "name": "Cabin in the Woods"
    }
  ],
  "reservations": [
    {"campsiteId": 1, "startDate": "2018-06-01", "endDate": "2018-06-03"},
    {"campsiteId": 1, "startDate": "2018-06-08", "endDate": "2018-06-10"},
    {"campsiteId": 2, "startDate": "2018-06-01", "endDate": "2018-06-01"},
    {"campsiteId": 2, "startDate": "2018-06-02", "endDate": "2018-06-03"},
    {"campsiteId": 2, "startDate": "2018-06-07", "endDate": "2018-06-09"},
    {"campsiteId": 3, "startDate": "2018-06-01", "endDate": "2018-06-02"},
    {"campsiteId": 3, "startDate": "2018-06-08", "endDate": "2018-06-09"},
    {"campsiteId": 4, "startDate": "2018-06-07", "endDate": "2018-06-10"}
  ]
}

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
      if (searchEnd === resStart - day || searchEnd > resStart) {
        available = false;
        console.log(res[j], '1')
      }
    } else if (searchStart < resEnd || searchStart === resEnd + day) {
      available = false;
      console.log(res[j], '2')
    }
  }
  if (available) {
    openSites.push(searchObj.campsites[i].name);
  }
}

console.log(openSites)
