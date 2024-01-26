// Chapter no 31 to 34: Date Methods

// Qno1. Write a program that displays current date and time in your browser. 

// let showDate=document.getElementById("date-method");
// showDate.innerHTML=new Date()


// Qno2. Write a program that alerts the current month in words. 
// For example December. 

// let date=new Date().getMonth();
// if(date==0){
//     console.log("January")
// }
// else if(date==1){
//     console.log("Febuarary")
// }
// else if(date==2){
//     console.log("March")
// }
// else if(date==3){
//     console.log("April")
// }
// else if(date==4){
//     console.log("May")
// }else{
//     console.log("Out of limit...")
// }
// console.log(date)



// Qno3. Write a program that alerts the first 3 letters of the current day, 
// for example if today is Sunday then alert will show Sun. 

// var currentDay = new Date();
// var b = currentDay.toString();
// var c = b.slice(0,3);
// document.write("Today is " + c);

// OR ------------

// let days=["Sun","Mon","Tue","Wed","Thurs","Fri","Sat"];
// let date2=new Date();
// let dateDay=date2.getDay();
// let toDay= days[dateDay];
// console.log("Today is "+toDay);



// Qno4. Write a program that displays a message “It’s Fun day” if its Saturday 
// or Sunday today. 

// let days=["Sun","Mon","Tue","Wed","Thurs","Fri","Sat"];
// let date2=new Date();
// let dateDay=date2.getDay();
// let toDay= days[dateDay];
// console.log(toDay)

// if(toDay=="Sun" || toDay=="Sat"){
//     console.log("It's Fun Day")
// }
// else{
//     console.log("Isn't fun Day")
// }



// Qno5. Write a program that shows the message “First fifteen days of the month” 
// if the date is less than 16th of the month else shows “Last days of the month”. 


// Qno6. Write a program that determines the minutes since midnight, Jan. 1, 1970 
// and assigns it to a variable that hasn't been declared beforehand. 
// Use any variable you like to represent the Date object. 


// let date= new Date();
// let minutes=date.getMinutes();
// let seconds=date.getMilliseconds();

// console.log(date);
// console.log(minutes);
// console.log(seconds);

// Qno7. Write a program that tests whether it's before noon and alert 
// “Its AM” else “its PM”. 


// Qno8. Write a program that creates a Date object for the last day of the last 
// month of 2020 and assigns it to variable named laterDate.


// Qno9. Create a date object of the starting date of this Ramadan and alert the 
// number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015 


// Qno10. Write a program that displays in your browser the seconds that elapsed 
// between the reference date and the beginning of 2015. 
