'use strict';

// global variables here
// instantial array of strings, 6am -> 8pm
var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

/* 1st and Pike */
var firstAndPike  = {
  // minimum customers per hour
  minCust_Hour: 23,
  // maximum customers per hour
  maxCust_Hour: 65,
  // average customers per hour
  avgCookies_Customer: 6.3,
  // method that generates a random number of cutsomers per hour
  randomNumCustomers_Hour: function() {
    return Math.random() * (this.maxCust_Hour - this.minCust_Hour) + this.minCust_Hour;
  },
  // method to write hours and cookies sold to html
  render: function() {
    // inst variable for counting total cookies
    var totalCookiesSold = 0;
    // reference correct list
    var ulEl = document.getElementById('firstAndPike');
    //loop through to write hour and cookie amount
    for(var i = 0; i < hoursOfOperation.length; i++){
      var cookiesSoldInHour = Math.floor(this.randomNumCustomers_Hour() * this.avgCookies_Customer);
      // create list item
      var liEl = document.createElement('li');
      // write hour and cookie amount to the list item
      liEl.textContent = hoursOfOperation[i] + ': ' + cookiesSoldInHour + ' cookies';
      // append list item the unordered list
      ulEl.appendChild(liEl);
      // add cookies sold in that hour to total cookies sold var
      totalCookiesSold += cookiesSoldInHour;
    }
    // append unordered list with total number of cookies sold
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + totalCookiesSold + ' cookies';
    ulEl.appendChild(liEl);
  }
};
firstAndPike.render();


/* Seatac Airport */
var seaTacAirport = {
  minCust_Hour: 3,
  maxCust_Hour: 24,
  avgCookies_Customer: 1.2,
  randomNumCustomers_Hour: function () {
    return Math.random() * (this.maxCust_Hour - this.minCust_Hour) + this.minCust_Hour;
  },
  render: function() {
    var totalCookiesSold = 0;
    var ulEl = document.getElementById('seaTacAirport');
    for(var i = 0; i < hoursOfOperation.length; i++){
      var cookiesSoldInHour = Math.floor(this.randomNumCustomers_Hour() * this.avgCookies_Customer);
      var liEl = document.createElement('li');
      liEl.textContent = hoursOfOperation[i] + ': ' + cookiesSoldInHour + ' cookies';
      ulEl.appendChild(liEl);
      totalCookiesSold += cookiesSoldInHour;
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + totalCookiesSold + ' cookies';
    ulEl.appendChild(liEl);
  }
};
// console.log(seaTacAirport.randomNumCustomers_Hour());
seaTacAirport.render();









/* Seattle Center */
/* Capitol Hill */
/* Alki */

/* <h2>1st and Pike</h3>
<ul id="seaTacAirport"></ul>
<ul id="seattleCenter"></ul>
<ul id="capitolHill"></ul>
<ul id="alki"></ul> */


// render lists on page








// copied intial comments for reference
// Create first object literal: 1st and Pike

// 1. store min hourly customer
// 2. store max hourly customer
// 3. store average Cooks per customer
// 4. write method to determine random number of cookies per hour based on 1, 2, 3 above
// 5. use above method and write values to an array for each hour
// 5.1. store that array in a variable
// 6. loop through array of strings and avgCustomers and write elements to HTML
