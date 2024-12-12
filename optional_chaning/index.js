const customerDetail = {
    userID: '123456',
    account: {
        accountToken: 'ABC1234',
        holder: {
            profile: {
                firstName: 'Mahi',
                lastName: 'Khurana',
                birthDate: '1990-10-10'
            }
        },
          contacts : {
            address: {
                city:'Delhi',
                state: 'Delhi',
                countryName: 'India'
            },
            phone:[
                {
                    type: 'Home',
                    phoneNumber: '2423423432'
                },
                {
                    type: 'Work',
                    phoneNumber: '23434'
                }
            ] 
          }
    }
}

console.log(customerDetail.account.holder.profile.birthDate) // sometimes option are not mandatory 

console.log(customerDetail.account && 
            customerDetail.account.holder&&
            customerDetail.account.holder.profile &&
            customerDetail.account.holder.profile.birthDate
)

// instead of using repetative checks 

// use optional chaining 

console.log(customerDetail.account?.holder.profile?.birthDate) 

// it will stop when it find the undefined state 

