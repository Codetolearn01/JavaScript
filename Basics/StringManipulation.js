let username = "vignesh@gmail.com";
let password = "123457";

console.log(`Username is ${username} and password is ${password}`);


let str = new String("Vignesh varma"); // Stores as Object (Non-Primitive value)
console.log(str); //String {'Vignesh'}
// 0: "V",1: "i",2: "g",3: "n",4:"e",5:"s",6:"h" , length: 7

console.log(str[3]); //n

console.log(str.charAt(5)); //s
console.log(str.indexOf("a")); //9
console.log(str.toLowerCase()); //vignesh varma
console.log(str.toUpperCase()); //VIGNESH VARMA
console.log(str.concat(username)); // Vignesh varmavignesh@gmail.com
console.log(str.split(" ")[0]); //Vignesh
console.log(str.split(" ")[1]); //varma
console.log(str.replace(" ","_"));//Vignesh_varma
console.log(str.includes("varma"));//true
console.log(str.includes("murari")); //false





let city = "  Hyderabad    ";
console.log(city.trim()); //Hyderabad
console.log(city.trimStart());//Hyderabad...
console.log(city.trimEnd()); //..Hyderbad







