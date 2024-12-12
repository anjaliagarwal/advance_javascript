let productName = 'Laptop'; 
let quantity = 2;
let status1 = "pending";

// ES5

let productStatus = "Status of the product is ";
productStatus += (status1 === 'delivered') ? 'green' : 'red';

let description = 'I have ordered ' + quantity + " " + productName;
console.log(description)

let escape1 = "I have ordered "+ quantity + " " + productName + "from \"amazon\" last week" + productStatus;
console.log(escape1);


console.log('#######ES6###############')
// ES6
let description2 = `I have ordered ${quantity} ${productName}`;
console.log(description2);

let escape2 = `I have ordered ${quantity} ${productName} from "amazon" last week.`
console.log(escape2);

let multiline = `I have ordered ${quantity}
 ${productName} from "amazon" last week.`

 console.log(multiline);

 function estimatedDelivery() {
    return 'next day'
 }

 let productSta = `Status of the product is ${status1 === 'delivered' ? 'green' : 'red'}`

 let string1 = `I have ordered ${quantity} ${2+3} ${productName} ${estimatedDelivery()} from "amazon" last week ${productSta}.`
 console.log(string1)