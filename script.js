
// operators  + - * / % ++ -- ** =

// ==, !=, < , > , <=, >=, ===, !==

// AND &&,  OR ||, NOT !

// console.log("abdul" != "abdul");

var firstName = "Abdul";
var timeOfDay = "noon";
var a = 100;
var b = "100a";
var c = a*b;
var n = null;
// var c = false;
var d = false;
var firstName = prompt("Enter first name:");
var lastName = prompt("Enter last name:");
var s = ""  // falsy value
var r = "nhgfc"; //true
var g = 0; // falsy value    // 0, "", null, undefined, NaN, false   - falsy values

if (!firstName || !lastName){
    if(!firstName && !lastName){
        firstName = prompt("please enter first name:");
        lastName = prompt("please enter last name:");
    } else if(!lastName){
        lastName = prompt("please enter last name:")
    }else { 
        firstName = prompt("please enter first name:")
    }
} else {
    alert("full name is "+ firstName+ " "+ lastName);
};

// if (timeOfDay == "morning"){
//     console.log("Good Morning"+ ", "+ firstName+"!");
// } else if(timeOfDay == "evening"){
//     console.log("Good Evening, "+ firstName+"!");
// }else if(timeOfDay == "noon"){
//     console.log("Good noon, "+ firstName+"!");
// } else if(timeOfDay == "night"){
//     console.log("Good night, "+ firstName+"!");
// }
//  else{
//     console.log("Hello, "+ firstName+"!")
// }
