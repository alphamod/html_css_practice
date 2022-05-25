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
