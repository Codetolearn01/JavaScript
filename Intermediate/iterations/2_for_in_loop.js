/*
    We can loop over Objects using forin loop
    But we can't loop over Map, Map is iteratable

    forin loop can works on : Objects, Arrays, 
    forin loop can't works on : Map

    For Arrays :  In forof loop directly values are printed, but in forin loop indexes starting from 0 prints
*/

const myObj = {
    js : "JavaScript",
    cpp : "C++",
    rb : "Ruby",
    swift : "Swift by Apple"
}

for (const key in myObj) { // Can replace key with any
    console.log(`${key} shortcut is for ${myObj[key]}`);
//     js shortcut is for JavaScript
    // cpp shortcut is for C++
    // rb shortcut is for Ruby
    // swift shortcut is for Swift by Apple
}

const arr = [1, 2, 4, 6, 9];

for (const key in arr) {
    console.log(`${key} : ${arr[key]}`); 
//     0 : 1
    // 1 : 2
    // 2 : 4
    // 3 : 6
    // 4 : 9
}

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States Of America");
map.set("AUS","Australia");

for (const key in map) {
    console.log(key); // It doesn't print anything, Map is not iteratable
}