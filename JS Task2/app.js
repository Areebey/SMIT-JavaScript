// Task 2: Palindrome 

let input=prompt("Enter the word");

reverse_str=input.split("").reverse().join("");
// reverse_str=input.reverse();

console.log(input);
console.log(reverse_str);

if(input===reverse_str){
    alert("The Word is Palindrome 🙌🏻")
}
else{
    alert("Oops, This word isn't Palindrome 👎")
}