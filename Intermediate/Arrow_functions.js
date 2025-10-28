const user = {
    username : "Vignesh",
    password : 32432,

    welcomeMessage : function(){
        console.log(this); // {username: 'Vignesh', password: 32432, welcomeMessage: [Function: welcomeMessage]}
        console.log(`${this.username}, Welcome to Website`); 
        
    }
}

user.welcomeMessage(); // Vignesh, Welcome to Website

user.username = "Varma";

user.welcomeMessage(); // Varma, Welcome to Website

// console.log(this); // {}

function addOne(){
    console.log(this); // global: [Circular *1],
    // clearImmediate: [Function: clearImmediate],       
    // setImmediate: [Function: setImmediate] {
    //   [Symbol(nodejs.util.promisify.custom)]: [Getter]
    // },etc...
}
addOne();

function thisFunction_1(){  // We cannot use  this keyword inside a function.
    let username = "Vignesh";
    console.log(this.username); // undefined
    
}
thisFunction_1(); // undefined

const addTwo = function(num1, num2){
    let username = "Vignesh";
    console.log(this);    
    console.log(this.username); // undefined
    return num1+num2;
}
console.log(addTwo(4,5)); // 9

const arrow_1 = (num1, num2) => {
    const username = "Vignesh";
    console.log(this); // {}
    console.log(this.username); // undefined 
    return num1 + num2;
}
arrow_1(5,9); // 14

const arrow_2 = (num1, num2) => num1+num2;

console.log(arrow_2(8,8)); // 16

const arrow_3 = (num1, num2) => (num1+num2); // we don't need to use return, if "()" used.

console.log(arrow_3(3,8)); // 11

const arrow_4 = () => ({username : "Vignesh", password : 123789}); // To use Object inside an arrow function.

console.log(arrow_4()); // { username: 'Vignesh', password: 123789 }


let myArray = [10,20,30,40,50,60];

myArray.forEach(() => {})