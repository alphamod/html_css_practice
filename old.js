
// var fruits = ["Apples", "Oranges", "Strawberry", 124, true, [23, 56, "mhcjdgf"]];
// console.log("before",fruits); // ["Apples", "Oranges", "Strawberry", 124, true, [23, 56, "mhcjdgf"]];
// // fruits.push("Monkey");
// var myVar = fruits.pop(); // fruits = ["Apples", "Oranges", "Strawberry", 124, true]; myVar = [23, 56, "mhcjdgf"]
// console.log("myvar ---> first pop",myVar); //  true
// myVar = fruits.pop(); // fruits = ["Apples", "Oranges", "Strawberry", 124] ; 
// console.log("myvar ---> second pop",myVar); //  true
// console.log("after",fruits); // ["Apples", "Oranges", "Strawberry", 124] ;
// console.log("last_item",myVar); //  true


var a = 5;
var b = 10;
var d = a;
d = 15;

// console.log(c);
// console.log(a);

var snacks = ["banana", "chips", "apples", 54, 8976, "apples", 645, "apples"];
var new_snacks = snacks; //mutable
var other = snacks.slice(); //immutable

var sub_array = snacks.slice(1,6);
console.log(sub_array)
// snacks.splice(2, 3)

// console.log("before unshift",snacks);
// var firstItem = snacks.unshift("oranges")
// console.log(snacks);
// console.log(firstItem)



// var indexOfApples = snacks.indexOf("apples");

// console.log("index", indexOfApples)
// console.log()
// arrayName.splice(index, no. of items to be removed, "new items to be added seperated by commas")

// var sub_snacks = snacks.slice(2,5);

// console.log(sub_snacks);


// // console.log("first other", other);
// other.pop();

// // console.log("other", other);


var userInput = ["{([[{}]])}"]
var balancer = 0; //-1
var inputArray = userInput[0].split("");

    for (i=0; i<inputArray.length; i++){
        if (inputArray[i] === "{" || inputArray[i] === "(" || inputArray[i]==="["){
            balancer++;
        } else {
            balancer--;
        }
    }
    if(balancer === 0){
        console.log("1");
    }else{
        console.log("0");
    };


    // ProFiLe
// 1
// 2

var userInput = ["PrOFiLe", "1", "2"]; 
//Profile

var strArray = userInput[0].split("");
// ["P", "r", "o", "F", "i", "L", "e"] 
var indextoStart = parseInt(userInput[2])-1;  // 3

var slicedArray = strArray.slice(indextoStart); // strArray.slice(3) ===> [ 'F', 'i', 'L', 'e' ] ===>  F --> f
var omittedArray = strArray.slice(0, indextoStart);// strArray.slice(0, 3) ===> ['P', 'r', 'o']

var convertedArray = [];
for(i=0; i<slicedArray.length; i++){
   if(userInput[1]=== "1"){
       convertedArray.push(slicedArray[i].toLowerCase()); // ['f', 'i', 'l', 'e']
   }else{
       convertedArray.push(slicedArray[i].toUpperCase());
   }
}

var finalOutput = omittedArray.concat(convertedArray).join("");

console.log({finalOutput});



// if (userInput[1]==="1"){
//     // convert into Uppercase;
// } else{
//     // convert in to lowercase
// }


// function fiveMultiplier(x) {
//   console.log("I have", x);
//   return x * 5;
// }

// fiveMultiplier("some value"); //

// callback is a function given as parameter to another function

function toComparePasswords(userNameFromUser, passwordFromUser, callback) {
    var dbResult = callback()
    var username = dbResult.username;
    var password = dbResult.password;
    
    if (userNameFromUser == username && passwordFromUser == password){
        console.log("Login success! Welcome",userNameFromUser,"!")
    }else{
        console.log("Wrong credentials, Login failed!!")
    }
}

function getPasswordFromDB() {
  // inside db
  var username = "syedsalman";
  var password = "12345";
  // =============db ends======

  var dbOutput = {
    "username": username,
    "password": password
  }

  return dbOutput;
}

toComparePasswords("syedsalman","12345",getPasswordFromDB)

// Callback

