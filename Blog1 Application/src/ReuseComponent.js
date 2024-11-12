import React from "react";
import { Button } from "react-bootstrap";

function ReuseComponent(props){
    let child = "child"
    return(
<div>
        <h2> ReuseComponent: hello</h2>
        <h2>came from parent : {props.name}</h2>
        <Button onClick={()=>props.method(child)}>Click me</Button>
        </div>
    )
}

export default ReuseComponent;