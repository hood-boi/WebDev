//Variables
const name = 'Max'
let age = 29; // age will be changed later
const hasHobbies = true;

//name = 'Dank' <- Error
age = 30; 

//Named function = Anonymous function. No name attached explicitely. 
const summarizeUser = function(userName, userAge, userHasHobby){
    //return 'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby
    return ( '[Named] ' +
        'Name is ' + 
        userName +
        ', age is ' +
        userAge +
        ' and the user has hobbies: ' +
        userHasHobby
    )
}

//Arrow function :  
const summarizeUserArrow = (userName, userAge, userHasHobby) => {
    //return 'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby
    return ( '[Arrow] ' +
        'Name is ' + 
        userName +
        ', age is ' +
        userAge +
        ' and the user has hobbies: ' +
        userHasHobby
    )
}

console.log(summarizeUser(name,age,hasHobbies));
console.log(summarizeUserArrow(name,age,hasHobbies));

const add = (a,b) => {
    return a + b;
}

const add2 = (a,b) => a + b;

const addOne = a => a + 1;

const weed = () => 420;


console.log(add(1,2))
console.log(add2(1,2))
console.log(addOne(68))
console.log(weed())