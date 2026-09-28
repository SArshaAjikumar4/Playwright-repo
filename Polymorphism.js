class Playwright
{
    learn()
    {
        console.log("learning playwright")
    }
}
class Javascript extends Playwright
{
    learn()
    {
                console.log("learning javascript")

    }
}
const obj=new Javascript()// this for javascrpt class  bcz same fun is used that we need create different obj for diferent class
obj.learn()

const obj1=new Playwright()// this for playwright class
obj1.learn()
