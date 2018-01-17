'use strict';

// global variables here
// instantial array of strings, 6am -> 8pm
var hoursOfOperation = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];
var locationTable = document.getElementById('locations');
var newLocationForm = document.getElementById('new-location-form');

var arrayOfLocations = [];
var arrayOfHourlyTotals = [];

function Location(name, minCust_Hour, maxCust_Hour, avgCookies_Customer) {
  this.name = name;
  this.minCust_Hour = minCust_Hour;
  this.maxCust_Hour = maxCust_Hour;
  this.avgCookies_Customer = avgCookies_Customer;
  this.randomNumCustomers_Hour = function () {
    var ranNumCust = Math.random() * (this.maxCust_Hour - this.minCust_Hour + 1) + this.minCust_Hour;
    // console.log(ranNumCust);
    return ranNumCust;
  };
  arrayOfLocations.push(this);
}

//render method for Location
Location.prototype.render = function () {
  var totalCookiesSold = 0;
  // start tr with name of location
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);
  //loop through hourly sales and fill into td
  for(var i = 0; i < hoursOfOperation.length; i++){
    var cookiesSoldInHour = Math.floor(this.randomNumCustomers_Hour() * this.avgCookies_Customer);
    tdEl = document.createElement('td');
    tdEl.textContent = cookiesSoldInHour;
    trEl.appendChild(tdEl);
    totalCookiesSold += cookiesSoldInHour;
    //increment array of totals index by cookiesSoldInHour
    if (arrayOfHourlyTotals.length !== hoursOfOperation.length ) {
      arrayOfHourlyTotals[i] = parseInt(cookiesSoldInHour);
    } else {
      arrayOfHourlyTotals[i] += parseInt(cookiesSoldInHour);
    }
    // console.log(arrayOfHourlyTotals);
  }
  //finish tr with total cookies sold
  tdEl = document.createElement('td');
  tdEl.textContent = totalCookiesSold;
  trEl.appendChild(tdEl);
  //append everything into table row
  locationTable.appendChild(trEl);
};


function makeHeaderRow (headerArray) {
  //new row, empty first cell
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = '';
  trEl.appendChild(thEl);
  // loop through hours of operation
  for(var i = 0; i < hoursOfOperation.length; i++){
    thEl = document.createElement('th');
    thEl.textContent = headerArray[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Daily Location Total';
  trEl.appendChild(thEl);
  //append everything into table row
  locationTable.appendChild(trEl);
}


function makeFooterRow (footerArray) {
  //new row, empty first cell
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Totals';
  trEl.appendChild(tdEl);
  // loop through hours of operation
  for(var i = 0; i < arrayOfHourlyTotals.length; i++){
    tdEl = document.createElement('td');
    tdEl.textContent = footerArray[i];
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('th');
  tdEl.textContent = '';
  trEl.appendChild(tdEl);
  //append everything into table row
  locationTable.appendChild(trEl);
}

// function that loops through location objects, renders them to table
// this function will create headers and footer row as well
function renderAllLocations() {
  makeHeaderRow(hoursOfOperation);
  for(var i in arrayOfLocations){
    arrayOfLocations[i].render();
  }
  makeFooterRow(arrayOfHourlyTotals);
}

// function which adds location from form to table
function addNewLocation(event) {
  event.preventDefault();
  console.log(event.target.locationName.value);
  var newName = event.target.locationName.value;
  var newMinCust_Hour = event.target.minCust_Hour.value;
  var newMaxCust_Hour = event.target.maxCust_Hour.value;
  var newAvgCookies_Customer = event.target.avgCookies_Customer.value;

  new Location(newName, newMinCust_Hour, newMaxCust_Hour, newAvgCookies_Customer);

  locationTable.innerHTML = '';

  renderAllLocations();
}


//construct objects
new Location('1st and Pike', 23, 65, 6.3);
new Location('Seatac Airport', 3, 24, 1.2);
new Location('Seattle Center', 11, 38, 3.7);
new Location('Capitol Hill', 20, 38, 2.3);
new Location('Alki', 2, 16, 4.6);

// event listener for form submittal
newLocationForm.addEventListener('submit', addNewLocation);

renderAllLocations();