import { CommonContext } from "./CommonContext";



function Header()
{
    
    return(
    <CommonContext.Consumer>
        {
        ({color,name})=>(
            <h1 style={{backgroundColor:color}}>this is my Header.js {name}</h1>
        )
        }
    </CommonContext.Consumer>
    )
}

export default Header;