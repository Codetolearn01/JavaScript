// Suppose input parameters may vary, to sum up all input parameters with one function
// Lets say, we are having shopping cart, to add the all product prices and return sum. Here no.of Items may vary


function cartItemTotalAmount(...itemPrice){// Here (...) represents rest operator, we can pass any no.of parameters
    // here itemPrice return an array => [ 100, 200, 300 ]
    let tot = 0;
    for(let i = 0; i<itemPrice.length;i++){
        tot+=itemPrice[i];
    }
    return tot;
}
console.log(cartItemTotalAmount(100,200,300)); // 600

console.log(cartItemTotalAmount(300,120,340,210,450)); // 1420

// Using Functions with Objects.
const user = {
    username : "Vignesh",
    password : "123456"
}

function userDetails(anyObject){ // Here we can pass any object
    return `Username is "${anyObject.username}" and password is "${anyObject.password}"`;
}

console.log(userDetails(user)); // Username is "Vignesh" and password is "123456"

// We can also pass directly object
console.log(userDetails({username:"Varma",password:"65456"}));

// Using Functions with Array

let myArray = [10,20,30,50,100];

function returnNthValue(n,anyArray){
    return anyArray[n];
}

console.log(returnNthValue(3,myArray)); // 50
console.log(returnNthValue(4,myArray)); // 100
console.log(returnNthValue(5,myArray)); // undefined

// We can directly pass an array
console.log(returnNthValue(4,[12,14,98,54,90,76])); // 90



