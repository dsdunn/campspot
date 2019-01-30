const availableSites = require('../campsites.js');
const assert = require('chai').assert;
const testSearch = {
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
    }
  ],
  "reservations": [
    {"campsiteId": 1, "startDate": "2018-06-01", "endDate": "2018-06-03"},
    {"campsiteId": 2, "startDate": "2018-06-01", "endDate": "2018-06-04"}
  ]
}

describe('availableSites', () => {

  it('should be a function', () => {
    assert.isFunction(availableSites);
  });

  it('should return an array', () => {
    assert.isArray(availableSites(testSearch));
  });

  it('should return sites that leave no gap', () => {
    assert.deepEqual(availableSites(testSearch), ['Cozy Cabin']);
  });

  it('should return sites that leave a gap greater than one day', () => {
    testSearch.search.startDate = '2018-06-06';
    assert.deepEqual(availableSites(testSearch), ['Cozy Cabin']);
  })

  it('should not return sites with overlapping reservations', () => {
    testSearch.search.startDate = '2018-06-03';
    assert.deepEqual(availableSites(testSearch), []);
  })

  it('should not return sites with one day gap', () => {
    testSearch.search.startDate = '2018-06-05';
    assert.deepEqual(availableSites(testSearch), ['Comfy Cabin']);
  })

  it('should return all available sites', () => {
    testSearch.search.startDate = '2018-06-07';
    assert.deepEqual(availableSites(testSearch), ['Cozy Cabin', 'Comfy Cabin']);
  })
})