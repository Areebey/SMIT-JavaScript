// Chapter no 9 - 11 : User Inputs and Condictional Statements (If Else)

// Qno1. Write a program to take “city” name as input from user. If user 
// enters “Karachi”, welcome the user like this: “Welcome to city of lights” 

// var city=prompt("Enter your City Name");

// if(city=="Karachi"||city=="karachi"||city=="KARACHI"){
//     console.log("Welcome to the City of Lights");
//     document.write("Welcome to the City of Lights");
// }
// else{
//     console.log("Welcome to "+city);
//     document.write("Welcome to "+city);
// }


// Qno2. Write a program to take “gender” as input from user. If the user is male, 
// give the message: Good Morning Sir. 
// If the user is female, give the message: Good Morning Ma’am. 


// var gender=prompt("Enter your Gender please!");

// if(gender=="male"||gender=="Male"||gender=="MALE"){
//     console.log("Good Morning Sir!");
//     document.write("Good Morning Sir!");
// }
// else if(gender=="female"||gender=="Female"||gender=="FEMALE"){
//     console.log("Good Morning Ma'am!");
//     document.write("Good Morning Ma'am!");
// }
// else{
//     console.log(" Please enter the correct gender!");
//     document.write(" Please enter the correct gender!");
// }



// Qno3. Write a program to take input color of road traffic signal from the user 
// & show the message according to this table: 

// var trafficSignal=prompt("Enter the Color of Signal ")

// if(trafficSignal=="Red"|| trafficSignal=="red" || trafficSignal=="RED"){
//     console.log("Must STop!")
//     document.write("Must STop!")
// }
// else if(trafficSignal=="Yellow" || trafficSignal=="yellow" || trafficSignal=="YELLOW"){
//     console.log("Ready to move!")
//     document.write("Ready to move!")
// }
// else if(trafficSignal=="Green" || trafficSignal=="green" || trafficSignal=="GREEN"){
//     console.log("Move now!")
//     document.write("Move now!")
// }else {
//     console.log(" Please enter the correct color ")
//     document.write(" Please enter the correct color ")
// }



// Qno4. Write a program to take input remaining fuel in car (in litres) from user. 
// If the current fuel is less than 0.25litres, show the message 
// “Please refill the fuel in your car” 


// var fuel=prompt("Please Enter the Remaining Car Fuel");

// if(fuel<=0.25){
//     console.log("Please Refill the Fuel in your Car")
//     alert("Please Refill the Fuel in your Car")
// }
// else if(fuel>0.25){
//     console.log("Enjoy The Drive!")
//     alert("Enjoy The Drive! :)")
// }else{
//     console.log("Enter the fuel in litres eg:2.5")
// }


// Qno5. Run this script, & check whether alert message would be displayed or not. 
// Record the outputs. 
// a. var a = 4; if (++a === 5){ alert("given condition for variable a is true"); } 
// b. var b = 82; if (b++ === 83){ alert("given condition for variable b is true"); } 
// c. var c = 12; if (c++ === 13){ alert("condition 1 is true"); }
//  if (c === 13){ alert("condition 2 is true"); } if (++c < 14){ alert("condition 3 is true"); } if(c === 14){ alert("condition 4 is true"); } 
// d. var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost;
//  if (totalCost === laborCost + materialCost){ alert("The cost equals"); } 
// e. if (true){ alert("True"); } if (false){ alert("False"); } 
// f. if("car" < "cat"){ alert("car is smaller than cat"); } 


// //  Qno5 Part (a)
// var a = 4; 
// if (++a === 5 ){
//      alert("given condition for variable a is true");
//     }

// var b = 82; 
// if (b++ === 83){ 
//     alert("given condition for variable b is true"); 
// } 

// var c = 12; 
// if (c++ === 13){ 
//     alert("condition 1 is true");
//  }
//  if (c === 13){ 
//     alert("condition 2 is true"); 
// } 
// if (++c < 14){ 
//     alert("condition 3 is true"); 
// } 
// if(c === 14){ 
//     alert("condition 4 is true");
// } 

// var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost;
//  if (totalCost === laborCost + materialCost){ 
//     alert("The cost equals"); 
// };

// if (true){ 
//     alert("True");
//  } if (false){ 
//     alert("False"); 
// } 

// if("car" < "cat"){ 
//     alert("car is smaller than cat");
//  } 


// Qno6. Write a program to take input the marks obtained in three subjects 
// & total marks. Compute & show the resulting percentage on your page. 
// Take percentage & compute grade as per following table: 


// var sub1=prompt("Enter the 1st subject name");
// var sub2=prompt("Enter the 2nd subject name");
// var sub3=prompt("Enter the 3rd subject name");

