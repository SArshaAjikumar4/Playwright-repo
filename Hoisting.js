console.log(a)// it will return undefined 
var a=10
console.log(a)



//temporal dead zone
//console.log(b)    //it will show error
let b=20//it will be dead zone 
console.log(b)


//function hoisting
greet()
function greet()
{
    console.log('hello')
}