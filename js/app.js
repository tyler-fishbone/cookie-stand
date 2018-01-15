'use strict';

// global variables here
// instantial array of strings, 6am -> 8pm
var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];



// Create first object literal: 1st and Pike
var firstAndPike  = {
  // 1. store min hourly customer
  minCust_Hour: 23,
  // 2. store max hourly customer
  maxCust_Hour: 65,
  // 3. store average Cooks per customer
  avgCookies_Customer: 6.3,
  
  // 3.1 method that generates a random number of cutsomers per hour
  randomNumCustomers_Hour: function() {
    return Math.random() * (this.maxCust_Hour - this.minCust_Hour) + this.minCust_Hour;
  },
  
  // 4. write method to determine random number of cookies per hour based on 1, 2, 3 above
  render: function() {
    var ulEl = document.getElementById('1stAndPike');
    for(var i = 0; i < hoursOfOperation.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = hoursOfOperation[i] + ': ' + Math.floor((this.randomNumCustomers_Hour() * this.avgCookies_Customer)) + ' cookies';
      ulEl.appendChild(liEl);
    }
  }
};

// console.log('one hour = ' + firstAndPike.oneHourOfSales() + ' cookies');
firstAndPike.render();









// copied intial comments for reference
// Create first object literal: 1st and Pike

// 1. store min hourly customer
// 2. store max hourly customer
// 3. store average Cooks per customer
// 4. write method to determine random number of cookies per hour based on 1, 2, 3 above
// 5. use above method and write values to an array for each hour
// 5.1. store that array in a variable
// 6. loop through array of strings and avgCustomers and write elements to HTML
