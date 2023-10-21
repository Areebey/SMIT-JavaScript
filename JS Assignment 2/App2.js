// Assignment no 2

// ----------------------------------------------------------------------------
// Chapter no 5 : Math's Expressions
// ------------------------------------------------------------------------------


// Qno1. Write a program that take two numbers & add them in a new variable. 
// Show the result in your browser.  
 
// var a=10;
// var b=12;
// var add=a+b;

// document.write("The result of add "+a+" and "+b+ " is = "+add);

// // Qno2. Repeat task1 for subtraction, multiplication, division & modulus. 

// // For Subtraction
// var subtract=a-b;
// document.write("The result of subtract "+a+" and "+b+ " is = "+subtract);

// // For Multiplication
// var multiply=a*b;
// document.write("The result of multiply "+a+" and "+b+ " is = "+multiply);

// // For Division
// var divide=a/b;
// document.write("The result of division "+a+" and "+b+ " is = "+divide);


// Qno3. Do the following using JS Mathematic Expressions 
// a. Declare a variable. 
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”. 
// c. Initialize the variable with some number. 
// d. Show the value of variable in your browser like “Initial value: 5”. 
// e. Increment the variable. 
// f. Show the value of variable in your browser like “Value after increment is: 6”. 
// g. Add 7 to the variable. 
// h. Show the value of variable in your browser like “Value after addition is: 13”. 
// i. Decrement the variable. 
// j. Show the value of variable in your browser like “Value after decrement is: 12”. 
// k. Show the remainder after dividing the variable’s value by 3.  
// l. Output : “The remainder is : 0”. 

// Q3-a.

// var name;

// // Q3-b.
// document.write(" Value after variable declaration is "+name.value);

// // Q3-c.
// var age=20;

// // Q3-d.
// document.write(" Initial value is "+age);

// // Q3-e.
//   age++;

// // Q3-f.
// document.write(" Value after increment is: "+age);

// // Q3-g.
// age=age+7;

// // Q3-h.
// document.write(" Value after addition is: "+age);

// // Q3-i.
// age--;

// // Q3-j.
// document.write(" Value after decrement is: "+age);

// // Q3-k.
// age=age%3;

// // Q3-l.
// document.write(" The reminder is: "+age);


// Qno4. Cost of one movie ticket is 600 PKR. 
// Write a script to store ticket price in a variable & calculate the 
// cost of buying 5 tickets to a movie. Example output: 

// var eachCost=600;
// var total_tickets=5;

// var tickets=eachCost*total_tickets;

// document.write("Total cost to buy "+total_tickets+" tickets to a movie is "+tickets+" PKR");


// Qno5. Write a script to display multiplication table of any number in your 
// browser. E.g 

// var num=4;
// for(let i=0;i<=10;i++){
//     document.write(num+" x "+i+" = "+num*i);
//     console.log(num+" x "+i+" = "+num*i);
// }

// Qno6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. 
// a.  Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”. 
// c. Now store a Fahrenheit temperature into a variable. 
// d. Convert it to Celsius & output “NNoF is NNoC.

// var temp=70;

// var celsius=(temp-32)*5/9;
// var fahrenheit=(temp*9/5)+32;

// document.write(" The Temperate in Celsius "+temp+"C is Converted into Fahrenheit is "+fahrenheit+"F")
// document.write(" The Temperate in Fahrenheit "+temp+"F is Converted into Celsius is "+celsius+"C")


// Qno7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. 
// Store the following in variables 
// a. Price of item 1 
// b. Price of item 2 
// c. Ordered quantity of item 1 
// d. Ordered Quantity of item 2 
// e. Shipping charges 
// Compute the total cost & show the receipt in your browser

// var item1=100;
// var item2=250;

// var quantityItem1=5;
// var quantityItem2=2;

// var shipingCharges=200;

