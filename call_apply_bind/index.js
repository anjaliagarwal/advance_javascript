const getfullName = function(city, profile) {
    console.log(`${this.firstName} ${this.lastName} and city is ${city}
        and profile is ${profile}`)
}

const Employee = {
    firstName: 'Anjali',
    lastName : 'Agarwal',
    // getfullName: function(city, profile) {
    //     console.log(this)
    //     console.log(`${this.firstName} ${this.lastName}
    //         and city is ${city} and profile is ${profile}`
    //     )
    // }
}

// Employee.getfullName()

// const getEmpDetail = Employee.getfullName

// getEmpDetail()

const customer = {
    firstName: 'Pramod',
    lastName: 'Kumar',

    // getfullName: function() {  // same function using used in employee 
    //     console.log(`${this.firstName} ${this.lastName}`)
    // }
}

// customer.getfullName()


// instead of re-writing the code again using function borrowing

// Employee.getfullName.call(customer, 'Delhi', 'Instructor')

// Employee.getfullName.apply(customer, ['Goa', 'Constructor'])

// getfullName.apply(customer, ['Goa','Senior'])

// bind

// const handler = getfullName.bind(Employee);

// handler('Bangalore', 'Lead')

const obj = document.getElementById('btn')

obj.addEventListener('click', 
    getfullName.bind(customer,'delhi','developer')
)