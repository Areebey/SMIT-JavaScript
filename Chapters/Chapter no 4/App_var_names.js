// Chapter no 4: Variable Names: Legal & Illegal in JavaScript.

// Qno1. Declare 3 variables in one statement.

// var Country,City,State;


// Qno2. Declare 5 legal & 5 illegal variable names.

// Legal Variables:-

// var gender;
// var _name;
// var $age;
// var $city_Country;
// var offer2023;

// Illegal Variables :-

// var %percent;
// var 2023Year;
// var return;
// var 23_age;
// var break;



// Qno3. Display this in your browser
//        a) A heading stating “Rules for naming JS variables”
//        b) Variable names can only contain ______, ______, ______ and ______.
//            For example $my_1stVariable
//        c) Variables must begin with a ______, ______ or _____. For example $name, _name or name
//        d) Variable names are case _________
//        e) Variable names should not be JS _________

//Part(a)
var heading="Rules for naming JS variables";
document.getElementById('head').innerHTML=(heading);


// Part(b)
var num=" numbers, ";
var $dollar=" $, ";
var _underscore=" _ ";
document.getElementById('line1')
.innerHTML=("Variable names can only contain "+num+ $dollar+" and "+_underscore +"For example $my_1stVariable");


// Part(c)

var letter="letter, ";
document.getElementById('line2')
.innerHTML=("Variable must begin with a "+letter+ $dollar+" and "+_underscore +". For example $name, _name or name");

// Part(d)

var fill="sensitive"
document.getElementById('line3').innerHTML=("Variable names are case "+fill);


// Part(e)

var key="keywords "
document.getElementById('line4').innerHTML=("Variable names should not be JS "+key);