// // Show Receipt
// document.write("Price Of Item1 is "+item1);
// document.write("Quantity Of Item1 is "+quantityItem1);
// document.write("Price Of Item2 is "+item2);
// document.write("Quantity Of Item2 is "+quantityItem2);
// document.write("YOur Shiping Charges is "+shipingCharges);

// var totalcost_item1=item1*quantityItem1;
// var totalcost_item2=item2*quantityItem2;
// var totalSum=totalcost_item1+ totalcost_item2+ shipingCharges;
// console.log(totalSum)
// document.write(" your Total cost is "+totalSum);


// Qno8. Store total marks & marks obtained by a student in 2 variables. 
// Compute the percentage & show the result in your browser 

// var totalMarks=850;
// var obtainedMarks=720;

// var percentage=(obtainedMarks/totalMarks)*100;

// document.write("Your Percetage is "+percentage);


// Qno9. Assume we have 10 US dollars & 25 Saudi Riyals. 
// Write a script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 
//     Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee).

// var USD=104.80;
// var Riyal=28;

// var PKR=USD*10+Riyal*25;

// document.write(" One PKR in USD is "+USD+"$"+" And One PKR in Saudi Riyal is "+Riyal+"SR");

// document.write(" Total currency in PKR is "+PKR+"RS");



// Qno10. Write a program to initialize a variable with some number and do 
// arithmetic in following sequence: 
// a. Add 5 
// b. Multiply by 10 
// c. Divide the result by 2 Perform all calculations in a single expression 
 
// var num=10;

// var calculate=(num+5)*10;
// var divide=calculate/2;

// document.write("The result of expression is "+divide);


// Qno11. The Age Calculator: Forgot how old someone is? Calculate it! 
// a. Store the current year in a variable. 
// b. Store their birth year in a variable. 
// c. Calculate their 2 possible ages based on the stored values. 
// Output them to the screen like so: “They are either NN or NN years old”. 
 
// var currentYear=2023;
// var birthYear=2003;

// var age=currentYear-birthYear;

// document.write(" Your DOB "+birthYear);
// document.write(" Current Year "+currentYear);
// document.write(" You're currently "+age+" Years old ");

// Qno12. The Geometrizer: Calculate properties of a circle. 
// a. Store a radius into a variable. 
// b. Calculate the circumference based on the radius, and output 
// “The circumference is NN”. 
// (Hint : Circumference of a circle = 2 π r , π = 3.142) 
// Calculate the area based on the radius, and output “The  area is NN”. 
// (Hint : Area of a circle = π r2, π = 3.142) 


// var radius=20;
// var pi=3.142;
// var circumference_circle=2*pi*radius;

// console.log("The radius of the circle is "+radius)
// console.log("The Circumference of the Circle based on the radius is "+circumference_circle);

// var area=pi*radius*radius;

// console.log("The are of the circle is "+area);



// Qno13. The Lifetime Supply Calculator: Ever wonder how much a
//  “lifetime supply” of your favorite snack is? Wonder no more. 
//  a. Store your favorite snack into a variable 
//  b. Store your current age into a variable. 
//  c. Store a maximum age into a variable. 
//  d. Store an estimated amount per day (as a number). 
//  e. Calculate how many would you eat total for the rest of your life. 
// Output the result to the screen like so: “You will need NNNN to last 
// you until the ripe old age of NN”. 


// var fvrt_snacks="pringles";
// var age=20;
// var estimated_age=80;
// var quantity_of_snacks_daily=3;

// var total_amount=quantity_of_snacks_daily*estimated_age-age*quantity_of_snacks_daily;


// console.log("Your Favorite Snacks is "+fvrt_snacks);
// console.log("Your Current Age is "+age);
// console.log("Your Estimated Age is "+estimated_age)
// console.log("You will need "+total_amount+" to last you until the ripe old age of "+estimated_age);

// -------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// Chapter no 6 to 9 : Maths Expressions
// ----------------------------------------------------------------------------------


