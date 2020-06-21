//Rest and Spread :>

const person = {
    name : 'Max',
    age : 29,
    greet : function(){
        console.log("Hi!, I am " + this.name)
    }
}

const hobbies = ['Sports', 'Cooking', 1, true, {weed : 420}]

//A common way to copy
const copiedArray = hobbies.slice()

//A mistake that end up making a 2d array
const copiedArray2 = [hobbies]

//Using spread operator (...). Pulls elements out of things in the array
const copiedArray3 = [...hobbies]
const copiedPerson = {...person}

console.log(copiedArray)
console.log(copiedArray2)
console.log(copiedArray3)
console.log(copiedPerson)

//Rest : Opposite of spread
const toArray = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3]; 
} // Not flexible and scalable

const toArray2 = (...args) => {
    return args 
} // Not flexible and scalable


console.log(toArray(1,2,3))
console.log(toArray2(1,2,3))
console.log(toArray2(1,2,3,4,5))