//  var total_sub1=100;
//  var total_sub2=100;
//  var total_sub3=100;
// var total_subs=total_sub1+total_sub2+total_sub3;
// console.log(" Total Subjects Marks "+total_subs)

// var obtMarks_sub1=prompt("Enter the "+sub1+" Obtained Marks please");
// var obtMarks_sub2=prompt("Enter the "+sub2+" Obtained Marks please");
// var obtMarks_sub3=prompt("Enter the "+sub3+" Obtained Marks please");

// var obtainedTotal_Marks=parseInt(obtMarks_sub1)+parseInt(obtMarks_sub2)+parseInt(obtMarks_sub3);
// console.log(" Total Obtained Marks "+obtainedTotal_Marks);
// document.write(" Total Obtained Marks "+obtainedTotal_Marks);

// var percentage =(obtainedTotal_Marks/total_subs)*100;
// console.log(" Your Percentage is "+percentage.toFixed(2)+"% ");
// document.write(" Your Percentage is "+percentage.toFixed(2)+"% ");

// if(percentage>=80){
//     console.log(" Greade : A-one");
//     document.write(" Greade : A-one");
//     console.log(" Excellent performance");
//     document.write(" Excellent performance");
// }
// else if(percentage>=70){
//     console.log(" Grade : A");
//     document.write(" Grade : A");
//     console.log(" Good performed");
//     document.write(" Good performed");
// }
// else if(percentage>=60){
//     console.log(" Grade : B");
//     document.write(" Grade : B");
//     console.log(" You need to Work Hard");
//     document.write(" You need to Work Hard");
// }
// else{
//     console.log(" Grade : Fail"); 
//     document.write(" Grade : Fail");
//     console.log("Sorry Try next year again");
//     document.write("Sorry Try next year again");
// }


// Qno7. Guess game: Store a secret number 
// (ranging from 1 to 10) in a variable. Prompt user to guess the secret number. 
// a. If user guesses the same number, show “Bingo! Correct answer”. 
// b. If the guessed number +1 is the secret number, 
// show “Close enough to the correct answer”.


// var num=4;
// var guessNum=prompt("Guess the Number");

// if(guessNum==num){
//     console.log("Bingo! Correct answer");
//     alert("Bingo! Correct answer");
// }
// else if(guessNum==num+1 || guessNum==num-1){
//     console.log("Close enough to the correct answer");
//     alert("Close enough to the correct answer");
// }
// else{
//     console.log("You Lose :( Try Again!");
//     alert("You Lose :( Try Again!");
// }


// Qno8. Write a program to check whether the given number is divisible by 3. 
// Show the message to the user if the number is divisible by 3. 


// var num=prompt("Enter the Number");

// if(num%3==0){
//     console.log("Yes, The number you Entered is Divisible bt 3 ^^");
//     alert("Yes, The number you Entered is Divisible bt 3 ^^");
// }
// else{
//     console.log("Sorry, It's not divisible by 3");
//     alert("Sorry, It's not divisible by 3");
// }



// Qno9. Write a program that checks whether the given input is an 
// even number or an odd number.

// var num=prompt("Enter the Number");

// if(num%2==0){
//     console.log("It's an Even Number ^^");
//     alert("It's an Even Number ^^");
// }
// else{
//     console.log("It's an Odd Number :)");
//     alert("It's an Odd Number :)");
// }


// Qno10. Write a program that takes temperature as 
// input and shows a message based on following criteria 
// a. T > 40 then “It is too hot outside.” 
// b. T > 30 then “The Weather today is Normal.” 
// c. T > 20 then “Today’s Weather is cool.” 
// d. T > 10 then “OMG! Today’s weather is so Cool.” 


// var temp=prompt("Enter the Temperature (^^)");

// if(temp>40){
//     console.log(" It is too hot outside. ");
//     alert(" It is too hot outside. ");
// }
// else if(temp>30){
//     console.log(" The Weather today is Normal. ");
//     alert(" The Weather today is Normal. ");
// }
// else if(temp>20){
//     console.log(" Today’s Weather is cool. ");
//     alert(" Today’s Weather is cool. ");
// }
// else if(temp>10){
//     console.log(" OMG! Today’s weather is so Cool. ");
//     alert(" OMG! Today’s weather is so Cool. ");
// }
// else{
//     console.log("Enter the Temperature in Numbers please X")
//     alert("Enter the Temperature in Numbers please X")
// }


// Qno11. Write a program to create a calculator for 
// +,-,*, / & % using if statements. 
// Take the following input: 
// a. First number 
// b. Second number 
// c. Operation (+, -, *, /, %) 
// Compute & show the calculated result to user. 


var num1=prompt("Enter the 1st number");
var num2=prompt("Enter the 2nd number");

var add=num1+num2;
var subtract=num1-num2;
var multiply=num1*num2;
var divide=num1/num2;


