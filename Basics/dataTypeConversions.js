let age1 = 25; //Number

console.log(typeof age1); //number

let ageNumber1 = Number(age1);

console.log(typeof ageNumber1); // number
console.log(ageNumber1); //25

//String => Number
let age2 = "25"; //String

console.log(typeof age2); //string

let ageNumber2 = Number(age2);

console.log(typeof ageNumber2); // number
console.log(ageNumber2); //25

//String To Number
let age4 = "25abc"; //String

console.log(typeof age4); //string

let ageNumber4 = Number(age4);

console.log(typeof ageNumber4); // number
console.log(ageNumber4); //NaN


//Undefined => Number
let age3 = undefined;

console.log(typeof age3); //undefined

let ageNumber3 = Number(age3);

console.log(typeof ageNumber3); // number
console.log(ageNumber3); //NaN

//Null => Number
let age5 = null; // null

console.log(typeof age5); //null

let ageNumber5 = Number(age5);

console.log(typeof ageNumber5); // number
console.log(ageNumber5); //0


//number => Boolean

let isLoggedIn = 1;
console.log(typeof(isLoggedIn));//number

let Bool = Boolean(isLoggedIn);
console.log(typeof(Bool));//boolean

console.log(Bool);//True

//1 => true , 0 => false
//"" => false , "vignesh" => true




