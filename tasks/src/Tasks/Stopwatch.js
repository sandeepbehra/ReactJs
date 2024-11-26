import { useEffect, useState } from "react"

function Stopwatch()
{
    
    const[minute, setMenute] = useState(0)
    const[second, setSecond] = useState(0)
    
    useEffect(()=>{
        
    })




    
    
    return(
        <>
        <p>Stop Watch</p>
        {
            minute<10?`0${minute}`: minute
        }
        :
        {
            second<10?`0${second}`: second
        }
        <br></br><br>
        </br>
        <button onClick={stopWatch}>Stop</button>
        <button onClick={resetWatch}>Reset</button>
        
        </>

    )
}

export default Stopwatch;