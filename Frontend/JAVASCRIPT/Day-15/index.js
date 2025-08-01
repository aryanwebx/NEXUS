/*
<---- for of loop ---------->
It is used to iterate over Arrays and string but we can't directly iterate over object because object is not iterable
in object hame nhi pta next kidhar janna hai


let arr=[1,2,3,4]

for (const element of arr) {
    console.log(element);
}


let str ="Aryan is the Webx Developer"

for (const value of str){
    console.log(value);
}


obj={
    name:"Aryan",
    balance:200,
}

for (const value of obj){
    console.log(value) This throw TypeError: obj is not iterable
}

we can do some twist

for (const value of Object.keys(obj)){
    console.log(value,obj[value])
}


<------------------ Callback function ---------------------->
Callback function is a function which passes as an argument to another function.

function greet(fun){
    console.log("I'm normal function");
    fun();
}

function Callback(){
    console.log("I'm a Callback function");
}

greet(Callback)

let arr=[1,2,3,4]

forEach take has three parameter
first for value
second for index
third for array
it is not for object directly

arr.forEach(num=>console.log(num));



const arr=[20,30,4,5,3,23,45,23,445]

const result= arr.filter((num)=>{
    return !(num%2==0)
})

console.log(result);


<--- filter----->
"filter() in JavaScript is used to select (or filter) specific values from an array based on a condition, returning a new array with the matched values."

const arr = [
    { name: "Aryan", age: 20, Marks: 40 },
    { name: "thor", age: 20, Marks: 50 },
    { name: "steve", age: 20, Marks: 70 },
    { name: "webx", age: 20, Marks: 90 }
]

const result=arr.filter(({Marks})=>Marks>50)

console.log(result);

<-------------- Map ------------->
map() in JavaScript is used to modify or transform each element of an array and returns a new array with the modified values. 

const arr=[1,2,3,4,5];

const result=arr.map((num,index)=>num*index)
console.log(result)

*/


const arr=[1,2,3,4];

const result=arr.reduce((prev,curr)=>console.log(prev,curr))

console.log(result)