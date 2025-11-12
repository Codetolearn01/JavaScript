/*
 Rest Parameter : It has the same symbol as the spread operator, 
                  but it is used inside the function parameter list.
*/

//Suppose

function printMe(param1,param2){
    console.log(param1,param2);
}

// printMe("I","am","Vignesh"); // I am (It doesn't print more than 2 parameters, as we can only pass two parameters)

function printAgain(param1,...param2){
    console.log(param1,param2);
    
}
//        param1------param2----------------- (param2 returns as an array of string)
// printAgain("I","am","Vignesh","How are you?") // I [ 'am', 'Vignesh', 'How are you?' ]

//Using both rest, spread, and reduce 
function add(...arr){
    const ini = 0;
    const sum = arr.reduce((acc,ele) => (acc+ele),ini);
    console.log(sum);
}
//We can pass any number of array elements 
let arr = [2,4,6,1,4,12,54,19]; // 102
// let arr = [1,2,3,4,5]; // 15

add(...arr);