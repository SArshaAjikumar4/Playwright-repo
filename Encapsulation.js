class Stud
{
    #mark=56 // # used to make it private
    getMarks()
    {
        return this.#mark

    }
}
const obj=new Stud()
console.log(obj.getMarks())
//console.log(obj.#marks)
