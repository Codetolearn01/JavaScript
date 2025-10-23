let myArr1 = [1, 2, 3, 4, 5, 6, 7];
let myArr2 = new Array(9, 8, 7, 6, 5, 6);

console.log(myArr1); 
//  [
//     1, 2, 3, 4,
//     5, 6, 7    
//   ]
console.log(myArr2); //[ 9, 8, 7, 6, 5, 6 ]
console.log(myArr1[5]); // 6

// ++++++++++++++++++ Array methods ++++++++++++++++++++

//push, pop, shift, unshift, join, includes, indexOf, slice, splice

// ++++++++++++++++++ push and unshift +++++++++++++++++

myArr1.push(9); // It adds element at end
console.log(myArr1);
// [
//     1, 2, 3, 4,
//     5, 6, 7, 9
//   ]

myArr1.unshift(10); //It adds element at start
console.log(myArr1);
// [
//     10, 1, 2, 3, 4,
//      5, 6, 7, 9
//   ]

//++++++++++++++++++ pop and shift +++++++++++++++++++

console.log(myArr1); //[ 1, 2, 3, 4, 5, 6, 7 ]
myArr1.pop(); // Removes element at end
console.log(myArr1); //[ 1, 2, 3, 4, 5, 6 ]

console.log(myArr1); //[1, 2, 3, 4, 5, 6, 7 ]
myArr1.shift(); // Removes element at start
console.log(myArr1); //[ 2, 3, 4, 5, 6, 7 ]


// ++++++++++++++++++++ join +++++++++++++

let newArr2 = myArr1.join();
console.log(myArr1); //[1, 2, 3, 4, 5, 6, 7 ]
console.log(newArr2); //1,2,3,4,5,6,7 // It converts into string
console.log(typeof newArr2); //string

//includes (checks whether element present or not, return boolean value)
//  and indexOf (returns index of an element passed as parameter, else return -1)

console.log(myArr2); //[ 9, 8, 7, 6, 5, 6 ]
console.log(myArr2.includes(2)); //false
console.log(myArr2.includes(9)); //true

console.log(myArr2); // [ 9, 8, 7, 6, 5, 6 ]
console.log(myArr2.indexOf(5)); // 4
console.log(myArr2.indexOf(3)); // -1

//+++++++++ slice and splice ++++++++++++
console.log("Slice"); // It copies the elements from array mentioned as parameters
console.log(myArr1); // [1, 2, 3, 4, 5, 6, 7 ]
console.log(myArr1.slice(2,5)); // [ 3, 4, 5 ] // Here 5th index not included
console.log(myArr1); // [1, 2, 3, 4, 5, 6, 7 ]

console.log("Splice"); // It cuts the elements from array mentioned as parameters
console.log(myArr2); // [ 9, 8, 7, 6, 5, 6 ]
console.log(myArr2.splice(2,4)); // [ 7, 6, 5, 6 ] // Here 4 index is also included
console.log(myArr2); // [ 9, 8 ]

