//non parametrized
function greet()
{
    console.log("hello")
    
}
greet()

console.log("......................................................................")
//parametrized fun
function message(yourmessage)
{
    console.log("u r message is "+ yourmessage)

}
message("wellcome")

console.log("......................................................................")
//function with return type

let a,b
function add(a,b)
{
    return(a+b)

}
console.log(add(4,5))

console.log("......................................................................")
//Arrow function
const samplemessage=()=>
{
    console.log("hello")
}
samplemessage()

//parametrized arrow fun

const num=(o)=>
{
 console.log("number is " +o)
}
num(6)

//parametrized return type using arrow fun

let e
let w
const addition=(e,w)=>
{
    c=e+w
    return(c)

}

console.log(addition(5,5))
//default parameter

function guest(name="default guest")
{
    console.log("hello "+name)
}
guest()// if u need output like hello riya then u should give the riya in fguest eg:  guest("riya")                     