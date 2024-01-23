// Chapter no 15-17: Arrays

// Qno1. Declare an empty array using JS literal notation to store
// student names in future.

// let arr={};

// Qno2. Declare an empty array using JS object notation to store
// student names in future.

// let arr2 = new Array();

// Qno3. Declare and initialize a strings array.

let str = new String ();

console.log(str)

// Qno4. Declare and initialize a numbers array.

let num = new Number();

// Qno5. Declare and initialize a boolean array.

let bool = new Boolean();

// Qno6. Declare and initialize a mixed array.

let arr=new Array ();

// Qno7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, 
//       HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like.

let edu=["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","Phd"];

console.log("1. "+edu[0]);
console.log("2. "+edu[1]);
console.log("3. "+edu[2]);
console.log("4. "+edu[3]);
console.log("5. "+edu[4]);
console.log("6. "+edu[5]);
console.log("7. "+edu[6]);
console.log("8. "+edu[7]);


// Qno8. Write a program to store 3 student names in an array.Take another array to store score of these 
//        three students. Assume that total marks are 500 for each student, display the scores & percentages 
//        of students like.

let names=["Areeb","Sadiq","Farhan"];

let score=[400,450,460];

let total_score=500;

console.log("Score of "+names[0]+" is "+score[0]+". Percentage is : "+score[0]/total_score*100+"%");
console.log("Score of "+names[1]+" is "+score[1]+". Percentage is : "+score[1]/total_score*100+"%");
console.log("Score of "+names[2]+" is "+score[2]+". Percentage is : "+score[2]/total_score*100+"%");


// 9. Initialize an array with color names. Display the array elements in your browser.

// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.
// Display the updated array in your browser.

// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. 
//    Display the updated array in your browser.

// c. Add two more color to the beginning of the array. Display the updated array in your browser.

// d. Delete the first color in the array. Display the updated array in your browser.

// e. Delete the last color in the array. Display the updated array in your browser.

// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired 
//    position/index. . Display the updated array in your browser.

// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. 
//    Then remove the same number of color(s) from user-defined position/index. . Display the updated array in 
//    your browser.




// Qno10. Write a program to store student scores in an array & sort the array in ascending order using 
// Array’s sort method.

let numb=[100,20,50,60,80,10];
 
let sorted=numb.sort((a,b) => a-b);

console.log(sorted);


// Qno11. Write a program to initialize an array with city names. Copy 3 array elements from cities array 
//        to selectedCities array.

let cities=["Karachi","Lahore","Islamabad","Quetta","Peshawar"];

console.log(cities);

cities.pop();
// console.log(cities);

cities.shift();
// console.log(cities);

cities.splice(0,1);
console.log("Selected Cities list are : "+cities);


// Qno12. Write a program to create a single string from the below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];  (Use array’s join method)

let str_arr = ["This","Is","My","Cat."];

let =joined_arr=str_arr.join(" ")
console.log(joined_arr);


// Qno13. Create a new array. Store values one by one in such a way that you can access the values in the 
// order in which they were stored. (FIFO-First In First Out).

let comp=[];

comp.push("Keyboard");
comp.push("Mouse");
comp.push("Printer");
comp.push("Monitor");
comp.push("Speaker");

console.log("Devices "+comp);

console.log("Out : "+comp.shift());
console.log("Out : "+comp.shift());
console.log("Out : "+comp.shift());
console.log("Out : "+comp.shift());
console.log("Out : "+comp.shift());

// Qno14. Create a new array. Store values one by one in such a way that you can access the values in 
//         reverse order. (Last In First Out).

let devices=[];

devices.push("Keyboard");
devices.push("Mouse");
devices.push("Printer");
devices.push("Monitor");
devices.push("Speaker");

console.log("Devices "+devices);

console.log("Out : "+devices.pop());
console.log("Out : "+devices.pop());
console.log("Out : "+devices.pop());
console.log("Out : "+devices.pop());
console.log("Out : "+devices.pop());

// Qno15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in 
//        an array. Display the following dropdown/select menu in your browser using document.write() method.


let phones=["Apple  ","Samsung  ","Motrola  ","Nokia  ","Sony  ","Haier "];

document.write("<center> "+phones[0]);
document.write("<center> "+phones[1]);
document.write("<center> "+phones[2]);
document.write("<center> "+phones[3]);
document.write("<center> "+phones[4]);
document.write("<center> "+phones[5]);