// Qno1. Write a program to take a number in a variable, do the required 
// arithmetic to display the following result in your browser:  
 
// var num=20;

// console.log("The initial value of num is "+num);

// ++num;
// console.log("The value of ++num is "+num);


// console.log("The value of num++ before the execution is "+num);
// num++;
// console.log("The value of num++ is "+num);


// --num;
// console.log("The value of --num is "+num);


// num--;
// console.log("The value of num-- is "+num);

// console.log(" Here we done all the increment and decrement approaches")


// Qno2. What will be the output in variables a, b & result after execution of 
// the following script: var a = 2, b = 1; var result = --a - --b + ++b + b--; 
// Explain the output at each stage:
//  --a; --a - --b; --a - --b + ++b; --a - --b + ++b + b--; 

// var a=2;
// var b=1;
// // var result=--a - --b + ++b + b--;

// console.log("Initai value of a is "+a);
// console.log("Decrement value of --a is "+--a);

// //NaN Because both are 0 a decrment one previous step and b decrements here 
// console.log("Decrement value of --a and --b and subtract each other is "+--a - --b);

// // now b is zero before but in this step it is increase to 1 
// var step4=--a - --b + ++b;
// console.log("Decrement value of --a and --b and subtract each other and add ++b is "+step4);

// // and now b decrement again
// var step5=--a - --b + ++b + b--;
// console.log("Decrement value of --a and --b and subtract each other and add ++b and b decrement again like this + b-- is "+step4);


// Qno3. Write a program that takes input a name from user & greet the user. 

// var name=prompt("Enter your Name please!");
// document.write("Hey, How're You "+name);


// Qno5. Write a program to take input a number from user & display it’s 
// multiplication table on your browser. If user does not enter a new number, 
// multiplication table of 5 should be displayed by default


// var num=prompt("Enter the number please!");

// if(isNaN(num)){
//     alert("Input in numbers");
//     var number=5;
//     for(let i=0;i<=10;i++){
//         console.log(number+" * "+i+" = "+number*i);
//         document.write(number+" * "+i+" = "+number*i);
//     }
// }
// else{
//     for(let i=0;i<=10;i++){
//     console.log(num+" * "+i+" = "+num*i);
//     document.write(num+" * "+i+" = "+num*i);
// }
// }


// Qno6. Take 
// a)Take three subjects name from user and store them in 3 different variables. 
// b) Total marks for each subject is 100, store it in another variable. 
// c) Take obtained marks for first subject from user and stored it in different variable. 
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table) 


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
// console.log(" Your Percentage is "+percentage+"%");
// document.write(" Your Percentage is "+percentage+"%");


// ----------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------
// Chapter no 9 - 11 : User Inputs and Condictional Statements (If Else)
// ---------------------------------------------------------------------------------


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
var operator=prompt("Enter the mathamatical operator here eg: +,-,*,/and %")

var add=parseInt(num1)+parseInt(num2);
var subtract=num1-num2;
var multiply=num1*num2;
var divide=num1/num2;
var reminder=num1%num2;

if(operator=="+"|| operator=="add"){
    console.log("The Addition result is "+add);
    alert("The Addition result is "+add);
}
else if(operator=="-"|| operator=="subtract"){
    console.log("The Subtraction result is "+subtract);
    alert("The Subtraction result is "+subtract);
}
else if(operator=="*"|| operator=="multiply"){
    console.log("The Multiplication result is "+multiply);
    alert("The Multiplication result is "+multiply);
}
else if(operator=="/"|| operator=="divide"){
    console.log("The Division result is "+divide);
    alert("The Division result is "+divide);
}
else if(operator=="%"|| operator=="reminder"){
    console.log("The reminder result is "+reminder);
    alert("The reminder result is "+reminder);
}
else {
    console.log("Please enter the Correct Operator")
    alert("Please enter the Correct Operator")
}

// Completed
// ----------------------x-------------------------x------------------x--------------
