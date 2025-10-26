/*
    A function is a block of code designed to perform particular task.
    It can take input as parameters and returns output.
    We use function : 
    1)To reuse code (write once, use many times)
    2)To organize code into smaller parts (better readability)
    3)To avoid repetition
    4)To handle input and output dynamically

    fun_keyword    fun_name  
    function        sayHii   (parameter1,parameter2..){...}

    | -------------------------| -------------------------------------------- | ----------------------------------|
    |             Type         |                Example                       |                Description        |
    | ------------------------ | -------------------------------------------- | --------------------------------- |
    |   Named Function         |  function add(a,b){ return a+b; }            | Has a name, reusable              |
    | -------------------------| -------------------------------------------- | ----------------------------------|
    |   Anonymous Function     |  const add = function(a,b){ return a+b; }    | Has no name, stored in variable   |
    | -------------------------| -------------------------------------------- | ----------------------------------|
    |   Arrow Function         |  const add = (a,b) => a+b;                   | Shorter syntax, modern ES6 style  |
    | -------------------------| -------------------------------------------- | ----------------------------------|
    |   Function Expression    |  let sayHi = function(){}                    | Function stored as a value        |
    | -------------------------| -------------------------------------------- | ----------------------------------|
    |   Callback Function      |  setTimeout(() => console.log("Hi"), 1000)   | Passed into another function      |
    | -------------------------| -------------------------------------------- | ----------------------------------|
    |   Constructor Function   |  function Person(name){ this.name = name; }  | Used with  new  to create objects |
    | -------------------------| -------------------------------------------- | ----------------------------------|

*/

function add_1(a, b) {
    return a + b; // It just returns a value
}
console.log(add_1(5, 10)); // 15 // It prints returned value of a function.

function add_2(a,b){
    console.log(a+b); // 13
}
let result_2 = add_2(5,8); //13  // result_2 stores undefined value in it.
console.log(result_2); // undefined // function doesn't returning any value, just printing, 

function add_3(a,b){
    let result = a + b;
    return result;
    // return a + b; // Directly we can return without storing in a variable.
    // console.log("This statment will not execute, after returning no other statement execute after it");
}
let result_3 = add_3(9,2); // Here function returning the value, that stores in result_3
console.log(result_3); //11

function loginUserMsg(username){
    return `${username} Just Logged in!!`;
}

loginUserMsg(); // Doesn't print anything

console.log(loginUserMsg()); // undefined Just Logged in!! (If we didn't pass any arguments, it treats as undefined)

console.log(loginUserMsg("Vignesh")); // Vignesh Just Logged in!!

function logoutUserMsg(username){
    // if(username === undefined)
    if(!username){
        return "Please Enter username";
    }
    return `${username} just Logged out!!`;
}

console.log(logoutUserMsg()); // Please Enter username
console.log(logoutUserMsg("")); // Please Enter username

console.log(logoutUserMsg("Vignesh")); // Vignesh just Logged out!!



