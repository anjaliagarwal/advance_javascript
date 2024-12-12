// what is spread operator

const users = ['user1', 'user2'];

console.log(users);

console.log(...users);

// spread operator with arrays

console.log('...Spread with Array...')

const team1 = ['user1', 'user2'];
const team2 = ['user3']

// use concat when need to do for two arrays 

const newTeam = team1.concat(team2);
console.log(newTeam)

// use when need to combine more than two arrays
const spredTeam = [...team1, ...team2];
console.log(spredTeam)

// array and string 

const newString = 'newteamMember';
console.log(team1.concat(newString));


console.log([...team1, ...newString]) // not recommended

// copying the array 

//ES5
console.log('Copying the Array')
const productlist1 = ["phone", "adapter"];
//const newProduct = productlist1; //ES5

const newProduct = [...productlist1];

console.log(productlist1)
console.log(newProduct)

newProduct.push('Camera')
console.log(productlist1)
console.log(newProduct)

// Spread Operator with Object 

console.log('Spread Operator in Object');

const emp = {
    name : "John",
    job : 'developer'
};

const personalDetail = {
    age : 30
}
const clonedEmployee = {...emp};

console.log(emp)
console.log(clonedEmployee)

// want to merge multiple object than used spread operator

const employeeDetails = {...emp, ...personalDetail}
console.log(employeeDetails)


// Spread Operator in function calls 

console.log(Math.min(10,5,30,3,90));

const scoreList = [100,40,200,89];

console.log(Math.min(scoreList)) // doesn't work - need to iterate it

console.log(Math.min(...scoreList))
console.log(Math.max(...scoreList))

// ES5
// Apply method
console.log(Math.min.apply(null,scoreList))

// Immutable with spread operator

const todos = [
    { task : 'reading' , completed: true},
    { task : 'painting', completed : false}
];


// function addToDo(newToDo) {
//     todos.push(newToDo) // mutable changing the original object
// }


// with spread 

function addToDo(newToDo) {
    return [
        ...todos,
        {...newToDo}
    ]
}

const newList = addToDo({
    task : 'recording',
    completed : true
});
console.log(todos)
console.log(newList)

