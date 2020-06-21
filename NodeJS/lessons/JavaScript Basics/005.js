//Arrays

const hobbies = ['Sports', 'Cooking', 1, true, {weed : 420}]

for (let hobby of hobbies){
    console.log(hobby);
}


console.log(hobbies.map(hobby =>{
    return 'Hobby: ' + hobby;
}))

console.log(hobbies.map(hobby =>'Hobby: ' + hobby))
console.log(hobbies) // Old array does not get edited when you call map
