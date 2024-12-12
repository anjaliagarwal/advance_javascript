function countDown(n){
    for (var i=n; i>0; i--) {
        console.log(i)
    }
}

countDown(3)

// recursion

function recusionCountDown(n) {
    if(n===0) {
        return;
    }

    console.log(n)
    recusionCountDown(n-1)
}

recusionCountDown(5)

function calculateTotal(n) {
    let total = 0;
    for (let i=0; i<=n;i++) {
        total += i;
    }

    return total
}

console.log(calculateTotal(3))

function recursionTotal(n, sum=0) {

    if(n == 0) 
        return sum;
        return recursionTotal(n-1, sum+=n)

    
}

console.log(recursionTotal(2))

console.log('############################')

const teamStructure = {
    name: 'Kunal',
    teams: [
        {
            name: 'Harish',
            teams: [{
                name: 'Alisha',
                teams: []
            }]
        },
        {
            name:'Anurag',
            teams: []
        }
    ]
}

function getTeamDetail(t) {
    // base case

    console.log('Team...........', t)

    if(t.teams.length === 0)
        return;

    t.teams.forEach(team => {

        console.log(team)
        getTeamDetail(team)        
    });
}

getTeamDetail(teamStructure)