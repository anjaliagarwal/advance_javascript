// map  - complete array

const users = ['sam', 'peter', 'daniel'];

function transform(value) {
    return value.toUpperCase()
}

const modifiedUsers =users.map(transform)

// Directly inside the map 

// const modifiedUsers = users.map(function(value) {
//   return value.toUpperCase()
// })

// Fat Arrow

// const modifiedUsers = users.map((value) => {
      //    return value.toUpperCase() 
// })

// or

//  const modifiedUsers = users.map((value) => value.toUpperCase())
console.log(modifiedUsers);

// Object

const user2 = [
    {id: '1', name : 'Alisha'},
    {id: '2', name : 'Kunal'},
    {id: '3', name : 'Raj'},
    {id: '4', name : 'Veer'},
    {id: '5', name : 'Nit'}
]

const modifieduser1 = user2.map( user => user.name )

console.log(modifieduser1)

// foreach 

const result = [];

user2.forEach(function(user){
    result.push(user.name)
})

console.log(result)

// filter - few elements from the array

const employees = [
    {id : 101, name : 'John' , profile : 'Senior Developer'},
    {id : 102, name : 'Peter' , profile : 'Junior Developer'},
    {id : 103, name : 'Alisha' , profile : 'Senior Developer'},
    {id : 104, name : 'Daniel' , profile : 'Consultant'},
    {id : 105, name : 'Sahil' , profile : 'Senior Developer'},
    {id : 106, name : 'Nityansh' , profile : 'Director'}
]

// want to take only those profile have senior developer 

const filterEmployeeArray = employees.filter(function(emp) {
    return emp.profile === 'Senior Developer'
})

console.log(filterEmployeeArray)

const filteremployee = employees.filter((emp) => emp.profile === 'Director')

console.log(filteremployee)

// reduce 

const score = [100,30,20,40]

// without reduce 
 
function calculate(score) {
    let sum = 0;

    for (let i = 0; i < score.length; i++) {
        sum = sum+ score[i]
    }

    return sum
}

console.log(calculate(score))

const totalscore = score.reduce(function(accumulator, value) {
    return accumulator+value;
}, 0)  //default value of the accumulator

console.log(totalscore)

// arrow function 

const reducescore = score.reduce((accumulator,value) => accumulator+value, 0)
console.log(reducescore)

// combine map , filter and reduce 


const employees2 = [
    {id : 101, name : 'John' , profile : 'Senior Developer', rating1 : 5, rating2: 4},
    {id : 102, name : 'Peter' , profile : 'Junior Developer', rating1 : 3, rating2: 2},
    {id : 103, name : 'Alisha' , profile : 'Senior Developer', rating1 : 4, rating2: 3},
    {id : 104, name : 'Daniel' , profile : 'Consultant', rating1 : 2, rating2: 4},
    {id : 105, name : 'Sahil' , profile : 'Senior Developer', rating1 : 1, rating2: 4},
    {id : 106, name : 'Nityansh' , profile : 'Director', rating1 : 5, rating2: 1}
]

// get only senior developer 

const filteremployee2 = employees2.filter((emp) => emp.profile === 'Senior Developer')

console.log(filteremployee2);

// calculate the rating of each senior developer 

const mapemployee2 = filteremployee2.map( totalrat => totalrat.rating1 + totalrat.rating2)

console.log(mapemployee2)

// calculate the total rating - output is single use reduce function

const reduceemployee2 = mapemployee2.reduce((accumulator,score) => accumulator+score, 0)

console.log(reduceemployee2)

// chaining the three logic 

const totalRating = employees2.filter( emp => emp.profile === 'Senior Developer')
                                .map(emp => emp.rating1 + emp.rating2)
                                .reduce((acc, score) => acc+score,0);
                            
console.log(totalRating)

// with reduce only 

const try1 = employees2.reduce(function (acc, value) {

        if(value.profile === 'Senior Developer') {

            acc += value.rating1 + value.rating2
        }
        return acc
},0)

console.log(try1)