import { CommonContext } from "./CommonContext";



function Main()
{
    
    return(
    <CommonContext.Consumer>
        {
        ({color,name})=>(
            <h1 style={{backgroundColor:color}}>this is my Main.js {name}</h1>
        )
        }
    </CommonContext.Consumer>
    )
}

export default Main;