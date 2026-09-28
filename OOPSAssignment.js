//Inheritence
class Car
{
    brand()
    {
        console.log("Brand : BMW")
    }
}
class Car1 extends Car
{
    color()
    {
        console.log("color : red")
    }
}
const obj=new Car1()
obj.brand()
obj.color()

console.log(".......................................................................................")

//Encapsulation

class emp
{
    #emp_name="ram" //private dec
    getemp()
    {
        return this.#emp_name
    }

}
const obj1=new emp()
console.log("Emp name is "+ obj1.getemp())

console.log(".......................................................................................")

//Polymorphism
class Stud1
{
    mark()
    {
       let maths=50
       let eng=20
       let total=maths + eng
        console.log("stud1 total mark:"+total)
    }
}
class Stud2
{
    mark()
    {
       let maths=40
       let eng=60
       let total=maths + eng
        console.log("stud2 total mark:"+total)
    }
}
const obj3=new Stud1()
obj3.mark()
const obj4=new Stud2()
obj4.mark()

//Abstraction

console.log("..................................................................................................................")

class Course
{
    playwright(fee)
    {
        console.log("fee: "+ `${fee}`)
    }
}
const obj5=new Course()
obj5.playwright(42000)