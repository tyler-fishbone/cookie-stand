'use strict';

// global variables here
// instantial array of strings, 6am -> 8pm
var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function Location (name, minCust_Hour, maxCust_Hour, avgCookies_Customer) {
  this.name = name;
  this.minCust_Hour = minCust_Hour;
  this.maxCust_Hour = maxCust_Hour;
  this.avgCookies_Customer = avgCookies_Customer;
  this.randomNumCustomers_Hour = function () {
    var ranNumCust = Math.random() * (this.maxCust_Hour - this.minCust_Hour + 1) + this.minCust_Hour;
    // console.log(ranNumCust);
    return ranNumCust;
  };
}

var testLocation = new Location('testLocation', 6, 10, 3);
console.log(testLocation.randomNumCustomers_Hour());


/* 1st and Pike */
var firstAndPike  = {
  // stats for location
  minCust_Hour: 23,
  maxCust_Hour: 65,
  avgCookies_Customer: 6.3,
  // method that generates a random number of cutsomers per hour
  randomNumCustomers_Hour: function() {
    var ranNumCust = Math.random() * (this.maxCust_Hour - this.minCust_Hour + 1) + this.minCust_Hour;
    // console.log(ranNumCust);
    return ranNumCust;
  },
  // method to write hours and cookies sold to html
  render: function() {
    var totalCookiesSold = 0;
    var ulEl = document.getElementById('firstAndPike');
    for(var i = 0; i < hoursOfOperation.length; i++){
      var cookiesSoldInHour = Math.floor(this.randomNumCustomers_Hour() * this.avgCookies_Customer);
      var liEl = document.createElement('li');
      liEl.textContent = hoursOfOperation[i] + ': ' + cookiesSoldInHour + ' cookies';
      totalCookiesSold += cookiesSoldInHour;
    }
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
    return Math.random() * (this.maxCust_Hour - this.minCust_Hour + 1) + this.minCust_Hour;
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
seaTacAirport.render();

/* Seattle Center */
var seattleCenter = {
  minCust_Hour: 11,
  maxCust_Hour: 38,
  avgCookies_Customer: 3.7,
  randomNumCustomers_Hour: function () {
    return Math.random() * (this.maxCust_Hour - this.minCust_Hour + 1) + this.minCust_Hour;
  },
  render: function() {
    var totalCookiesSold = 0;
    var ulEl = document.getElementById('seattleCenter');
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
seattleCenter.render();


/* Capitol Hill */
var capitolHill = {
  minCust_Hour: 20,
  maxCust_Hour: 38,
  avgCookies_Customer: 2.3,
  randomNumCustomers_Hour: function() {
    return Math.random() * (this.maxCust_Hour - this.minCust_Hour + 1) + this.minCust_Hour;
  },
  render: function() {
    var totalCookiesSold = 0;
    var ulEl = document.getElementById('capitolHill');
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
capitolHill.render();

/* Alki */
var alki = {
  minCust_Hour: 2,
  maxCust_Hour: 16,
  avgCookies_Customer: 4.6,
  randomNumCustomers_Hour: function() {
    return Math.random() * (this.maxCust_Hour - this.minCust_Hour + 1) + this.minCust_Hour;
  },
  render: function() {
    var totalCookiesSold = 0;
    var ulEl = document.getElementById('alki');
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
alki.render();