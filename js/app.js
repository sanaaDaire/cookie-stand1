
'use strict';

var totalperhour= [];
var total=0;
var hours = ['6 am','7 am','8 am','9 am','10 am', '11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm','8 pm'];

function Shop(name, MinCustomer , MaxCustomer , Avgcookie) {
    this.name = name,
    this.MinCustomer = MinCustomer,
    this.MaxCustomerMaxCust= MaxCustomer,
    this.Avgcookie = Avgcookie ,
    this.numberCustomer =[],
    this.total = 0;
}
    Shop.prototype.getCustomer = function(){
        for (var i = 0; i < this.hours.length; i++) {
            Shop.numberCustomer.push(getRandomcookie(Shop.MinCustomer,Shop.MaxCustomer));
        }
    };

    Shop.prototype.header =function(){

       var shopContainer = document.getElementById('cookie-stand');
       var tableEl = document.createElement('table');
        shopContainer.appendChild(tableEl);
        var trEl = document.createElement('tr');
        tableEl.appendChild(trEl);
        var thE1 = document.createElement('tr');
        thEl.textContent = [  ];
            trE1.appendChild(th1E1);
            for ( var i =0 ; i < hours.length ; i++){
                var th2El =document.createElement('th');
                th2E1.textContent = hours;
                trEl.appendChild(th2E1);
                var th3El =document.createElement('th');
                trEl.appendChild(th3E1);
                var ulEl = document.createElement('ul');
                articleEl.appendChild(ulEl);
                for (var i = 0; i < this.hours.length; i++){
                var liEl = document.createElement('li');
                liEl.textContent = `${this.hours[i]} ${totalperhour[i]} cookies`;
                ulEl.appendChild(liEl);
        }
        liEl.textContent = `total ${total}`;
    }
    
};

var Shop1 = new Shop('seatle' , 23 , 65 , 6.3);
Shop1.render();
var Shop2 = new Shop('Tokyo' , 3 , 24 , 1.2);
Shop2.render();
var Shop3 = new Shop('Dubai' , 11 , 38 , 3.7);
Shop3.render();
var Shop4 = new Shop('Paris' , 11 , 38 , 3.7);
Shop4.render();
var Shop3 = new Shop('Lima' , 11 , 38 , 3.7);
Shop3.render();
var Shop3 = new Shop('Total' , 11 , 38 , 3.7);
Shop3.render();


