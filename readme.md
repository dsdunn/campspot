## Campspot Code Challenge 

#### Set up this program:

1. Clone down this repository: `git clone https://github.com/dsdunn/campspot`.

2. Make sure you have node.js installed on your machine. (`https://nodejs.org/en/download/`).

3. Run `npm install` to install dependencies (if you want to run tests).

4. Run `npm test` to run tests.


#### Run the program:

This is a command line program that runs with node.js. 

From the command line:
 * `cd campspot` to enter directory
 * `node search.js <path to json file>` to run

To use the included sample search object (sampleSearch.json), run `node search.js sampleSearch.json`



#### My approach to the problem:

This program cycles through each Campsite in the search object and compares the requested reservation dates to existing reservations for that site. If a conflict is encountered, either because of overlapping dates or because of a potential one-day reservation gap, that campsite is disregarded as unavailable for the requested period. If no conflics are found, the site is added to the list of available sites which is ultimately returned to the user.

#### Assumptions:

The basic requirement for the success of this program is for the search object to be formatted correctly. This assumes that start dates are not after end dates, and that the reservations are listed in order of campsite id and date. Also, if there are no reservations, there will still be a reservations key pointing to an empty array.







