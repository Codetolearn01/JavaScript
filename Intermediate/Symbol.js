/* NOTES
    Symbol is a primitive datatype introduced in ES6
    It represents unique and immutable identifier
    Even two symbols have same discription, they are different.
    const sym1 = Symbol("id");
    const sym2 = Symbol("id");
    console.log(sym1 === sym2) // false

    Before Symbol, all Object keys were string
    That caused two problems
    1)Naming Collision : If two devs uses same key name, one can overwrite other
    2)Private-like properties : sometimes you don't want showup some properties during iteration(for...in, Object.keys,etc)

    Symbol solves both : 
    1)create unique keys that never collide.
    2) Hides from normal loops and JSON.stringify() not completely private but protected.

    user[salary] // 1000
    user.salary // undefined // Can't be accessible by "."

    ** Learn about well-known symbols (Symbol.iterator, Symbol.toStringTag, Symbol.toPrimitive)
*/


const salary = Symbol("salary");
const pincode = Symbol("pincode")

const user = {
    name : "Vignesh",
    age : 22,
    location : "Hyderabad",
    [salary] : 1000,
    [pincode] : 508220
}   
console.log(user); //{ name: 'Vignesh', age: 22, location: 'Hyderabad', [Symbol(salary)]: 1000}
 
console.log(user.name); // Vignesh
console.log(user.age); // 22
console.log(user["location"]); // Hyderabad
console.log(user[salary]); // 1000 // Can't be accessible by "."

// Hidden from loops
for(let key in user){
    console.log(key); // name, age, locaion [It hides the symbol]
}

console.log(Object.keys(user)); // [ 'name', 'age', 'location' ] // returns array of Keys
console.log(JSON.stringify(user)); //{"name":"Vignesh","age":22,"location":"Hyderabad"} // doesn't return Symbol

console.log(Object.getOwnPropertySymbols(user)); // [ Symbol(salary), Symbol(pincode) ] // returns array of symbols used in object

//Avoiding Property name collision

const ID = Symbol("id");
const InstaUser = {name : "Vignesh"};

// Dev 1 
InstaUser[ID] = 100;

// Dev 2
InstaUser.id = "USER - 100";

console.log(InstaUser); //{ name: 'Vignesh', id: 'USER - 100', [Symbol(id)]: 100 }
// No conflict btw id(string key) and Symbol("id")

