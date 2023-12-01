// Password Confirmation Program

let username=prompt("Enter your username");
let phone=prompt("Enter your phone no");
let email=prompt("Enter your email");
let password=prompt("Enter your password");
let confirm_password=prompt("Re-enter your Password");

if(username==0){
    alert("Please Enter the Username");
    username=prompt("Enter your username");
}
if(phone==0){
    alert("Please Filled the Phone no");
    phone=prompt("Enter your phone no");
}
if(email==0){
    alert("Please Filled the Email");
    username=prompt("Enter your email");
}
if(password==0){
    alert("Please Filled the Password");
    username=prompt("Enter your password");
}
if(confirm_password==0){
    alert("Please Filled the Correct Password");
    username=prompt("Re-enter your Password");
}

if(password===confirm_password){
    alert("Registered Successfully");
}
else{
    alert("Password doesn't match, Try Again!")
}

console.log(username);
console.log(phone);
console.log(email);
console.log(password);