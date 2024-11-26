import { useState } from "react";

function Task1()
{

    let arr =[{name:'IN', country: 'India', cities:[

    'udaypur','jashpur']},

    {name:'PAK', country: 'Pakistan', cities:[

        'lahore','visa']},
        {name:'USA', country: 'America', cities:[

            'california','disney']}
]


const [UserItem, setItem] = useState(0);
let val = UserItem;
    return(
        <div>
           
        <select onChange={(e)=>setItem(e.target.value)}>
            {
                arr.map((item,i)=>
                    <option value ={i} >{item.country}</option>
                )
            }
        </select>

        
        <select>
            {
               
                arr[val].cities.map((itm,it)=>
                    <option>{itm}</option>
                )


                // <option>{arr[{UserItem}]}</option>
            }
        </select>

        </div>


        
       
    )
}

export default Task1;