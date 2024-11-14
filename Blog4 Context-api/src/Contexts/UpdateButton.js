import { CommonContext } from "./CommonContext";



function UpdateButton()
{
    
    return(
    <CommonContext.Consumer>
        {
        ({color, name,  updateColor})=>(
            <>
            <h1 style={{backgroundColor:color}}>this is my UpdateButton.js {name}</h1>
            <button onClick={updateColor}> updateColor</button>
            </>
        )
        }
    </CommonContext.Consumer>
    )
}

export default UpdateButton;