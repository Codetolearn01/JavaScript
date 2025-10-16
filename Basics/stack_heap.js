// Stack => Primitive values are stored in Stack Memory
// Heap => Non-Primitive values are stored in Heap Memory

let userOne = "Vignesh";
let userTwo = userOne;

console.log("Before Modified");
console.log(userOne); // Vignesh
console.log(userTwo); // Vignesh

userTwo = "Varma";

console.log("After modified");
console.log(userOne); // Vignesh
console.log(userTwo); // Varma

// Non Primitive

let myFavCar = {
    make : "Benz",
    model : "GLC"
}

let yourFavCar = myFavCar;

console.log("Before Modifying");
console.log(myFavCar.make,myFavCar.model); //Benz GLC
console.log(yourFavCar.make,yourFavCar.model); //Benz GLC

console.log("After Modifying");

yourFavCar.model = "GLA";

console.log(myFavCar.make,myFavCar.model); //Benz GLA
console.log(yourFavCar.make,yourFavCar.model); //Benz GLA




