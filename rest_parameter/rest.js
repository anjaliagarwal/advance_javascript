function sum(...values) {   // syntax is same spread operator and rest operator
    let sum = 0;
    values.map(d => sum+=d)
    console.log('Sum', sum);

    console.log(Array.isArray(values))
}

sum(2,3)
sum(10,4,5)
sum(10,3,4,5,2,2)

// rest parameter should be declare in the last
function calculate(type, ...values) {
    type(...values)
}

calculate(sum,10,30,40)

// ES5

function sum1 () {
    console.log(arguments) // it is like an array but not array 

    console.log(Array.isArray(arguments))
}

sum1(4,5)