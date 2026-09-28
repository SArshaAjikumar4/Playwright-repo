//object creation

//using object literal format
const person={
    name:"riya",
    age:23,
    greet()
    {
        console.log("helo")
    }
}
console.log(person.name,person.age) // to invoke property

person.greet()

// using new Object constructor
const emp=new Object()
emp.name="sha"
emp.salary=7000
console.log(emp)

//JSON Object creation  it is test format it used to store  and exchange data....pass through key value pair and string should be in double quote
//in json functions not allowed only data                          

        const stud={
            "name":"ram",
            "age":55,
            "dept":"civil"
        }
        console.log(stud)
