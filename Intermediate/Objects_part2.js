/* NOTES

*/

const user = {
    email : "abc@gmail.com",
    UserDetails:{
        fullname:{
            firstname : "Vignesh",
            lastname : "varma"
        },
        address:{
            city:"Hyderabad",
            pincode : "522012",
            state:"Telangana"
        }
    }
}
/*
console.log(user.email); // abc@gmail.com
console.log(user.UserDetails); // { fullname: { firstname: 'Vignesh', lastname: 'varma' }, address: { city: 'Hyderabad', pincode: '522012', state: 'Telangana' } }
console.log(user.UserDetails.fullname); // { firstname: 'Vignesh', lastname: 'varma' }
console.log(user.UserDetails.fullname.firstname); // Vignesh
console.log(user.UserDetails.fullname.lastname); // varma




const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"c", 4:"d"};

const obj3 = {obj1, obj2};
console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

console.log("Stored in obj1")
console.log(obj1); // { '1': 'a', '2': 'b' }
                    //    (target, source) => stores all source object into target object
const obj4 = Object.assign(obj1,obj2); // obj2 stores in obj1 and refer to obj4, Now also obj1 modifies
console.log(obj4); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(obj1); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

console.log("Stored in empty object");
console.log(obj1); // { '1': 'a', '2': 'b' }
const obj6 = Object.assign({}, obj1, obj2); // obj1 and obj2 stores in empty{} object
console.log(obj6); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(obj1); // { '1': 'a', '2': 'b' }


const obj5 = {...obj1, ...obj2};

console.log(obj5); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

*/

const InstaUser = {
    name : "Arjun",
    email : "arjun@yahoo.com",
    age : 10
}

console.log(InstaUser.email); // arjun@yahoo.com
console.log(Object.keys(InstaUser)); // [ 'name', 'email', 'age' ] // Returns array of object keys
console.log(Object.values(InstaUser)); // [ 'Arjun', 'arjun@yahoo.com', 10 ]
console.log(Object.entries(InstaUser)); // [ [ 'name', 'Arjun' ], [ 'email', 'arjun@yahoo.com' ], [ 'age', 10 ] ]

console.log(InstaUser.hasOwnProperty("age")); // true