function login(username, password, comparingFunction) {
  
    setTimeout(function(){
      // ===========
     var dbCredentials = {
       username: "johndoe",
       password: "12345"
     }
     // ===========
     comparingFunction(username, password, dbCredentials)
    }, 2000);
   
   
   }
   
   var checkCredentails = function (username, password, dbCredentials){
     if (username === dbCredentials.username && password === dbCredentials.password){
       console.log("Login Success! Welcome User");
     }else{
       console.log("Wrong username or password. Try again!")
     }
   
     // === go and fetch other profile data from the DB;
     // ====send the info back to the user frontend.
   } 
   
   
   login("johndoe", "12345", checkCredentails);
   
   
  //  default param values

  function productOfFive(num = 0, num2 = 5){
    return num*num2;
  };
  
  
  console.log(productOfFive(5));


  // DOM

  function getUserInfo(){
    var responseFromBackend = {
      username: "syedsalman",
      name: "Syed Salman",
      profilePic: "https://cdn.dribbble.com/users/2878951/screenshots/14013747/media/603f0b853c409547dfa51cba996f375c.png?compress=1&resize=1600x1200&vertical=top",
    }
    
    document.getElementById("username").innerText=responseFromBackend.name;
    
    var img = document.querySelector("#profilePic");
    
    img.src = responseFromBackend.profilePic;
    document.querySelector("#loginBtn").style.display="none"
  }

  // DOM

  // DOM = Document Object Model

var employees = [
  {
  "userId":"rirani",
  "jobTitleName":"Developer",
  "firstName":"Romin",
  "lastName":"Irani",
  "preferredFullName":"Romin Irani",
  "employeeCode":"E1",
  "region":"CA",
  "phoneNumber":"408-1234567",
  "emailAddress":"romin.k.irani@gmail.com"
  },
  {
  "userId":"nirani",
  "jobTitleName":"Developer",
  "firstName":"Neil",
  "lastName":"Irani",
  "preferredFullName":"Neil Irani",
  "employeeCode":"E2",
  "region":"CA",
  "phoneNumber":"408-1111111",
  "emailAddress":"neilrirani@gmail.com"
  },
  {
  "userId":"thanks",
  "jobTitleName":"Program Directory",
  "firstName":"Tom",
  "lastName":"Hanks",
  "preferredFullName":"Tom Hanks",
  "employeeCode":"E3",
  "region":"CA",
  "phoneNumber":"408-2222222",
  "emailAddress":"tomhanks@gmail.com"
  }
]

var tbody = document.getElementById("tbody");

for (i=0; i<employees.length; i++){
  var tr = document.createElement('tr');
  var employeeCode = document.createElement('td')
  var jobTitle = document.createElement('td')
  var fullName = document.createElement('td')
  var email = document.createElement('td')
  var region = document.createElement('td')
  employeeCode.innerText = employees[i].employeeCode;
  jobTitle.innerText = employees[i].jobTitleName;
  fullName.innerText = employees[i].preferredFullName;
  email.innerText = employees[i].emailAddress;
  region.innerText = employees[i].region;
  tr.appendChild(employeeCode);
  tr.appendChild(jobTitle);
  tr.appendChild(fullName);
  tr.appendChild(email);
  tr.appendChild(region);
  tbody.appendChild(tr);
}

var firstTh = document.querySelector("#firstTh")
firstTh.style.border = "none"

function sample(){
  alert("i am clicked!!")
}


function handleSubmit(){
  var username = document.getElementById("username").value
  
  document.getElementById("formUsername").innerText = username;
}


// DOM events

function handleChange(event){
  console.log(event.target.value)

}

function handleEvent(event){
  console.log(event)

}

var handleEnterKey = function(event){
  console.log(event)
  if(event.key === "Enter"){
    alert("Enter is pressed!")
  }
}

document.getElementById('input').addEventListener("keydown", handleEnterKey)

function stopEvent(){
  document.removeEventListener("keydown",handleEnterKey);
}

// event bubbling

var handleBody = function(event){
  alert("event triggered - body");
  
}
var handleForm = function(event){
  alert("event triggered - form");
  
}

var handleButton = function(event){
  alert("event triggered - button");
  
}
var handleDiv = function(event){
  alert("event triggered - DIv");
  
}

document.getElementById('body').addEventListener("click", handleBody)
document.getElementById('form').addEventListener("click", handleForm)
document.getElementById('button').addEventListener("click", handleButton)
document.getElementById('formParent').addEventListener("click", handleDiv)


function stopEvent(){
  document.removeEventListener("keydown",handleEnterKey);
}

// API
// ================
// GET  -  it will bring data from the backend. //cache data
// POST - We will send data to backend.  // will not be cached
// PUT - Modify already existing data.
// DELETE - Deleting the data.

