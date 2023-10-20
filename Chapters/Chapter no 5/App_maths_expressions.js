// Chapter no 5 : Math's Expressions

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


var fvrt_snacks="pringles";
var age=20;
var estimated_age=80;
var quantity_of_snacks_daily=3;

var total_amount=quantity_of_snacks_daily*estimated_age-age*quantity_of_snacks_daily;


console.log("Your Favorite Snacks is "+fvrt_snacks);
console.log("Your Current Age is "+age);
console.log("Your Estimated Age is "+estimated_age)
console.log("You will need "+total_amount+" to last you until the ripe old age of "+estimated_age);
