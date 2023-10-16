// Chapter no 1: Alert 

// Qno1: Write a script to greet your website visitor using JS alert box.

// alert("");

// Qno2: Write a script to display following message on your webpage.

// alert("Error! Please enter a valid password.");

// Qno3: Write a script to display following message on your webpage.

// alert("Welcome to Js Land \n Happy Coding!");

// Qno4: Write a script to display following messages in sequence

// alert("Welcome to Js Land");
// alert("Happy Coding!");

// Qno5: Generate the following message through browser’s developer console.
// I have to do this through console too 

// alert("Hello...I can run JS through my web brower's console");

// -----------------------------------------------------------------------------

// Chapter no 2: String Variables in JS

// Qno1. Declare a variable called username.

// var username;

// Qno2. Declare a variable called myName & assign to it a string that represents your Full Name.

// var myName="Areeb Rafiq";

// Qno3. Write script to
//      a) Declare a JS variable, titled message.
//      b) Assign “Hello World” to variable message
//      c) Display the message in alert box.

// var message="Hello World";
// alert(message);

// Qno4. Write a script to save student’s bio data in JS variables and show the data in alert boxes

// var name="Areeb Rafiq";
// var age=20;
// var certification="Certified in MObile App Development";

// alert(name);
// alert(age);
// alert(certification);

// Qno5. Write a script to display the following alert using one JS variable.

// var new ="PlZZA"+ "PiZZ" + "PiZ" + "Pi" + "P";
// alert(new)

// Qno6. Declare a variable called email and assign to it a string that represents 
// your Email Address(e.g. example@example.com).Show the blow mentioned message in an 
// alert box.(Hint: use string concatenation)

// var line="This is my Email Address";
// var email="areebrafiq125@gmail.com";

// alert(line +"  "+ email);

// Qno7.  Declare a variable called book & give it the value “A smarter way to learn 
// JavaScript”. Display the following message in an alert box.

// var book="A smarter way to learn JavaScript";
// alert("I'm trying to learn from the Book "+book);

// 8. Write a script to display this in browser through JS.

// document.write("Yeah, I can write HTML content thropugh Javascript");


// Qno 9. Store following string in a variable and show in alert and browser through JS

// var pattern="“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
// alert(pattern);

// --------------------------------------------------------------------------------

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

// var visitorName="Caven Dish ";
// var product="Mug's ";
// var quantityOfProduct=15;

// var store="www.xyzClothing.com."

// console.log(visitorName+"Ordered "+quantityOfProduct+" "+product+"On "+store);

// --------------------------------------------------------------------------------

// Chapter no 4: Variable Names: Legal & Illegal in JavaScript.

// Qno1. Declare 3 variables in one statement.

// var Country,City,State;


// Qno2. Declare 5 legal & 5 illegal variable names.

// Legal Variables:-

// var gender;
// var _name;
// var $age;
// var $city_Country;
// var offer2023;

// Illegal Variables :-

// var %percent;
// var 2023Year;
// var return;
// var 23_age;
// var break;



// Qno3. Display this in your browser
//        a) A heading stating “Rules for naming JS variables”
//        b) Variable names can only contain ______, ______, ______ and ______.
//            For example $my_1stVariable
//        c) Variables must begin with a ______, ______ or _____. For example $name, _name or name
//        d) Variable names are case _________
//        e) Variable names should not be JS _________

//Part(a)
var heading="Rules for naming JS variables";
document.getElementById('head').innerHTML=(heading);


// Part(b)
var num=" numbers, ";
var $dollar=" $, ";
var _underscore=" _ ";
document.getElementById('line1')
.innerHTML=("Variable names can only contain "+num+ $dollar+" and "+_underscore +"For example $my_1stVariable");


// Part(c)

var letter="letter, ";
document.getElementById('line2')
.innerHTML=("Variable must begin with a "+letter+ $dollar+" and "+_underscore +". For example $name, _name or name");

// Part(d)

var fill="sensitive"
document.getElementById('line3').innerHTML=("Variable names are case "+fill);


// Part(e)

var key="keywords "
document.getElementById('line4').innerHTML=("Variable names should not be JS "+key);

