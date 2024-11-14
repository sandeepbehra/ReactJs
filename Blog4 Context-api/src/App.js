import logo from './logo.svg';
import './App.css';
import './index.css'
import { Component, useState } from 'react';
import User from './User';
import { CommonContext } from './Contexts/CommonContext';
import Main from './Contexts/Main';
import Header from './Contexts/Header';
import Footer from './Contexts/Footer';
import UpdateButton from './Contexts/UpdateButton';

class App extends Component {

    constructor(){
        super()
        this.updateColor = () => {
            this.setState({ color: "green" });
        }
        this.state = { color: "red", updateColor: this.updateColor, name: "sandeep" };

    }


    render() {
        return (

            <CommonContext.Provider value={this.state}>
               <Header></Header>
                <h1>Apps from provider</h1>
                <Main></Main>
                <UpdateButton></UpdateButton>
                <Footer></Footer>
            </CommonContext.Provider>

        )
    }

}












// ---------------------------------------71 state with object---------------------
// function App()
// {

//   const[data,setdata] = useState({name: "Sandeep", age : 25 })

//   return(
//     <div className='App'>

{/*  problem */ }

{/* <input type='text' value={data.name} onChange={(e)=>setdata({name:e.target.value})}></input><br></br><br></br>
    <input type='text' value={data.age} onChange={(e)=>setdata({age:e.target.value})}></input><br></br><br></br> */}

{/* Solution 1st */ }

{/* <input type='text' value={data.name} onChange={(e)=>setdata({age:data.age,name:e.target.value})}></input><br></br><br></br>
<input type='text' value={data.age} onChange={(e)=>setdata({name:data.name,age:e.target.value})}></input><br></br><br></br> */}

{/* Solution 3 */ }

{/* <input type='text' value={data.name} onChange={(e)=>setdata({...data, name:e.target.value})}></input><br></br><br></br>
    <input type='text' value={data.age} onChange={(e)=>setdata({...data, age:e.target.value})}></input><br></br><br></br>

    <h3>{data.name}</h3>
    <h3>{data.age}</h3>
    </div>
  )
} */}







// ---------------70 previouse props , used User.js----------

// function App()
// {

//   const[count,setcount] = useState()
//   return(
//     <div className='App'>
//     <User count ={count}></User>
//     <button onClick={()=>setcount(Math.floor(Math.random()*10))}>Change</button>
//     </div>
//   )
// }





//   ------------------ 69 , previouse state
// function App() {

//   const [Count,setCount] = useState(0);
//   const [preCount,setpreCount] = useState(0);

//   function ChangeState()
//   {
//     let val =Math.floor(Math.random()*10);
//     setCount((pre)=>{
//       //this previouse state
//       setpreCount(pre);
//       return val;
//     });


//     //  tricky question
//     //for(let i=0;i<5;i++)
//     // {
//     //   setCount((pre)=>pre+1)  //setCount(Count+1)
//     // }
//   }
//   return (
//     <div className="App">
//      <h1>Priviouse state</h1><br></br><br></br>
//      <h3>Current State : {Count}</h3>
//      <h3>Previouse State : {preCount}</h3>

//      <br></br><br></br>

//      <button onClick={ChangeState}>Update</button>
//     </div>
//   );
// }

export default App;
