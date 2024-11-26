import { useState } from "react";

function Task2() {

    let games = ['cricket', 'footbal', 'badminton'];
    let days = ['weekend', 'weekday'];

    const [game, setGame] = useState();
    const [day, setDay] = useState();
    //  let check = false;
    const [check, setCheck] = useState(false)

    function Handle(v) {

        console.log("asv")

        setDay(v)
        setCheck(true)
        // check = true;
        console.log(check)




    }


    return (
        <div>
            <h2>Which Game ?</h2>
            {
                games.map((item, i) =>
                    <> <input type={"radio"} name="games" value={item} onChange={(e) => setGame(e.target.value)} /> <label>{item}</label>
                        {/* <label>{item}</label> */}
                    </>
                )
            }
            <h2>Which Days</h2>
            {
                days.map((item, i) =>
                    <><input type={"radio"} name="days" value={item} onChange={(e) => Handle(e.target.value)} /><label>{item}</label>
                    </>


                )
            }


            {check ? <><h2>You will play</h2><p>{game} on {day}</p></> : null}








        </div>
    )
}

export default Task2;