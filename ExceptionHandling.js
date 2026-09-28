/*let x=0
try
{
    if(x===0)
        {
    throw new Error("cannot divide by zero")// this is messaage//in js cannod divide by zero it cause infity
        }
let res=10/x
console.log(res)
}
catch(error)// to handle the error
{
    console.log("An error occured:",error.message)

}*/


try
{
    sample()
    
}
catch(error)
{
    console.log("Error:",error.message)
}
finally
{
    console.log("Execution finished")
}