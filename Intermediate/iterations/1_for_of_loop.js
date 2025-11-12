/*
    We can loop over arrays and Strings
    Arrays can include : Strings and Objects
    ["", "", ""]
    [{}, {}, {}]

    forof loop only works with : Arrays, Strings, maps
    forof loops not works with : Ojects.

*/

const arr = [1, 2, 4, 6, 9];

for (const ele of arr) {
    console.log(ele); // 1 2 4 6 9
}

const message = "Hello User, Welcome!!";

for (const char of message) {
    console.log(char); // Each char prints in new line. including space
}

//Map -- set, get, keys, values, delete, forEach, entries, has, size
// Map only stores unique Key


const map = new Map();
map.set("IN", "India");
map.set("USA", "United States Of America");
map.set("AUS","Australia");
map.set("IN","India"); // It doesn't print, bcz its duplicate
map.set("IN","Asia"); // India is override with Asia
map.set("US","United States of America"); // Can store duplicate values

console.log(map);
// {
//     'IN' => 'Asia',
//     'USA' => 'United States Of America',
//     'AUS' => 'Australia',
//     'US' => 'United States of America'
//   }


for (const item of map) {
    console.log(item); // It prints total map in an array for each item of map
    // [ 'IN', 'Asia' ]
    // [ 'USA', 'United States Of America' ]
    // [ 'AUS', 'Australia' ]
    // [ 'US', 'United States of America' ]
}

for (const [itemKey, itemValue] of map) {
    console.log(itemKey,":",itemValue);
//     IN : Asia
    // USA : United States Of America
    // AUS : Australia
    // US : United States of America
}

//We can not iterate Objects through forof loop, 
const myObj = {
    car1 : "BMW",
    car2 : "BENZ"
}

for (const [itemKey, itemValue] of myObj) {
    console.log(itemKey,":",itemValue); // TypeError: myObj is not iterable  
}