
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