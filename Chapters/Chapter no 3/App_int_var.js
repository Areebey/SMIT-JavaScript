// Chapter no 3: Integer Variables in JavaScript.

// Qno1. Declare a variable called age & assign to it your age. Show your age 
// in an alert box.

// var age = 20;
// alert("I am "+ age +" years old");

// Qno2. Declare & initialize a variable to keep track of how many times a visitor 
// has visited a web page. Show his/her number of visits on your web page. For 
// example: “You have visited this site N times”.


// var visitCount = localStorage.getItem('visitCount');
// if (!visitCount) {
//   visitCount = 0;
// }
// visitCount++;

// localStorage.setItem('visitCount', visitCount);

//  var visitCountText=document.getElementById('count').innerHTML = ("You have visited this site " + visitCount + " times");
//  alert(visitCountText);


// Qno3. Declare a variable called birthYear & assign to it your birth year. 
// Show the following message in your browser.

// var birthYear=2003;
// console.log("My birth year is "+birthYear);
// console.log(" data type of declared variable is "+typeof(birthYear));


// Qno4. A visitor visits an online clothing store www.xyzClothing.com.
// Write a script to store in variables the following information.
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

var visitorName="Caven Dish ";
var product="Mug's ";
var quantityOfProduct=15;

var store="www.xyzClothing.com."

console.log(visitorName+"Ordered "+quantityOfProduct+" "+product+"On "+store);

