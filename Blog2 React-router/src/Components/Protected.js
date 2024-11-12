import { Component, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Protected(props)
{
    const navigate = useNavigate()
    const {Component} = props;
   useEffect(()=>{
    if(!localStorage.getItem('log')){
     navigate('/login')
    }
   }) 

   return(
    <div>
        <Component></Component>
    </div>
   )

}


export default Protected;