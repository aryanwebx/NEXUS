

// const add =(a,b)=>{
//     return a+b;
// }


// console.log(add(3,4))


// obj1={
//     name:"Aryan",
//     age:30
// }

// obj2={
//     amount:300,
//     pincode:228022
// }

// obj2=Object.create(obj1)

// console.log(obj2.__proto__)



//<--------------------- pass by value or pass by reference -------------------------->

function add (a,b){
    a=3,
    b=4
    return a+b;
}

let b=3
let a=1

console.log(add(a, b))
console.log(a,b)