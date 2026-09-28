const promise=new Promise((resolve,reject)=>{
    let sucess=false
    if(sucess)
    {
        resolve("login sucessful")
    }
    else
    {
        reject("login failed")
    }
})
promise
.then(results=>console.log(results))
.catch(error=>console.log(error))
.finally(()=>console.log("request completed"))
