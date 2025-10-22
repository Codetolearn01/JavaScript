
// EPSILON= 2.220446049250313e-16,MAX_SAFE_INTEGER= 9007199254740991,MAX_VALUE= 1.7976931348623157e+308,MIN_SAFE_INTEGER= -9007199254740991,MIN_VALUE= 5e-324,NEGATIVE_INFINITY= -Infinity,NaN= NaN,POSITIVE_INFINITY= Infinity,isFinite= ƒ isFinite(),isInteger= ƒ isInteger(),isNaN= ƒ isNaN(),isSafeInteger= ƒ isSafeInteger(),length= 1,name= "Number",parseFloat= ƒ parseFloat(),parseInt= ƒ parseInt()

const num = new Number(1000);
console.log(num); //[Number: 1000]

const num1 = 90071992547409999; // SafeInteger : 9007199254740991
console.log(Number.isSafeInteger(num1)); // False

const num2 = 299.567;
console.log(num2.toFixed(1)); //299.6

const num3 = 32.66;
console.log(num3.toPrecision(3)); //32.7

const num4 = 32.54;
console.log(num4.toPrecision(2)); // 33

const num5 = 100000000;
console.log(num5.toLocaleString()); //100,000,000 (US standarad)
console.log(num5.toLocaleString("en-IN")); //10,00,00,000 (Indian standard)




// ++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++=

console.log(Math.round(23.7)); //24
console.log(Math.round(23.4)); //23

console.log(Math.floor(28.8)); //28
console.log(Math.ceil(43.2)); // 44

console.log(Math.sqrt(25)); // square root(25) = 5




console.log(Math.random()); // return random value in btw 0 and 1 in decimals //0.5550556490245007
console.log((Math.random()*10) + 1); // return random value btw 1 and 10 in decimals //8.992652410490201

console.log(Math.floor(Math.random()*10) + 1); // return value btw 1 and 10 only Integer values // 9

const min = 30;
const max = 70;

console.log(Math.floor(Math.random()*(max-min+1)) + min); //It return Integer value btw 30 and 70


