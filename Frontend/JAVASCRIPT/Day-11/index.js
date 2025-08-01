
let obj={
    name:"Aryan Yadav",
    age:20,
    arr:[20,40,60,80],
    address:{
        pincode:120122,
        city:"Noida"
    }
}


const {address:{pincode}}=obj;
// console.log(pincode);

const {arr:[first,second,...third]}=obj;
console.log(first,second,third)


let user1 = {
    name: "aryan",
    age: 20
}

let user2 = {
    money: 200,
    city: "Noida"
}
user2.__proto__=user1