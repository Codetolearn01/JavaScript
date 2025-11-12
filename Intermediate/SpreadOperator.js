/*
    Spread Operator :  It consists of three dots used before a referenced expression or string, 
                       and it spreads out the arguments or elements of an array. 

*/

let spread = ["so", "much", "fun"];

let message = ["Javascript","is",...spread,"also","powerful"];

// console.log(message); //[ 'Javascript', 'is', 'so', 'much', 'fun', 'also', 'powerful' ]


let arr = [4,6,8];

function addTwoNums(x,y) {
    console.log(x+y);
}

// addTwoNums(...arr); // 10

let arr1 = [2,10];
let arr2 = [5,9];

function addFour(x,y,a,b){
    console.log(x+y+a+b);
}
// We can use multiple spread operators
addFour(...arr1,...arr2); // 26