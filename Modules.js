/*COMMON JS MODULE
Math.js
----------
function add()
{
return a+b
}    if we need to use this fun{math.js} in another fun{app.js} first export it
module.exports=add()



app.js
-------
const add=require('./Math.js')
console.log (add(10,20))
*/

//.............................................................................................................................

/*ES MODULE

Math.js
----------
export function add()
{
return a+b
} 

app.js
-------
import{add}from'./Math.js'
console.log (add(10,20))

 */
