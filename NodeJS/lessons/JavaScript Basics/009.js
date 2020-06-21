//Async code

//Executes some shit after a certain period of time
setTimeout(() => { // Callback function
    console.log('Time is done!')
},1000) // 1 second

console.log('Hello')

//Callback HELL!
const fetchData = (callback) =>{ 
    setTimeout(()=>{
        callback('Done!')
    }, 1500)
}
setTimeout(()=>{
    fetchData(text=>{
        console.log(text)
    })
}, 2000)