//  Chapter no 21 to 25 : String Methods  

// Qno1. Write a program that takes two user inputs for first and last name using 
// prompt and merge them in a new variable titled fullName. Greet the user 
// using his full name. 
 
// let firstName=prompt("Enter your first name");
// let lastName=prompt("Enter your last name");

// let fullName=firstName+" "+lastName;
// console.log(fullName);


// Qno2. Write a program to take a user input about his favorite mobile phone model. 
// Find and display the length of user input in your browser 
 
// let fvrtModel=prompt("Enter your Favorite Phone Model");

// console.log(fvrtModel.length);

let showData=document.getElementById("show-data");
// showData.innerHTML="My Favorite Phone Is : "+fvrtModel+" \n, And the Length of String is : "+fvrtModel.length;


// Qno3. Write a program to find the index of letter “n” in the word “Pakistani” 
// and display the result in your browser.

// let str="Pakistani";
// let display=str.indexOf("n");
// console.log(display)
// showData.innerHTML="The index of letter n is : "+display;


// Qno4. Write a program to find the last index of letter “l” in the word “Hello World”
//  and display the result in your browser.

// let str2="Hello World";
// let display=str2.lastIndexOf("l");
// console.log(display);


// Qno5. Write a program to find the character at 3rd index in the word “Pakistani” 
// and display the result in your browser. 

// let str3="Pakistani";
// let display=str3.slice(3,4); // it's a 1st method
// let display2=str3.charAt(3);  // It is the another way
// console.log(display);
// console.log("Other way : "+display2);


// Qno7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” 
// and display the result in your browser. 

// let str4="Hyderabad";
// let display=str4.slice(5,str4.length);
// console.log(display)
// console.log("Islam"+display)

// let display2=str4.replace("Hyder","Islam");  // Prebuild function
// console.log("Another way :"+display2)  


// Qno8. Write a program to replace all occurrences of “and” in the string with “&” 
// and display the result in your browser. var message = “Ali and Sami are best 
// friends. They play cricket and football together.”; 

// let str5="Ali and Sami are best friends. They play cricket and football together";
// str5=str5.replace(/and/g,"&");
// console.log(str5);


// Qno9. Write a program that converts a string “472” to a number 472. Display the 
// values & types in your browser.

// let str6="472";
// console.log(str6+" "+typeof(str6));

// console.log(str6+" "+typeof parseInt(str6));  // convert str to int


// Qno10. Write a program that takes user input. Convert and show the input in 
// capital letters. 

// let inpStr=prompt("Enter your name");
// console.log(inpStr.toUpperCase());



// Qno11. Write a program that takes user input. Convert and show the input in 
// title case. 

// let inpStr2=prompt("Enter your name");
// let tittleCase=inpStr2.charAt(0).toUpperCase()+inpStr2.slice(1,inpStr2.length);
// console.log(tittleCase);


// Qno12. Write a program that converts the variable num to string. var num = 35.36 ; 
// Remove the dot to display “3536” display in your browser.

// let num = 35.36;
// console.log(num+ " "+ typeof(num))
// let strNum=num.toString().split(".").join("");
// console.log(strNum+ " "+ typeof(strNum))


// ------------------------------------------------
// Incomplete
