
const user = {
    firstName: 'Riya',
    lastName: 'Sharma',
    address: {
        city: 'Delhi',
        country: 'India'
    }
}

const name = user.firstName;

const address = user.address.city;

// as a destructuring

// const {
//     firstName: fname, 
//     lastName,
//     age = 10,
//     address: {city}} = user;

// console.log(fname)

// console.log(lastName)

// console.log(age)

// console.log(city)

// rest operator 

const {firstName , ...userinfo} = user

console.log(firstName)

console.log(userinfo)  // return as an object 

// array 

const score = [10,20,30,44,344];

console.log(score[0])

const [x, ,c, ...other] = score

console.log(x)

console.log(c)

console.log(other)

