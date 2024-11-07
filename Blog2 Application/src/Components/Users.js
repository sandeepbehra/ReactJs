import { useParams } from "react-router-dom";

function Users()
{
    const  params = useParams();
    const {name} = params
    return(
       <h3>This is {name} from Users Page</h3>
    )
}

export default Users;