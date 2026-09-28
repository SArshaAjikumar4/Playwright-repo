let name="riys" // it is global scope .. bcz it not dec in any fun
function outer()
{
    let age=25 //outer fun scope
function inner()
{
    let city="kochi" //inner fun scope
    console.log(name)
    console.log(age)
    console.log(city)
}
inner()
}
outer()
