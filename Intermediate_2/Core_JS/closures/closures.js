// for (var i = 1; i <= 3; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, 1000);
//   }
  
// for (var i = 1; i <= 3; i++) {
//   (function(j) {
//     setTimeout(() => {
//       console.log(j);
//     }, 1000);
//   })(i);
// }

/*
  Closures : A function defined inside another function, The inner function has access to the variables 
             and scope of the outer function
             A closure is when a function remembers and can access variables from its outer scope
             even after the outer function has finished executing.
             *Allow for private variables and state maintanance
             *Used frequently in JS frameworks : React, Vue, Angular
*/

function outer(){
  let count = 0;
  function increment(){
    count++;
    console.log(count);
  }
  function inc(){
    count++;
    console.log(count);
    
  }
  function getCount(){
    return count;
  }
  // increment();
  // return increment;
  return {increment,inc,getCount};
}

// const res1 = outer();
// res1();
// console.log(res1.count);
// outer()();

// const res2 = outer();
// res2.increment();
// res2.inc();
// console.log(res2.getCount());

var num1 = 3;

function sum(){
  var num2 = 5;
  return function(){
    return num1+num2;
  };
}
console.dir(sum());
// console.dir(sum);
