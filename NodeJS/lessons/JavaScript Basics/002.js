//Variables
const name = 'Max'
let age = 29; // age will be changed later
const hasHobbies = true;

//name = 'Dank' <- Error
age = 30; 

//Functions
function summarizeUser(userName, userAge, userHasHobby){
    //return 'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby
    return (
        'Name is ' + 
        userName +
        ', age is ' +
        userAge +
        ' and the user has hobbies: ' +
        userHasHobby
    )
}

console.log(summarizeUser(name,age,hasHobbies));