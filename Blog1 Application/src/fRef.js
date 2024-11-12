import React from "react";
import { forwardRef } from "react";



function fRef(){
    return(
        <div>
            {/* <input type="text" ref={ref}></input> */}
            <h1>ft</h1>
        </div>
    )

}

export default React.forwardRef(fRef);