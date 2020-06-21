const hobbies = ['Sports', 'Cooking', 1, true, {weed : 420}]
hobbies.push('Dank')
console.log(hobbies)

//Why is there no error when pushing to hobbies (since it's a constant).
//Because hobbies is a reference type. Hobbies is still pointing to the same location.