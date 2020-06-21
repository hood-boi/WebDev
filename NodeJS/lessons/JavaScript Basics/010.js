//Promises : A solution to call back hell


//Callback hell mode
const fetchData = (callback) =>{ 
    setTimeout(()=>{
        callback('Done!')
    }, 1500)
}

setTimeout(()=>{
    console.log('Timer is done!');
    fetchData(text=>{
        console.log('1 : ' + text)
            fetchData(text2=>{
                console.log('2 : ' + text2)
            })    
    })
}, 2000)

//Promise mode
const fetchData2 = () => {
    const promise = new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve('Done!')
        }, 1500)
    })
    return promise; //Returns immediateley
}

setTimeout(()=> {
    console.log('Timer is done!');
    fetchData2()
        .then((text) => {
            console.log('1 : ' + text)
            return fetchData2()
        })
        .then((text2) =>{
            console.log('2 : ' + text2)
            return fetchData2()
        })
}, 2000) 
