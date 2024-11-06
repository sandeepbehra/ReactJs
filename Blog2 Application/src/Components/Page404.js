import React from "react";
import { Link } from "react-router-dom";
function Page404()
{
return(
    <div><h2>
        404 Page Found
    </h2>
    <Link to={'/'}>redirecting home page</Link>
   </div>
    
)
}
export default Page404;