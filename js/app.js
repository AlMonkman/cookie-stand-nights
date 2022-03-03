'use strict';

const citySales = document.getElementById('city-sales');

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];



let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avg: 6.3,
  cookiesSoldPerHour: [],
  customersPerHour: [],
  total: 0,

  randomCustomers: function (min, max) {
    let number = Math.floor(Math.random() * (max - min + 1) + min);
    return number;
  },

  generateCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customersPerHour.push(this.randomCustomers(this.minCust, this.maxCust));
      this.cookiesSoldPerHour.push(Math.floor(this.customersPerHour[i] * this.avg));
      this.total += (this.cookiesSoldPerHour[i]);
    }
  },

  renderCity: function () {
    this.generateCookiesPerHour();
    let list = document.createElement('ul');
    list.textContent = `${this.name}`;
    citySales.appendChild(list);
    for (let i = 0; i < hours.length; i++) {

      let listItems = document.createElement('li');
      listItems.textContent = `${hours[i]}:${this.cookiesSoldPerHour[i]} Cookies sold.`;
      list.appendChild(listItems);
    }
    let total = document.createElement('li');
    total.textContent = `Total:${this.total}`;
    list.appendChild(total);
  },

}
seattle.renderCity();

let tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avg: 1.2,
  cookiesSoldPerHour: [],
  customersPerHour: [],
  total: 0,

  randomCustomers: function (min, max) {
    let number = Math.floor(Math.random() * (max - min + 1) + min);
    return number;
  },

  generateCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customersPerHour.push(this.randomCustomers(this.minCust, this.maxCust));
      this.cookiesSoldPerHour.push(Math.floor(this.customersPerHour[i] * this.avg));
      this.total += (this.cookiesSoldPerHour[i]);
    }
  },

  renderCity: function () {
    this.generateCookiesPerHour();
    let list = document.createElement('ul');
    list.textContent = `${this.name}`;
    citySales.appendChild(list);
    for (let i = 0; i < hours.length; i++) {

      let listItems = document.createElement('li');
      listItems.textContent = `${hours[i]}:${this.cookiesSoldPerHour[i]} Cookies sold.`;
      list.appendChild(listItems);
    }
    let total = document.createElement('li');
    total.textContent = `Total:${this.total}`;
    list.appendChild(total);
  },

}
tokyo.renderCity();

let dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avg: 3.7,
  cookiesSoldPerHour: [],
  customersPerHour: [],
  total: 0,

  randomCustomers: function (min, max) {
    let number = Math.floor(Math.random() * (max - min + 1) + min);
    return number;
  },

  generateCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customersPerHour.push(this.randomCustomers(this.minCust, this.maxCust));
      this.cookiesSoldPerHour.push(Math.floor(this.customersPerHour[i] * this.avg));
      this.total += (this.cookiesSoldPerHour[i]);
    }
  },

  renderCity: function () {
    this.generateCookiesPerHour();
    let list = document.createElement('ul');
    list.textContent = `${this.name}`;
    citySales.appendChild(list);
    for (let i = 0; i < hours.length; i++) {

      let listItems = document.createElement('li');
      listItems.textContent = `${hours[i]}:${this.cookiesSoldPerHour[i]} Cookies sold.`;
      list.appendChild(listItems);
    }
    let total = document.createElement('li');
    total.textContent = `Total:${this.total}`;
    list.appendChild(total);
  },

}
dubai.renderCity();

let paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avg: 2.3,
  cookiesSoldPerHour: [],
  customersPerHour: [],
  total: 0,

  randomCustomers: function (min, max) {
    let number = Math.floor(Math.random() * (max - min + 1) + min);
    return number;
  },

  generateCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customersPerHour.push(this.randomCustomers(this.minCust, this.maxCust));
      this.cookiesSoldPerHour.push(Math.floor(this.customersPerHour[i] * this.avg));
      this.total += (this.cookiesSoldPerHour[i]);
    }
  },

  renderCity: function () {
    this.generateCookiesPerHour();
    let list = document.createElement('ul');
    list.textContent = `${this.name}`;
    citySales.appendChild(list);
    for (let i = 0; i < hours.length; i++) {

      let listItems = document.createElement('li');
      listItems.textContent = `${hours[i]}:${this.cookiesSoldPerHour[i]} Cookies sold.`;
      list.appendChild(listItems);
    }
    let total = document.createElement('li');
    total.textContent = `Total:${this.total}`;
    list.appendChild(total);
  },

}
paris.renderCity();

let lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avg: 4.6,
  cookiesSoldPerHour: [],
  customersPerHour: [],
  total: 0,

  randomCustomers: function (min, max) {
    let number = Math.floor(Math.random() * (max - min + 1) + min);
    return number;
  },

  generateCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customersPerHour.push(this.randomCustomers(this.minCust, this.maxCust));
      this.cookiesSoldPerHour.push(Math.floor(this.customersPerHour[i] * this.avg));
      this.total += (this.cookiesSoldPerHour[i]);
    }
  },

  renderCity: function () {
    this.generateCookiesPerHour();
    let list = document.createElement('ul');
    list.textContent = `${this.name}`;
    citySales.appendChild(list);
    for (let i = 0; i < hours.length; i++) {

      let listItems = document.createElement('li');
      listItems.textContent = `${hours[i]}:${this.cookiesSoldPerHour[i]} Cookies sold.`;
      list.appendChild(listItems);
    }
    let total = document.createElement('li');
    total.textContent = `Total:${this.total}`;
    list.appendChild(total);
  },

}
lima.renderCity();
