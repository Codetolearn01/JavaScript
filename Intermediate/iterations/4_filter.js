/*
    ForEach doesn't return any value. => We can only traverse through array.
    Filter returns value => We can traverse through and return desired value.
*/
const myArr = [2,4,6,8,10];

const values = myArr.forEach( (val) => {
    // console.log(val);
    return val;
});

console.log(values); // undefined

const newArr = []; 
myArr.forEach( (num) => {
    if(num > 4){
        newArr.push(num);
    }
})

console.log(newArr); // [ 6, 8, 10 ]

// Using Filters 

const value = myArr.filter( (num) => num > 4);

// const value = myArr.filter( (num) => {
//     return num > 4; // Opened scope, so return that value.
// })

console.log(value); // [ 6, 8, 10 ]  


const books = [
    {title:"Book1", genre:"fiction",publish:2000,edition:2012},
    {title:"Book2", genre:"non fiction",publish:2010,edition:2012},
    {title:"Book3", genre:"history",publish:2004,edition:2014},
    {title:"Book4", genre:"science",publish:2007,edition:2011},
    {title:"Book5", genre:"fiction",publish:2001,edition:2017},
    {title:"Book6", genre:"history",publish:1999,edition:2001},
    {title:"Book7", genre:"non fiction",publish:1980,edition:2000}
];

const result1 = books.filter( (item) => {
    return item.genre === "history";

});

console.log(result1);
//   [
//     { title: 'Book3', genre: 'history', publish: 2004, edition: 2014 },
//     { title: 'Book6', genre: 'history', publish: 1999, edition: 2001 }
//   ]


const result2 = books.filter( (item) => {
    return item.edition > 2004 && item.genre === "non fiction";
});

console.log(result2);
// [
//     {
//       title: 'Book2',
//       genre: 'non fiction',
//       publish: 2010,
//       edition: 2012
//     }
//   ]


// Using map() method
// const myArr = [2,4,6,8,10];
const res = myArr.map( (num) => {
    return num+10;
})

console.log(res); //[ 12, 14, 16, 18, 20 ]


// Chaining

const newNums = myArr // [2,4,6,8,10]
                .map( (num) => {return num + 10}) // [12,14,16,18,20]
                .map( (num) => {return num + 1}) // [13,15,17,19,21]
                .filter( (num) => {return num > 16}); //[ 17, 19, 21 ]

console.log(newNums); // [ 17, 19, 21 ]