// vanilla js

var xhttp = new XMLHttpRequest();    //0
var date = new Date();
xhttp.onreadystatechange = function() {
        console.log(this.readyState);
    if (this.readyState == 4 && this.status == 200) {
       var response = xhttp.responseText;
    //    console.log(response)
    }
};
xhttp.open("GET", "https://api.github.com/users/453", true); 
xhttp.send();


// promise

var myPromise = new Promise(function(myResolve, myReject) {
  // "Producing Code" (May take some time)
  
    myResolve("resolved"); // when successful
    myReject({
      errType: "DB error",
      message: "Please check your query"
    });  // when error
  });
  
  // "Consuming Code" (Must wait for a fulfilled Promise)
  myPromise
  .then(function (data){
      console.log("data in .then is", data);
      return { message: data};
  })
  .then(function(result){
      console.log(result);
      return JSON.stringify(result);
  })
  .then(function(param){
      console.log("3rd then",param);
  })
  .catch(function(err){
      console.log("from .catch",err.message);
  });

// leetcode palindrome integer

try{
  var isPalindrome = function(x) { 
      var remainder = 0;
      var newNumber = x;
      while(newNumber>0){ // (0>0) ----> false
          var tempRem = newNumber%10;  // tempRem - 1
          newNumber = newNumber - tempRem; // 1 - 1 = 0
          newNumber/=10; // newnumber = 0/10  , 0
          remainder = (remainder*10)+tempRem; // (32*10)+1 , remainder = 321
          console.log({remainder, newNumber});
      }
      if (remainder === x){ 
          return true;
      }else{
          return false;
      }
    };

    console.log(isPalindrome(123));

} catch(err){
  console.log("error from catch block, an error has been occured")
}

// var numStr = String(x);
// var strArr = x.split('') // ['1', '1', '2', '1', '1']
// strArr = strArr.reverse().join(''); // reverse(), ['1', '1', '2', '1', '1'], at join(''), '11211'
//  if(x===parseInt(strArr)){  // at parseInt('11211'), ----> 11211
//      return true;
//  }else{
//      return false;
//  }

// roman to integer

//Convert RomanNumerals to Arabic
try {
  //var s = "MCMXCIV";

  function sum (a,b){

    return a+b;
  };



function sumOfItems(arr){ //n
    var sum = 0
    for(i=0; i<arr.length; i++){
        sum = sum+arr[i];
        for(j=1; j<arr.length; j++){

        }
    }
    return sum;
}

  var coun;
  var sum = 0; // undefined
  function Rom2Arab(s) {
    const I = 1;
    const V = 5;
    const X = 10;
    const L = 50;
    const C = 100;
    const D = 500;
    const M = 1000;
    coun = s.length;
    var reverse = s.split("").reverse().join("");

    for (let i = 0; i < coun; i++) {
      switch (reverse[i]) {
        case "M":
          if (reverse[i + 1] === "C") {
            sum = sum + (M - C);
            i++;
          } else if (reverse[i + 1] === "D") {
            sum = sum + (M - D);
            i++;
          } else {
            sum = sum + M;
          }
          break;
        case "D":
          if (reverse[i + 1] === "C") {
            sum = sum + (D - C);
            i++;
          } else {
            sum = sum + D;
          }

          break;
        case "C":
          if (reverse[i + 1] === "X") {
            sum = sum + (C - X);
            i++;
          } else {
            sum = sum + C;
          }

          break;
        case "L":
          if (reverse[i + 1] === "X") {
            sum = sum + (L - X);
            i++;
          } else {
            sum = sum + L;
          }

          break;
        case "X":
          if (reverse[i + 1] === "I") {
            sum = sum + (X - I);
            i++;
          } else {
            sum = sum + X;
          }

          break;
        case "V":
          if (reverse[i + 1] === "I") {
            sum = sum + (V - I);
            i++;
          } else {
            sum = sum + V;
          }

          break;
        default:
          sum = sum + I;
          break;
      }
    }
    return sum;
  }
} catch {}

console.log(Rom2Arab("MCMXCIV")); //1900

// M

// console.log("Char  " + i);
//             if (s[i] === "I" && s[i + 1] === "V") {
//                 sum += 4; //
//                 i++;
//                 console.log("sum inside if::: " + sum);
//             }
//             else if (s[i] === "I" && s[i + 1] === "X") {
//                 sum += 9; //
//                 i++;
//             }

//             console.log("Char  + i is : " + sum);
