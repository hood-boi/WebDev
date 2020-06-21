//Objects : Key->Value pairs

const person = {
    name : 'Max',
    age : 29,
    greet : function(){
        console.log("Hi!, I am " + this.name)
    },
    greet2() {
        console.log("Hi!, I am " + this.name)
    },
    greet3 : () => { //This fails
        console.log("Hi!, I am " + this.name)
    },
}

console.log(person)
person.greet()
person.greet2()
person.greet3()