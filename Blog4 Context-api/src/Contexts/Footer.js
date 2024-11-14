import { CommonContext } from "./CommonContext";




function Footer()
{
    
    return(
    <CommonContext.Consumer>
        {
        ({color,name})=>(
            <h1 style={{backgroundColor:color}} className="FooterClass">this is my Footer.j {name}</h1>
        )
        }
    </CommonContext.Consumer>
    )
}

export default Footer;