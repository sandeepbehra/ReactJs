import React from "react";
import { Link } from "react-router-dom";

function NavBar()
{
    return(
        <div>
            <ul>
                <li><Link to={'/about'}>About Link</Link></li>
                <li ><Link to={'/'}> Home Link</Link></li>
            </ul>

        </div>

    )
}

export default NavBar;