import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Login(){
    const navigate = useNavigate()
    function Logged(){
     localStorage.setItem('log',true);
     navigate('/')
     
    }

    function deleteStorage()
    {
        localStorage.removeItem('log');
        navigate('/login')
    }

    // useEffect(()=>{
    //     if(localStorage.getItem('log')){
    //      navigate('/')
    //     }
    //    }) 
    if(localStorage.getItem('log')){
        return(
            <div>
                <p><h3>Logged in</h3></p>
                <br></br><br></br>
                <p>Do you want Log Out ? </p>
                <button onClick={()=>deleteStorage()}>Log Out</button>
            </div>
        )
    }
    return(
        <div>
            <input type="text" placeholder="enter email"></input><br></br><br></br>
            <input type="password" placeholder="enter password"></input><br></br><br></br><br></br><br></br>
            <button onClick={()=>Logged()}>Login</button>
        </div>
        
    )
}

export default Login;