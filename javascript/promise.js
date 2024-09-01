//promise to handle asynchronous operations
//not wait for result run parallel in asynchronous
//give acknowledgemnt
//promise handle result of asynchronous operation
function flipping(){
    return new Promise((resolve,reject)=>{
        const val = Math.round(Math.random()*1)
        val?resolve('Head'):reject('Tails')
    })
}

async function result(){
    try{
        const result = await flipping()
        console.log(result)
    }
    catch(err){
console.log(err)
    }
}