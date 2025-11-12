/*

*/

const myArr = ["js","python","java","cpp","ruby"];

// Type : 1
myArr.forEach(function (item){ // It is callback function, it doesn't have name
    console.log(item);
//     js
    // python
    // java  
    // cpp   
    // ruby
})

// Arrow Function Type : 2

myArr.forEach((val) => {
    console.log(val);
//     js
    // python
    // java  
    // cpp   
    // rub
})

// Type : 3
function printMe(value){
    console.log(value);
    
}

// myArr.forEach(printMe); // Just provide reference not Execute "()". No paranthesis needed
    // js
    // python
    // java  
    // cpp
    // ruby

myArr.forEach( (item, index, arr) => {
    console.log(item, index, arr);
//     js 0 [ 'js', 'python', 'java', 'cpp', 'ruby' ]
    // python 1 [ 'js', 'python', 'java', 'cpp', 'ruby' ]
    // java 2 [ 'js', 'python', 'java', 'cpp', 'ruby' ]
    // cpp 3 [ 'js', 'python', 'java', 'cpp', 'ruby' ]
    // ruby 4 [ 'js', 'python', 'java', 'cpp', 'ruby' ]
})

// Using Object array

const myObjArr = [
    {
        Name : "JavaScript",
        format : ".js"
    },
    {
        Name : "Python",
        format : ".py"
    },
    {
        Name : "Java",
        format : ".java"
    }
];

myObjArr.forEach( (item) => {
    console.log(`${item.Name} file format is ${item.format}`);
//     JavaScript file format is .js
    // Python file format is .py
    // Java file format is .java
})

// We can not store the it in a variable, it doesn't returns anything, undefined
// const store = myObjArr.forEach(() => {}) // Its not possible --> see in filter.js
// It is possible with filters method. 