function getRandomcookie(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  var store1Container= document.getElementById('Store 1');
  var tableEl = document.createElement('table');

    store1.getnumofcookie();
    store1.render();
    // var store2 = {
    // name : 'Tokyo',
    // MinCust: 3,
    // MinCustt:24,
    // Avgcookie :1.2,
    // hours: ['6 am','7 am','8 am','9 am','10 am', '11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm','8 pm'],
    // getnumofcookie : function(){
    //     for (var i = 0; i < this.hours.length; i++) {
    //         totalperhour.push(getRandomcookie(this.MinCust,this.MaxCust));
    //         total+=totalperhour[i];
    //         console.log(totalperhour[i]);
    //     }
    // },
    // render : function(){
        // var container = document.getElementById('cookie-stand');
        // var articleEl = document.createElement('article');
        store1container.appendChild(tableEl);
        var trEl = document.createElement('tr');
        tableEl.appendChild(trEl);
        var th1El = document.createElement('th');
        th1El.textContent = store2.name;
        // var pEl = document.createElement('p');
        // pEl.textContent = `${store1.  MaxCust}, ${store1. MinCust}, ${store1. Avgcookie} .`;
        //  articleEl.appendChild(pEl);
        var th1El = document.createElement('th1E1');
        th1El.appendChild(th1El);
          for (var i = 0; i < this.hours.length; i++){
          var th1El = document.createElement('th1');
          th1El.textContent = `${this.hours[i]} ${totalperhour[i]} cookies`;
          th1El.appendChild(th1El);


          var th2El = document.createElement('th');
          th2El.textContent = 'th2';
            trEl.appendChild(th2El);
            var th3El = document.createElement('th');
            th3El.textContent = 'th3';
            trEl.appendChild(th3El);

            var tr2El = document.createElement('tr');
            tableEl.appendChild(tr2El);
            var td1El = document.createElement('td');
            td1El.textContent = Shop1;
            tr2El.appendChild(td1El);

            var td2El = document.createElement('td');
            td2El.textContent = Shop2;
            tr2El.appendChild(td2El);

            var td3El = document.createElement('td');
            td3El.textContent = Shop3;
            tr2El.appendChild(td3El);
        }
        liEl.textContent = `total ${total}`;

//       }
// };
// function getRandomcookie(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
//   }
//   store2.getnumofcookie();
// store2.render();

// var store3 = {
//     name : 'Dubai',
//     MinCust: 11,
//     MinCustt:38,
//     Avgcookie :3.7,
//     hours: ['6 am','7 am','8 am','9 am','10 am', '11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm','8 pm'],
//     getnumofcookie : function(){
//         for (var i = 0; i < this.hours.length; i++) {
//             totalperhour.push(getRandomcookie(this.MinCust,this.MaxCust));
//             total+=totalperhour[i];
//             console.log(totalperhour[i]);
//         }
//     },
//     render : function(){
//         var container = document.getElementById('cookie-stand');
//         var articleEl = document.createElement('article');
//         container.appendChild(articleEl);
//         var h3El = document.createElement('h3');
//         articleEl.appendChild(h3El);
//         h3El.textContent = store3.name;
//         // var pEl = document.createElement('p');
//         // pEl.textContent = `${store1.  MaxCust}, ${store1. MinCust}, ${store1. Avgcookie} .`;
//         //  articleEl.appendChild(pEl);
//         var ulEl = document.createElement('ul');
//         articleEl.appendChild(ulEl);
//           for (var i = 0; i < this.hours.length; i++){
//           var liEl = document.createElement('li');
//           liEl.textContent = `${this.hours[i]} ${totalperhour[i]} cookies`;
//           ulEl.appendChild(liEl);
//         } 
//         liEl.textContent = `total ${total}`;

//       }
// };
// function getRandomcookie(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
//   }
//   store3.getnumofcookie();
// store3.render();



// var store4 = {
//     name : 'Paris',
//     MinCust: 20,
//     MinCustt:38,
//     Avgcookie :2.3,
//     hours: ['6 am','7 am','8 am','9 am','10 am', '11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm','8 pm'],
//     getnumofcookie : function(){
//         for (var i = 0; i < this.hours.length; i++) {
//             totalperhour.push(getRandomcookie(this.MinCust,this.MaxCust));
//             total+=totalperhour[i];
//             console.log(totalperhour[i]);
//         }
//     },
//     render : function(){
//         var container = document.getElementById('cookie-stand');
//         var articleEl = document.createElement('article');
//         container.appendChild(articleEl);
//         var h4El = document.createElement('h4');
//         articleEl.appendChild(h4El);
//         h4El.textContent = store4.name;
//         // var pEl = document.createElement('p');
//         // pEl.textContent = `${store1.  MaxCust}, ${store1. MinCust}, ${store1. Avgcookie} .`;
//         //  articleEl.appendChild(pEl);
//         var ulEl = document.createElement('ul');
//         articleEl.appendChild(ulEl);
//           for (var i = 0; i < this.hours.length; i++){
//           var liEl = document.createElement('li');
//           liEl.textContent = `${this.hours[i]} ${totalperhour[i]} cookies`;
//           ulEl.appendChild(liEl);
//         }
//         liEl.textContent = `total ${total}`;


//       }
// };
// function getRandomcookie(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
//   }
//   store4.getnumofcookie();
// store4.render();





// var store5= {
//     name : 'Lima',
//     MinCust: 20,
//     MinCustt:38,
//     Avgcookie :2.3,
//     hours: ['6 am','7 am','8 am','9 am','10 am', '11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm','8 pm'],
//     getnumofcookie : function(){
//         for (var i = 0; i < this.hours.length; i++) {
//             totalperhour.push(getRandomcookie(this.MinCust,this.MaxCust));
//             total+=totalperhour[i];
//             console.log(totalperhour[i]);
//         }
//     },
//     render : function(){
//         var container = document.getElementById('cookie-stand');
//         var articleEl = document.createElement('article');
//         container.appendChild(articleEl);
//         var h5El = document.createElement('h5');
//         articleEl.appendChild(h5El);
//         h5El.textContent = store5.name;
//         // var pEl = document.createElement('p');
//         // pEl.textContent = `${store1.  MaxCust}, ${store1. MinCust}, ${store1. Avgcookie} .`;
//         //  articleEl.appendChild(pEl);
//         var ulEl = document.createElement('ul');
//         articleEl.appendChild(ulEl);
//           for (var i = 0; i < this.hours.length; i++){
//           var liEl = document.createElement('li');
//           liEl.textContent = `${this.hours[i]} ${totalperhour[i]} cookies`;
//           ulEl.appendChild(liEl);
//         }
//         liEl.textContent = `total ${total}`;


//       }
// };
// function getRandomcookie(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
//   }
//   store5.getnumofcookie();
// store5.render();