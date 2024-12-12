
// primitive 

let originalvalue = 10 ;
let copiedValue = originalvalue;

console.log(originalvalue)
console.log(copiedValue)

copiedValue = 20

console.log(originalvalue)
console.log(copiedValue)

// non primitive 

let originalObject = {
    name: 'John',
    age: 20
}

let copiedObject = originalObject;   // shallow copying

console.log(originalObject)
console.log(copiedObject)

copiedObject.name = 'Peter'

console.log(originalObject)
console.log(copiedObject)

// Deep Copying 

// JSON.stringify()

let originalDeepObject = {
    name: 'John',
    age: 20
}

let copiedDeepObject = JSON.parse(JSON.stringify(originalDeepObject))

copiedDeepObject.name = 'PETER';

console.log(originalDeepObject);
console.log(copiedDeepObject)

// issue with json.stringify - not able to copy if object have function

let originalDeepObjectJson = {
    name: 'John',
    age: 20,
    getName: function() {
        return this.name
    }
}

let copiedDeepObjectJSON = JSON.parse(JSON.stringify(originalDeepObjectJson))

copiedDeepObjectJSON.name = 'PETER';

console.log(originalDeepObjectJson);
console.log(copiedDeepObjectJSON)

//object.assign   - will not work if you have nested object

let originalDeepObjectAssign = {
    name: 'John',
    age: 20,
    getName: function() {
        return this.name
    }
}

let copiedDeepObjectAssign = Object.assign( {}, originalDeepObjectAssign)

copiedDeepObjectAssign.name = 'PETER';

console.log(originalDeepObjectAssign);
console.log(copiedDeepObjectAssign)

// will not work for nested object - it will change for the original object value 

let originalDeepObjectAssignNested = {
    name: 'John',
    age: 20,
    getName: function() {
        return this.name
    },
    address: {
        city : 'Delhi',
        country : 'India'
    }
}

let copiedDeepObjectAssignNested = Object.assign( {}, originalDeepObjectAssignNested)

copiedDeepObjectAssign.name = 'PETER';
copiedDeepObjectAssignNested.address.city = 'Pune'

console.log(originalDeepObjectAssignNested);
console.log(copiedDeepObjectAssignNested)

// spread operator - same thing as object assign - partially deep copy

let originalDeepSpread= {
    name: 'John',
    age: 20,
    getName: function() {
        return this.name
    },
    address: {
        city : 'Delhi',
        country : 'India'
    }
}

let copiedDeepSpread = {...originalDeepSpread}

// copiedDeepSpread.name = 'Peter';
// copiedDeepSpread.address.city = 'Rajasthan'


// To Do Deep Copy for function and nested loop 

copiedDeepSpread = {
    ...copiedDeepSpread,
    name: 'Alisa',
    address: {
        ...copiedDeepSpread.address,
        city: 'Goa'
    }
}

console.log(originalDeepSpread)
console.log(copiedDeepSpread)