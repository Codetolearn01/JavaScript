/* NOTES
Two types of Objects : literal, singleton
{} => Object Literals
Creating new instance => new Object => Singleton Object

Ways of Creating Objects
const obj1 = {};
const obj2 = new Object();
const obj3 = Object.create(); 

*/

const mySym = Symbol("symKey");

const myObj = {
    name : "Vignesh",
    age : 22,
    [mySym] : "keyOne",
    company : "Microsoft", // By default keys are stored as string in backend
    "city lived" : "Hyderabad",
    IsMarried : false,
}

console.log(myObj.company); // Microsoft


console.log(myObj.name); // Vignesh
console.log(myObj.IsMarried); //false
console.log(myObj["company"]); //Google
console.log(myObj["city lived"]); //Hyderabad // we can't use "." here bcz we used key as string

//mySym : "keyOne", //[Inside of an Object]
console.log(myObj.mySym); //keyOne
console.log(typeof myObj.mySym); // string

//[mySym] : "keyOne",
console.log(myObj[mySym]); // keyOne
console.log(typeof myObj[mySym]);
console.log(myObj);
// {
//   name: 'Vignesh',
//   age: 22,
//   company: 'Google',
//   'city lived': 'Hyderabad',
//   IsMarried: false,
//   [Symbol(symKey)]: 'keyOne' ****
// }

//To freeze the Object, restrict to change the values

Object.freeze(myObj);
myObj.company = "Google";
console.log(myObj.company); //Microsoft // After freezing, we can't modify the values

myObj.greeting = function(){
    console.log("Hello User");
}

console.log(myObj.greeting); // [Function (anonymous)]

console.log(myObj.greeting()); // Hello User & undefined
// Here undefined is because, myObj.greeting() is execute => Hello User
// next console.log(..), prints undefined, by default function returns undefined if we didn't return anything
myObj.greeting(); // Hello User

myObj.greetingOne = function(){
    return `Hello ${this.name}`; // Here function returns something to avoid returing undefined
}
console.log(myObj.greetingOne()); // Hello Vignesh


myObj.greetingTwo = function(){
    console.log(`Hello User, ${this.name}`); // String Interpolation
}

myObj.greetingTwo(); // Hello User, Vignesh