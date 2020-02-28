'use strict' ;
 
var totalForTotal = 0;
var lastToatal;
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
  var locationTotal = 0 ;
  var lastTotal = 0;
  var Shop1 =[] ;
  function Location(name,minOfCustomer,maxOfCustomer,avgOfCookies) {
    this.total=0;
    this.outArray=[];
    this.customerNumber=0;
    this.name=name;
    this.minOfCustomer=minOfCustomer;
    this.maxOfCustomer=maxOfCustomer;
    this.avgOfCookies=avgOfCookies;
    this.getCookies();
    Shop1.push(this);
    this.finalOutPut();
    
  }
  //firstly: create a method for the round
  Location.prototype.getCustomerNumber = function(min ,max){
    this.customerNumber=getRandomInt(min,max);
  };
  //secondly: create a method for for a number/hour
  Location.prototype.getCookies= function(){
    for(var i=0 ; i<hours.length;i++){
        this.getCustomerNumber(this.minOfCustomer,this.maxOfCustomer);
        var NumOfHour = Math.ceil(this.customerNumber * this.avgOfCookies);
        this.outArray.push(NumOfHour);
        this.total = this.total + NumOfHour;
    }
    this.outArray.push(this.total);
    locationTotal += this.total;
  };
  // console.log(getCookies);
  //table:-
  Location.prototype.finalOutPut =function(){
    var tr2El = document.createElement('tr');
    tableEl.appendChild(tr2El);
    var td1El = document.createElement('td');
    td1El.textContent= this.name;
    tr2El.appendChild(td1El);
    for(var i=0; i<hours.length;i++){
        var td1El = document.createElement('td');
        td1El.textContent=this.outArray[i];
        tr2El.appendChild(td1El);
    }
    var totalEl = document.createElement('td');
    totalEl.textContent=this.total;
    tr2El.appendChild(totalEl);
  };
  // console.log(finalOutPut);
  //first R(head)
  var tableContainer = document.getElementById('table');
  var tableEl = document.createElement('table');
  tableContainer.appendChild(tableEl);
  function head(){
    var tr1El = document.createElement('tr');
    tableEl.appendChild(tr1El);
    document.getElementsByTagName(tr1El);
    var th1El = document.createElement('th');
    th1El.textContent=' ';
    tr1El.appendChild(th1El);
    for (var i = 0; i<hours.length;i++){
        var thEl =document.createElement('th');
        thEl.textContent=hours[i];
        tr1El.appendChild(thEl);
    }
    var th3El = document.createElement('th');
    th3El.textContent=' Total ';
    tr1El.appendChild(th3El);
}
head();
console.log(head);
new Location('Seatle',23,65,6.3,[]);
new Location('Tokyo',3,24,1.2);
new Location('Dubai',11,38,3.7);
new Location('Paris',20,38,2.3);
new Location('Lima',2,16,4.6);
// last R (Footer):
function Footer (){
    var lastTotal = document.createElement('tr');
    tableEl.appendChild(lastTotal);
    var tdTotalEl =document.createElement('td');
    tdTotalEl.textContent='Total';
    lastTotal.appendChild(tdTotalEl);
    var secondTotal;
    for (var i=0; i <hours.length;i++){
        secondTotal=0;
        for(var j = 0 ; j<Shop1.length ; j++){
            secondTotal += Shop1[j].outArray[i];
        }
        var lastRow = document.createElement('td');
         lastRow.textContent=secondTotal;
         totalForTotal += secondTotal;
         lastTotal.appendChild(lastRow);
    }
    var totalTotal = document.createElement('td');
    totalTotal.textContent = totalForTotal;
    lastTotal.appendChild(totalTotal);
}
Footer();
console.log(Footer);

//form-section
// function myForm () {

// var addForm = document.getElementById('addForm');

// addForm.addEventListener('submit' , function(event){
//     event.preventDefault();

//     var cityName = event.target.name.value;
//     var min=parseInt(event.target.min.value);
//     var max=parseInt(event.target.max.value);
//     var avg=parseInt(event.target.avg.value);

//     for (var i=0; i<Shop1.length;i++){
//         if (cityName === Shop1[i].name){
//             return alert ('Store Name already exists');
//         }
//     }
//     if (max<min){
//         return alert('The max is less than the min ')
//     }
//     tableEl.removeChild(tableEl.lastChild);
//     new City (cityName,min,max,avg);

//     Footer();
// });

// }
myForm();