class Animal
{
    eat()
    {
        console.log("Animal is Eating")
    }
}
class Dog extends Animal
{
    bark()
    {
        console.log("Dog is barking")
    }
}
const obj1=new Dog()
obj1.eat()
obj1.bark()