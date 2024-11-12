import { useRef,useEffect } from "react";
function User(props)
 {
  const val = useRef();
  useEffect(()=>
{
    val.current =  props.count;
})
    return(
        <div>
            <h3>User</h3>
            <h3>Current props : {props.count}</h3>
            <h3>previous props : {val.current}</h3>
        </div>
    )
 }

 export default User;