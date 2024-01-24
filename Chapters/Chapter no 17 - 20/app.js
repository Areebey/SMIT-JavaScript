// Chapter no 17 to 20 : Arrays and loops in javaScript

// Qno1. Declare and initialize an empty multidimensional array. (Array of arrays)

// let arr=[];
// let row = 3;
// let col = 3;
// let h=0;

// for(let i=0;i<row;i++){
//     arr[i]=[]
//     for(j=0;j<col;j++){
//         arr[i][j]=h++;
//     }
// }
// console.log(arr);


// Qno 2. Declare and initialize a multidimensional array representing 
// the following matrix:

// let arr2=[];
// let row=3;
// let col=4;
// let h=0;
// for(let i=0;i<row;i++){
//     arr2[i]=[];
//     for(j=0;j<col;j++){
//         arr2[i][j]=i+j ;
//     }
// }
// console.log(arr2);

// Qno3. Write a program to print numeric counting from 1 to 10.  

// for(let i=1;i<=10;i++){
//     console.log(i)
// }


// Qno4.  Write a program to print multiplication table of any number using 
// for loop. Table number & length should be taken as an input from user.

// let num=prompt("Enter the table number");
// let length=prompt("Enter the length of table please!")

// for(let i=1;i<=length;i++){
//     console.log(num+"x"+i+"="+i*num)
// }

// Qno5. Write a program to print items of the following array using for loop: 
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”] 

// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for(let i=0;i<=fruits.length-1;i++){
//     console.log("Element at index of "+i+" = "+fruits[i])
// }


// 6. Generate the following series in your browser. See example output. 
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k 

// a...
// let simpleCounting=15;
// for(let i=1;i<=simpleCounting;i++){
//     console.log(i)
// }

// b...
// let reverseCount=0;
// for(let i=10;i>reverseCount;i--){
//     console.log(i)
// }

// c...
// let even=20;
// for(let i=0;i<=20;i+=2){
//     console.log(i)
// }

// // d...
// let odd=20;
// for(let i=0;i<20;i++){
//     i=i+1;
//     console.log(i)
// }

// e...
// let even=20;
// for(let i=2;i<=20;i+=2){
//     console.log(i+"K")
// }


// Qno7. You have an array 
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] 
// Write a program to enable “search by user input” in an array. After searching, 
// prompt the user whether the given item is found in the list or not.

// let Items = ["cake", "apple pie", "cookie", "chips", "patties"] 

// let search=prompt("Enter the Item name")

// for(let i=0;i<=Items.length-1;i++){
//     // console.log(Items[i])
//     if(search==Items[i]){
//         console.log(i);
//     }
//     else{
//         console.log("SOry we can't have it.")
//     }
// }

// Qno8. Write a program to identify the largest number in the given array. 
// A = [24, 53, 78, 91, 12]

let arr = [24, 53, 78, 91, 12];
console.log(arr)
let largest=arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){
        largest=arr[i]
    }
}
console.log("Largest number is "+largest);


// Qno9. Write a program to identify the smallest number in the given array. 
// A = [24, 53, 78, 91, 12] 

let arr2= [24, 53, 78, 91, 12] 
console.log(arr2)

let smallest=arr2[0];
for(let i=0;i<arr2.length;i++){
    if(arr2[i]<smallest){
        smallest=arr2[i]
    }
}
console.log("Smallest number is "+smallest)