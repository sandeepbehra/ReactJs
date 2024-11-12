import { Link, Outlet, useSearchParams } from "react-router-dom";

function Filter(){
    const[Params,setParams] = useSearchParams();
return(
<div><h2>This is filter Page</h2>

    <p><h3>Age : {Params.get('age')}</h3> </p>
    <br>
    </br>
    <br>
    </br>
    <input type="text" placeholder="enter text" onChange={(e)=>{setParams({text : e.target.value})}}
    ></input>
    <br>
    </br>
    <Link to={'company'}>Company</Link>
    <Link to={'channel'}>Channel</Link>
    <Link to={'other'}>Other</Link>
    <Outlet></Outlet>
    </div>
)

}
export default Filter;