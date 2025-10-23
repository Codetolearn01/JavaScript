let arr1 = [10,20,30,40,50];
let arr2 = [5,15,25,35,45];

arr1.push(arr2); // [ 10, 20, 30, 40, 50, [ 5, 15, 25, 35, 45 ] ]

console.log(arr1);

let concatArr = arr1.concat(arr2);

console.log(concatArr); 
//    [
//     10, 20, 30, 40, 50,
//      5, 15, 25, 35, 45
//   ]

let arr3 = ["Vignesh","Shekar","Surya","Charan"];

//(...) concats the arrays into new array

let newArr = [...arr1,...arr2,...arr3]; //[10, 20, 30, 40, 50 ,5, 15, 25, 35, 45, 'Vignesh', 'Shekar',
// 'Surya',   'Charan']

console.log(newArr);

let rec_array = [1,2,3,[4,5,6],7,[8,[9,10],11]];
console.log(rec_array); // [1,2,3,[4,5,6],7,[8,[9,10],11]]

let mod_array = rec_array.flat(Infinity);

console.log(mod_array); // [1,2,3,4,5,6,7,8,9,10,11]

console.log(Array.isArray("Vignesh")); //false
console.log(Array.from("Vignesh")); // Converts string in to array
//[
//     'V', 'i', 'g',
//     'n', 'e', 's',
//     'h'
//   ]
console.log(Array.from({name:"Vignesh"})); // []

const sub1_marks = 80;
const sub2_marks = 90;
const sub3_marks = 100;

console.log(Array.of(sub1_marks,sub2_marks,sub3_marks)); // [ 80, 90, 100 ] // Converts variables into Array
