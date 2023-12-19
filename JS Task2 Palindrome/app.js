// Task 2: Palindrome 

let input=prompt("Enter the word");



if(input==0){
    alert("Please filled the input field");
    input=prompt("Enter the word");
}

reverse_str=input.split("").reverse().join("");

if(input===reverse_str){
    alert("The Word is Palindrome 🙌🏻")
}
else{
    alert("Oops, This word isn't Palindrome 👎")
}
console.log(input);
console.log(reverse_str);