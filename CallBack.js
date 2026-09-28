function greet(name)
{
    console.log("Hello,"+name)
}



function processoruser(callback)
{
    let user="sham"
    callback(user)  
}

processoruser(greet)