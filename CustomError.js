class Usernotfound extends Error{
    constructor(message)
    {
        super(message)
    }
}
function login(username)
{
    if(username!=="admin")
    {
        throw new Usernotfound("invalid username")
    }
    else
    {
        console.log("login sucessfull")
    }

}
login("admin")