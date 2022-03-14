'use strict';

const citySales = document.getElementById('city-sales');

const cityForm = document.getElementById('addCity');

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const cityArr = [];

function City(name, minCust, maxCust, avg) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avg = avg;
  this.cookiesSoldPerHour = [];
  this.customersPerHour = [];
  this.total = 0;
  cityArr.push(this);
}

City.prototype.randomCustomers = function (min, max) {
  let number = Math.floor(Math.random() * (max - min + 1) + min);
  return number;
}

City.prototype.generateCookiesPerHour = function () {
  for (let i = 0; i < hours.length; i++) {
    this.customersPerHour.push(this.randomCustomers(this.minCust, this.maxCust));
    this.cookiesSoldPerHour.push(Math.floor(this.customersPerHour[i] * this.avg));
    this.total += (this.cookiesSoldPerHour[i]);
  }
}

const seattle = new City('Seattle', 23, 65, 6.3);
const tokyo = new City('Tokyo', 3, 24, 1.2);
const dubai = new City('Dubai', 11, 38, 3.7);
const paris = new City('Paris', 20, 38, 2.3);
const lima = new City('Lima', 2, 16, 4.6);

function renderHeader() {
  let thead = document.createElement('thead');
  citySales.appendChild(thead);

  let time = document.createElement('tr');
  thead.appendChild(time);

  let hour = document.createElement('th');
  time.appendChild(hour);

  for (let i = 0; i < hours.length; i++) {
    let timeData = document.createElement('th');
    timeData.textContent = `${hours[i]}`;
    time.appendChild(timeData);
  }
  let total = document.createElement('th');
  total.textContent = `Total:`;
  time.appendChild(total);

  let tbody = document.createElement('tbody');
  citySales.appendChild(tbody);
}
renderHeader();

City.prototype.renderCity = function () {
  let tbody = document.querySelector('tbody');

  let tr = document.createElement('tr');
  tr.textContent = `${this.name}`;
  tbody.appendChild(tr);

  for (let i = 0; i < this.cookiesSoldPerHour.length; i++) {
    let td = document.createElement('td');
    td.textContent = `${this.cookiesSoldPerHour[i]}`;
    tr.appendChild(td);
  }
  let total = document.createElement('td');
  total.textContent = `${this.total}`;
  tr.appendChild(total);
}

function callout() {
  for (let i = 0; i < cityArr.length; i++) {
    cityArr[i].generateCookiesPerHour();
    cityArr[i].renderCity();
  }
}

callout();

let tr = document.createElement('tr');

function renderFooter() {
  
  citySales.appendChild(tr);

  let td = document.createElement('td');
  td.textContent = `Total:`;
  tr.appendChild(td);

  let grandTotal = 0;

  for (let i = 0; i < hours.length; i++) {
    let hourlyTotal = 0;

    for (let j = 0; j < cityArr.length; j++) {
      hourlyTotal += cityArr[j].cookiesSoldPerHour[i];
    }
    const totalHourlySales = document.createElement('td');
    totalHourlySales.textContent = `${hourlyTotal}`;
    tr.appendChild(totalHourlySales);
    grandTotal += hourlyTotal;
  }
  const grandTotal1 = document.createElement('td');
  grandTotal1.textContent = `${grandTotal}`;
  tr.appendChild(grandTotal1);

}


renderFooter();

function handleSubmit(event) {
  event.preventDefault();

  let name = event.target.cityName.value;
  let minimum = +event.target.minimum.value;
  let maximum = +event.target.maximum.value;
  let average = +event.target.average.value;

  let newCity = new City(name, minimum, maximum, average);
  tr.innerHTML = '';
  newCity.randomCustomers();
  newCity.generateCookiesPerHour();
  newCity.renderCity();
  renderFooter();

}

cityForm.addEventListener('submit', handleSubmit);
// console.log(seattle);
// console.log(cityArr);






