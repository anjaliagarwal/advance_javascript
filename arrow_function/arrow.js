console.log('ES5')

function add(x,y) {
    return x + y;
}

console.log(add(3,4));

// es6
console.log('ES6')

// with two argument 
const SUM = (x,y) => x+y;

const Sum = (x,y) => {
    return x+y;
}

console.log(SUM(5,6))

// to return an object from an arrow function

// as an curly braces it will not treat it an object it will be block of function
 // const getUser = () => {name: 'Nisha', city: 'Delhi'}

// To return an object need to use ()
 const getUser = () => ({name: 'Nisha', city: 'Delhi'})

 console.log(getUser())

 // this 
// handling this in the ES5 is the issue need to declare a variable and assign this 
 function addToCart() {
    this.productName = 'Laptop';
    this.getProduct = function() {
        console.log(this);
        // const that = this;
        // setTimeout(function(){
        //     console.log(this)
        //     console.log(that);
        //     console.log(that.productName)
        // },1000);

        // ES6

        setTimeout(()=>{
            console.log(this.productName)
        },1000)
    }
 }

let obj = new addToCart();
console.log(obj.productName)
obj.getProduct()

// argument binding in ES5

function arg(){
    console.log(arguments)
}

arg(2,4)
arg(3,4,5,6)

// Iterate 

const names = ["Sam", "Daniel", "Peter"];

const result = names.map(name => name.toUpperCase())
console.log(result)

// Object 

const User = {
    name : 'Nisha',
    // getUser : () => {
    //     console.log(this);
    //     return `UserName is ${this.name}`
    // }

    getUser : function() {
        return `UserName is ${this.name}`
    }
}

console.log(User.getUser())