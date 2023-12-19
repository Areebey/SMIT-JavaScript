// Here we can make find out the even and odd numbers from an array

var numberArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

let even=[];
let odd=[];

for(let i=1;i<=numberArray.length;i++){
    if(i%2==0){
        // console.log(i)
        even.push(i);
        // console.log(even)
    }
    else if(i%2!=0){
        // console.log(i)
        odd.push(i);
        // console.log(odd)
}else{
    console.log("Not a number")
}
}
// console.log("Even numbers are : "+even)
// console.log("Odd numbers are : "+odd)

// for whole array
let array=document.getElementById("array-num");
array.textContent="Whole Array is :"+numberArray;

// for even numbers
let evenNum=document.getElementById("even-num");
evenNum.textContent="Even numers :"+even;

// for odd number 
let oddNum=document.getElementById("odd-num");
oddNum.textContent="Odd numers :"+odd;

