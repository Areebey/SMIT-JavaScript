// Chapter no 6 to 9 : Maths Expressions

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


