import React, {useState} from 'react'



function Profile(){

    function getSubmit(e)
    {
        if(uname.length<5 || password.length<5)
        {
            alert("Invalid credentials")
        }
        else{
            alert("Congratulations , Valid credentials")
        }
        e.preventDefault();
    }

    const[uname,SetUname] = useState("")
    const[password,SetPassword] = useState("")
    const[nameerr,Setnameerr] = useState("")
    const[passerr,Setpasserr] = useState("")
    
    function getUserName(val){
        SetUname(val.target.value);
        if(val.target.value.length<3)
        {
        Setnameerr(true)
        }
        else
        Setnameerr(false)
    }
    function getPassword(val){
        SetPassword(val.target.value);
        if(val.target.value.length<3)
            {
            Setpasserr(true)
            }
            else
            Setpasserr(false);
    }


return(
    <form onSubmit={getSubmit}>
        <input type='text' placeholder='enter username' onChange={getUserName}></input>{nameerr?<span>Not Valid</span>:""}
        <br></br>
        <br></br>
        <input type='password' placeholder='enter password'  onChange={getPassword}></input>{passerr?<span>Not Valid</span>:""}
        <br></br>
        <br></br>
        <button type='submit'>log in</button>
    </form>
)
}
export default Profile