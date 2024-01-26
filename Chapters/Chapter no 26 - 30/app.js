//  Chapter no 26 to 30: Maths Methods

// Qno1. Write a program that takes a positive integer from user & display the 
// following in your browser. 
// a. number 
// b. round off value of the number 
// c. floor value of the number 
// d. ceil value of the number 


// let inpInt= +prompt("Enter the Interger");

// console.log("User Input is :"+inpInt+" "+typeof(inpInt))

// let a=Math.round(inpInt);
// console.log("Round value of : "+a);

// let b=Math.floor(inpInt);  //works on min
// console.log("Floor value of : "+b); 

// let c=Math.ceil(inpInt);  // works on maxx
// console.log("Ceil value of : "+c);  


// Qno2. Write a program that takes a negative floating point number from user & 
// display the following in your browser. 
// a. number 
// b. round off value of the number 
// c. floor value of the number 
// d. ceil value of the number 


// Answer is above


// Qno3. Write a program that displays the absolute value of a number. 
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5. 

// let num =-4;
// console.log("Current Value : "+num);

// let absoluteVal=Math.abs(num);
// console.log("Absolute Value : "+ absoluteVal);



// Qno4. Write a program that simulates a dice using random() method of JS Math class. 
// Display the value of dice in your browser.

// let bigDecimal=Math.random();
// let dice=(bigDecimal*6)+1;
// console.log(Math.floor(dice));


// Qno5. Write a program that simulates a coin toss using random() method of JS Math class. 
// Display the value of coin in your browser.


// let coinDecimal=Math.random();
// let coinVal=(coinDecimal*2)+1;
// let coin=Math.floor(coinVal)
// console.log(coin);
// if(coin==1){
//     console.log("Heads")
// }
// else if(coin==2){
//     console.log("Tails")
// }else{
//     console.log("Wrong number")
// }


// 6. Write a program that shows a random number between 1 and 100 in your 
// browser. 

// let randomVal=Math.random();
// let setRandom=(randomVal*100)+1;
// console.log(Math.floor(setRandom));


// 7. Write a program that asks the user about his weight. Parse the user input 
// and display his weight in your browser. Possible user inputs can be: 
// a. 50 
// b. 50kgs 
// c. 50.2kgs 
// d. 50.2kilograms.


// let weight=prompt("Enter Your Weight");
// console.log(weight)


// 8. Write a program that stores a random secret number from 1 to 10 in a 
// variable. Ask the user to input a number between 1 and 10. 
// If the user input equals the secret number, congratulate the user. 

// let randomNum=(Math.random()*10)+1;
// let finalNum=Math.floor(randomNum);
// console.log(finalNum);

// let inpUser=+prompt("Enter a Number between 1 to 10");
// if(inpUser===finalNum){
//     console.log("Congrats You Won")
// }else{
//     console.log("Try Again!")
// }
