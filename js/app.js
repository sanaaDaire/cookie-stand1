'use strict';


var hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'];

var shop1 = {
    name: 'seattle',
    MinOfCustomer: 23,
    MaxOfCustomer: 65,
    Avg: 6.3,
    totalhour: [],
    total: 0,
    getofcookie: function () {
        for (var i = 0; i < hours.length; i++) {
            this.totalhour.push(getRandomcookie(this.MinOfCustomer, this.MaxOfCustomer));
            this.total += this.totalhour[i];
        }
        // console.log(rhis.total);
        // console.log(this.totalhour[i]);
    },
    render: function () {
        
        var container = document.getElementById('cookie-stand');
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);
        var h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = this.name;
         var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (var i = 0; i < hours.length; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = `${hours[i]} ${this.totalhour[i]} cookies`;
            ulEl.appendChild(liEl);
        }
        liEl.textContent = `total ${this.total}`;
    }
};
function getRandomcookie(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
shop1.getofcookie();
shop1.render();   


var shop2 = {
    name: 'Tokyo',
    MinOfCustomer: 3,
    MaxOfCustomer: 24,
    Avg: 1.2,
    totalhour: [],
    total: 0,
    getofcookie: function () {
        for (var i = 0; i < hours.length; i++) {
            this.totalhour.push(getRandomcookie(this.MinOfCustomer, this.MaxOfCustomer));
            this.total += this.totalhour[i];
        }
        // console.log(rhis.total);
        // console.log(this.totalhour[i]);
    },
    render: function () {
        
        var container = document.getElementById('cookie-stand');
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);
        var h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = this.name;
         var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (var i = 0; i < hours.length; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = `${hours[i]} ${this.totalhour[i]} cookies`;
            ulEl.appendChild(liEl);
        }
        liEl.textContent = `total ${this.total}`;
    }
};
function getRandomcookie(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
shop2.getofcookie();
shop2.render(); 

var shop3 = {
    name: 'Dubai',
    MinOfCustomer: 11,
    MaxOfCustomer: 38,
    Avg: 3.7,
    totalhour: [],
    total: 0,
    getofcookie: function () {
        for (var i = 0; i < hours.length; i++) {
            this.totalhour.push(getRandomcookie(this.MinOfCustomer, this.MaxOfCustomer));
            this.total += this.totalhour[i];
        }
        // console.log(rhis.total);
        // console.log(this.totalhour[i]);
    },
    render: function () {
        
        var container = document.getElementById('cookie-stand');
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);
        var h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = this.name;
         var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (var i = 0; i < hours.length; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = `${hours[i]} ${this.totalhour[i]} cookies`;
            ulEl.appendChild(liEl);
        }
        liEl.textContent = `total ${this.total}`;
    }
};
function getRandomcookie(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
shop3.getofcookie();
shop3.render();   

var shop4 = {
    name: 'paris',
    MinOfCustomer: 20,
    MaxOfCustomer: 38,
    Avg: 2.3,
    totalhour: [],
    total: 0,
    getofcookie: function () {
        for (var i = 0; i < hours.length; i++) {
            this.totalhour.push(getRandomcookie(this.MinOfCustomer, this.MaxOfCustomer));
            this.total += this.totalhour[i];
        }
        // console.log(rhis.total);
        // console.log(this.totalhour[i]);
    },
    render: function () {
        
        var container = document.getElementById('cookie-stand');
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);
        var h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = this.name;
         var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (var i = 0; i < hours.length; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = `${hours[i]} ${this.totalhour[i]} cookies`;
            ulEl.appendChild(liEl);
        }
        liEl.textContent = `total ${this.total}`;
    }
};
function getRandomcookie(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
shop4.getofcookie();
shop4.render();   

var shop5 = {
    name: 'Lima',
    MinOfCustomer: 2,
    MaxOfCustomer: 16,
    Avg: 4.6,
    totalhour: [],
    total: 0,
    getofcookie: function () {
        for (var i = 0; i < hours.length; i++) {
            this.totalhour.push(getRandomcookie(this.MinOfCustomer, this.MaxOfCustomer));
            this.total += this.totalhour[i];
        }
        // console.log(rhis.total);
        // console.log(this.totalhour[i]);
    },
    render: function () {
        
        var container = document.getElementById('cookie-stand');
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);
        var h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = this.name;
         var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (var i = 0; i < hours.length; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = `${hours[i]} ${this.totalhour[i]} cookies`;
            ulEl.appendChild(liEl);
        }
        liEl.textContent = `total ${this.total}`;
    }
};
function getRandomcookie(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
shop5.getofcookie();
shop5.render();   