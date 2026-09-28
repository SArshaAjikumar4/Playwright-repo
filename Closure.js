function outer()
{
    let name="irs"
    function inner()
    {
        console.log(name)
    
    }
    return inner
}
const s=new outer()
s()