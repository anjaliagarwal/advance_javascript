
// object
let user = {
    name: 'Nisha'
}

console.log(user.name)

console.log(user.__proto__)
// array
let score = [10,20]

console.log(score[0])
// function
function abc() {
    console.log('hi')
}

abc()

// string

let userName = 'Nisha'

console.log(userName)

// Built - In 

console.log(Object.prototype)

console.log(user.__proto__ === Object.prototype)

console.log(score.__proto__ === Array.prototype)

console.log(Array.prototype === Object.prototype)

// constructor

function User(name) {
    this.name = name;
    // this.getDetail = function() {
    //     console.log(this.name)
    // }
}

User.prototype.getDetail = function(name) {
    console.log(this.name)
}

console.log(User.prototype)
// object 

let user1 = new User('anjali');
let user2 = new User('Sneha')


console.log(user1.__proto__)
 user1.getDetail();

console.log(user2.__proto__)
user2.getDetail();


// Prototypical Inheritance 

function Phone() {
    this.modelNumber = "";
    this.getModelNumber = function() {
        return this.modelNumber;
    }
}

function Samsung() {
    this.modelNumber = "xxx-yyy";
    this.latestDetail = function() {
        console.log("Samsung has galaxy x foldatable smartphone")
    }
}

Samsung.prototype = new Phone() ;

let obj = new Samsung()
console.log(obj.getModelNumber())
obj.latestDetail()