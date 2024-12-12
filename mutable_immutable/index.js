let x=20;

let y =x;

y = y + 1
console.log(x)
console.log(y)

// array
let a = ['value1', 'value2']
let b = a 


b.pop()

console.log(a)
console.log(b)

// to make it immutable 

let b1 = a.concat()
b1.pop()
console.log(b1)

// spread operator 

let b2 = [...a]
// object

let c = {
    name : 'Hunry',
    city : 'Delhi'

}

let d = c;

d.age = 30;

console.log(c)
console.log(d)

// mutable to immutable object 

let d1 = Object.assign({},c)

// or spread object 

let d2 = {...c}