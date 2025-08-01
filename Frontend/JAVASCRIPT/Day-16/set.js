/*
<--------------------- Set -------------------------->

A Set is a built-in JavaScript object that lets you store unique values — no duplicates allowed.

 Important Note : 
 Objects and arrays are compared by reference, not value:
 
 const s = new Set();
 s.add({a: 1});
 s.add({a: 1}); // different object → allowed

 console.log(s.size); // 2


arr=[10,20,30,10,30]
we can see that array has duplicate values So what we need to store only unique values then the Set come into picture

const set1 = new Set([10,10,23,34,32,10])
console.log(set1);

const set = new Set();
set.add(10)
set.add(20)
set.add("Aryan")
set.add({name:"Aryan",money:200})

set.delete(10)

console.log(set.has("Aryan"));
console.log(set.size)
console.log(set)

set.clear()
console.log(set)

ig:id

const user_id = new Set(["rohit_negi9","Mohi_91","ravi.93","chavi_90","sumit._90"]);
let new_user = "rohit_negi9";
console.log(user_id.has(new_user));

let arr = [10,30,20,10,40,50,30];
const set1 = new Set(arr);
arr = [...set1];
console.log(arr);


Union of Sets
const set1 = new Set([100,20,30,80,50]);
const set2 = new Set([90,40,60,80,100,120])

const set3 = new Set([...set1,...set2]);
console.log(set3)


Intersection of Sets
const set1 = new Set([100,20,30,80,50]);
const set2 = new Set([90,40,60,80,100,120])

const set3 = new Set([...set1].filter((value) => set2.has(value)))
console.log(set3)


Iteration


let set = new Set([10,20,30,40,50]);

for (let value of set){
    console.log(value)
}

set.forEach((value)=>console.log(value))

*/