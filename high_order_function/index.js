function x(fn) {
    fn();
}

function y() {
    console.log('Hello from y')
}

x(y);  // x is a higher order function   
        // y is a callback function

// const data = [10,20,30,4];

// const calculate_Square = function(d) {
//     const output = [];

//     for(var i=0; i<d.length; i++) {
//         output.push(d[i] * d[i])
//     }

//     return output;
// }

// const calculate_AddOne = function(d) {
//     const output = [];

//     for (var i = 0; i < d.length; i++) {
//         output.push(d[i] + 1)
//     }

//     return output;
// }


// console.log(calculate_Square(data))

// console.log(calculate_AddOne(data))

// Doing the same with Higher order function 

const data = [10, 20, 5, 30]

function cal_square(x) {
    return x*x;
}

function cal_addByOne(y) {
    return y+1;
}

const calculate_Square = function(d, calculate) {
    const output = [];

    for (var i=0; i < d.length; i++) {
        output.push(calculate(d[i]))
    }

    return output
}

// console.log(calculate_Square(data,cal_square))

// console.log(calculate_Square(data,cal_addByOne))

console.log(data.map(cal_square))