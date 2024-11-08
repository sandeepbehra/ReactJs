import React from "react";
import { useNavigate } from "react-router-dom";

function Home(){
   const navigate = useNavigate();
   const navigateFunction =(url)=>{
      navigate(url)
   }
   return (<div>
        <p><h1>HomePage:-</h1> This is My Home Page ok</p>
       <p >what are you doing</p>
       <br>
       </br>
          {/* by only useNavigate */}
       {/* <button onClick={()=>navigate('/about')}>Click for About</button>
       <button onClick={()=>navigate('/filter')}>Click for Filter</button> */}
         
         
         
         {/* by function calling */}
        <button onClick={()=>navigateFunction('/about')}>Click for About</button>
       <button onClick={()=>navigateFunction('/filter')}>Click for Filter</button>
    </div>)
}

export default Home;