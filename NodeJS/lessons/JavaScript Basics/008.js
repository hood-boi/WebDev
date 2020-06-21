//Destructuring

const person = {
    name : 'Max',
    age : 29,
    greet : function(){
        console.log("Hi!, I am " + this.name)
    }
}

const printName = (personData) => {
    console.log(personData.name)
}
printName(person)

//Ignores rest of the object fields except for name
const printNameDestructuredName = ({name}) => {
    console.log(name)
}

printNameDestructuredName(person)

//Destructuring object
const {name, age} = person
console.log(name, age)


const hobbies = ['Sports', 'Cooking']
//Destrucuting arrays
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2)