/* NOTES
    Scope : It refers as Current context of execution, Where variables, functions and Object are accessible
    in our code.
    Types : Global Scope, Block Scope, Function Scope
*/

var d = 49; // It is global scope
let e = 23; // It is also a global scope, it can accessed any where in this prgm

if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    var d = 69;
}

// console.log(a); // We can't access the a, its inside the "if" block.
// console.log(b); // We can't access the b, its inside the "if" block.
// console.log(c); // 30 // we can access var variable, global scope
// console.log(d); // 69 
// console.log(e); // 23 

// Nested function // Function Scope
function one(){
    const username = "Vignesh";
    function two(){
        const role = "Developer"; // We can't access role variable outside of this function
        console.log(`${username} is a ${role}`); // username is a global scope for function two()
    }
    console.log(`Username is ${username}`); // Username is Vignesh
    
    two(); // If we didn't execute this two(), nothing will print
}
// console.log(username); // We can't access username and role outside function, bcz those are function scope
// console.log(role);
one();


//Nested IF // Block scope (if and loops) {...}

if(true){
    const username = "Vignesh";
    if(username === "Vignesh"){
        const psw = 123456;
        console.log(`Username is ${username} and Password is ${psw}`); // Username is Vignesh and Password is 123456
    }
    console.log(username); // Vignesh
    // console.log(psw); // Error, we can't access psw outside of block, block scope
}
// console.log(username); // Error, we can't access username outside of block scope


console.log(addOne(12)); // 13

function addOne(num){
    return num+1;
}

console.log(addOne(8)); // 9

console.log(addTwo(13)); // We can't access this function, it is anonymous function stored in a variable

const addTwo = function(num){
    return num+2;
}

console.log(addTwo(19)); // 21

