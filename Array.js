// ARRAY DECLARATION:: 
// array literal format
let course=["mca","bca","mba","cyber"]
console.log(course)

//empty array format
let nums=[];
nums[0]=10;
nums[1]=20;
nums[2]=30;
console.log(nums);

//Using array constructor 
let colrs=new Array("red","green","yellow")
console.log(colrs)

//creating array specific size
let myArray=new Array(5)
console.log(myArray)
console.log(myArray.length)

//creating array using arra.of fun
let numbers=Array.of(10,20,30)
console.log(numbers)

//inserting elemnts into array using push 
let myNum=[]
myNum.push(2)
myNum.push(4)
myNum.push(5)
console.log(myNum)


//iteration using for loop
let a=["2","3","4","5"]
for(let i=0;i<=3;i++)
{
    console.log(a[i])
}

//for.of

let fruit=["apple","orange","grape"]
for(let fruits of fruit)
{
    console.log(fruits)
}

//for each

let fruit1=["apple","orange","grape"]
fruit1.forEach(function(fruit){
    console.log(fruit)
})

//for in
for(let index in fruit)
{
    console.log(index,fruit1[index])
}

//MAP
let numss=[1,2,3]
let double=numss.map(num=>num*2)
console.log(double)

//filter
let num1=[10,20,30,40]
console.log(num1.filter(num=>num>15))
let newArray=num1.filter(num=>num>15)
console.log(newArray)
console.log(num1)

//FIND
console.log(num1.find(num=>num>20))


let lang=["java","python","C","Php"]
//POP
lang.pop()
console.log(lang)

//unshift
lang.unshift("c#","C++")
console.log(lang)

//shift
lang.shift()
console.log(lang)

//include
console.log(lang.includes("pytho"))

//index of
console.log(lang.indexOf("java"))

//reverse
lang.reverse()
console.log(lang)

