import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react';
import './style.css'
import style from './forcss.module.css'
import { useRef } from 'react';
import fRef from './fRef';



function App() {

    let inputRef = useRef(null);

    function Handles() {
        inputRef.current.value = "343435";
    }
    return (
        <div className='App'>
            <fRef></fRef>

            <button onClick={Handles}>click</button>

        </div>
    )
}




















// -------43 useRef--------------------
// function App(){
//     let inputRef = useRef(null);

//     function Handels(){
//        inputRef.current.value = "1192"
//     //    inputRef.current.style.backgroundColor ="green"
//     //    inputRef.current.focus()


//     }
//     return(
//         <div className='App'>
//          <input type='text' ref={inputRef}></input>
//          <br>
//          </br>
//          <button onClick={()=>Handels()} >click</button>
//         </div>
//     )
// }











// -------------------42 Ref in react------------
// class App extends Component{
//     constructor(){
//         super();
//         this.inputRef = createRef();
//         this.outputRef = createRef();
//     }
//     Handler() {
//         this.inputRef.current.value = "1000";
//         this.outputRef.current.value = "Sandeep";
//     }
// render(){
//     return(
//         <div className='App'>
//             <input type='text'ref={this.inputRef}></input>
//             <br></br>
//             <input type='text'ref={this.outputRef}></input>
//             <br></br>
//             <button onClick={()=>this.Handler()}>Click</button>
//         </div>
//     )

// }
// }






// -------------39 lifting state up with ReuseComponent.js file
// function App() {
//     // const[count,setCount] = useState("hello")
//     let data = "baf";
//     const[count,setCount] = useState("hogya")

//     function parentAlert(val) {
//         alert(val)
//     }
//     return (
//         <div className='App'>
//             <ReuseComponent name={data} method ={parentAlert}/>
//         </div>
//     )
// }







// ------------------37,38 reuse component , react fragments-----

// function App()
// {
//    const arr = [1,2,3,4,5,6];


//    return(
// <div className='App'> 
//     {
//     arr.map((item,i)=>
//     <ReuseComponent></ReuseComponent>

//     )
// }
// </div>
//     )
// }





















//----------------------35 List with bootsrap and unique key , 36 Nested list with nested array

// function App() {
//     const objects = [{
//         name: "sandeep", claas: "10th", Address: [{ Hn: 98, street: "kps", state: "cg", pin: 123 },
//         { Hn: 98, street: "kps", state: "cg", pin: 123 },
//         { Hn: 98, street: "kps", state: "cg", pin: 123 },
//         { Hn: 98, street: "kps", state: "cg", pin: 123 }
//         ]
//     },
//     {
//         name: "franky", claas: "10th", Address: [{ Hn: 98, street: "kps", state: "cg", pin: 123 },
//         { Hn: 98, street: "kps", state: "cg", pin: 123 },
//         { Hn: 98, street: "kps", state: "cg", pin: 123 },
//         { Hn: 98, street: "kps", state: "cg", pin: 123 }
//         ]
//     },
//     {
//         name: "lucky", claas: "10th", Address: [{ Hn: 98, street: "kps", state: "cg", pin: 123 },
//         { Hn: 98, street: "kps", state: "cg", pin: 123 },
//         { Hn: 98, street: "kps", state: "cg", pin: 123 },
//         { Hn: 98, street: "kps", state: "cg", pin: 123 }
//         ]
//     },
//     {
//         name: "Ocas", claas: "10th", Address: [{ Hn: 98, street: "kps", state: "cg", pin: 123 },
//             { Hn: 98, street: "kps", state: "cg", pin: 123 },
//             { Hn: 98, street: "kps", state: "cg", pin: 123 },
//             { Hn: 98, street: "kps", state: "cg", pin: 123 }
//         ]}]
//     return (
//         <div className='App'>
//             <Table striped bordered hover variant="dark">
//                 <tbody>
//                     <tr>
//                         <th>S.no.</th>
//                         <th>Name</th>
//                         <th>Class</th>
//                         <th>Address</th>
//                     </tr>
//                     {
//                         objects.map((item,i) =>
//                             <tr>
//                                 <td>{i+1}</td>
//                                 <td>{item.name}</td>
//                                 <td>{item.claas}</td>
//                                 <td>

//                                     <Table striped bordered hover variant="dark">
//                                         <tbody>
//                                             <tr>
//                                                 <th>HN</th>
//                                                 <th>Street</th>
//                                                 <th>Pin</th>
//                                                 <th>State</th>
//                                             </tr>
//                                             {
//                                                 item.Address.map((data,k) =>
//                                                     <tr>
//                                                         <td>{data.Hn}</td>
//                                                         <td>{data.street}</td>
//                                                         <td>{data.pin}</td>
//                                                         <td>{data.state}</td>
//                                                     </tr>)
//                                             }
//                                         </tbody>
//                                     </Table>

//                                 </td>
//                             </tr>
//                         )
//                     }
//                 </tbody>
//             </Table>
//         </div>
//     )
// }









// -------------34  handle array with List---------------------
// function App() {
//     const arr = [2, 3, 4, 4, 4, 45, 46];
//     const objects = [{ name: 'Sandeep', email: 'sandy@123', age: 35 },
//     { name: 'deepak', email: 'deep@123', age: 95 },
//     { name: 'dilip', email: 'dy@123', age: 45 },
//     { name: 'praveen', email: 'pky@123', age: 25 },
//     { name: 'Vikas', email: 'salku@123', age: 15 }
//     ]
//     return (
//         <div className='App'>

//             <table border="1">
//                 <tr>
//                     <th>Name</th>
//                     <th>Email</th>
//                     <th>Age</th>
//                 </tr>
//                 {
//                     objects.map((item) =>
//                         <tr>
//                             <td>{item.name}</td>
//                             <td>{item.email}</td>
//                             <td>{item.age}</td>
//                         </tr>

//                     )
//                 }

//             </table>
//         </div>



//     )
// }


// ----------------------------------------#32,33 style type in Reactjs/ bootstrap install --------------------
// function  App(){
//     return(
//         <div className='App'>
//             <h1 className='type1'>Type 1 use normal stylesheet by creating css file</h1>
//             <h1 style={{backgroundColor:'yellow', color:'black'}}>Type 2 use inline css</h1>
//             <h1 className={style.type3}>Type 3 css with module</h1>
//             <Button>click here</Button>
//             <Button variant="warning">Warning</Button>

//         </div>
//     )
// }



// ----------------------------------------#30 and 31- useEffect apply on state and props --------------------

// function App(){


//     const[Count,setCount] =useState(1)
//     const[Data,setData] =useState(21)
//     useEffect(()=>{
//         console.log("useEffect has Called by data")
//     },[Data])


//     return(
//         <div className='App'>
//            <h1>Count : {Count}</h1> 
//            <h1>Data : {Data}</h1>
//            <button onClick={()=>setCount(Count+1)}>Update Count</button> 
//            <button onClick={()=>setData(Data+1)}>Update Data</button> 
//         </div>
//     )
// }








// ----------------------------------------#21---------------------
// class App extends Component
// {
//     constructor(){
//         super();
//         this.state ={data: 1}
//         // console.log("This is Constructor") //1st call
//     }

// render(){
//     // console.log("This is Render") // 2nd call
//     return(
//         <div className='App'>
//             <h1>Hii Dear</h1>
//             <br></br>
//             <h1>{this.state.data}</h1>
//             <br></br>
//             <button onClick={this.setState({data:9})}>Click here</button>
//         </div>
//     )
// }

// }






























// -----------------------vedio 20 Basic Form validation----
// made Profile component where make basic form and import here


// function App(){

//     function Display(){
//         alert("Displaying Your name")
//     }
//     return(
//         <div className='App' >
//             <StudentForClass data ={Display}></StudentForClass>
//         </div>
//     )
// }

















// -----------------------vedio 19 Condition rendering , if else,ternary condition<

// function App(){
//     let check = true;

//     if(check){
//        return( <div className='App'>
//         <h1>This is React</h1>
//         </div>)
//     }
//     else{
//    return( <div className='App'>
//     <h1>This is not React</h1>
//     </div>
//    )

//     }

//     return(
//         <div className='App'>
//         {check?<h1>Hello Bharat</h1>:<h1>Hello India</h1>}
//         </div>
//     )

// }









// -----------------------vedio 18 , Basic form-------------------


// function App()
// {

//     function getForm(e){
//         e.preventDefault();
//         console.log("Name :"+name+" Selection :"+selection+" Check :"+check);
//     }
// function getName(val){
//     SetName(val.target.value)
// }
// function getSelection(val){
//     SetSelection(val.target.value)
// }
// function getCheck(val){
//     SetCheck(val.target.value)
// }
//     const[name,SetName] =useState(null)
//     const[selection,SetSelection] =useState(null)
//     const[check,SetCheck] =useState(null)
//     return(
//         <form className='App' onSubmit={getForm}>  
//             <input type='text' placeholder='enter name' onChange={getName}></input>
//             <br></br>
//             <br></br>
//             <select  onChange={getSelection}>
//                 <option>select option</option>
//                 <option>India</option>
//                 <option>Usa</option>
//                 <option>Ger</option>
//             </select>
//             <br></br>
//             <br></br>
//             <input type='checkbox'  onChange={getCheck}></input><span> accept T&C and check</span>
//             <br></br>
//             <br></br>
//             <button type='submit'>Submit</button>


//         </form>
//     )
// }














// -----------------------vedio 16 ,17 Get input box , hide and show -------------------

// function App(){
//     const [data,setData] = useState(null)
//     const [print,setPrint] = useState(false)
//     function getData(val)
//     {

//         setData(val.target.value)

//     }


//     return(
//         <div className='App'>
//             {
//                 print?
//                 <h1>{data}</h1>

//                 :null


//             }<br>
//             </br>
//             <input type='text' placeholder='enter text' onChange={getData}></input><br></br>
//          {/* <button onClick={()=>setPrint(true)}>Click here</button> */}
//             <button onClick={()=>setPrint(!print)}>Show</button>
//             <button onClick={()=>setPrint(!print)}>Hide</button>
//         </div>
//     )
// }

































// -----------------------vedio 15 , props with class component-------------------



// class App extends Component{
//     constructor(){
//         super()
//         this.state ={name:"Sandeep"}
//     }
//     render(){
//         return(
//             <div className='App'>
//                 <h1>hello Dost</h1>
//                 <StudentForClass name = {this.state.name}/><br/>

//                 <button onClick={this.setState({name:"Behra"})}>Update Button</button>
//             </div>
//         )
//     }
// }









// -----------------------vedio 14 , props with functional component-------------------

// function App()
// {
// const [r1,r2] = useState("Sandeep")

//    return (
//    <div className='App'><h1>Hello my World !</h1> 

//    <StudentForFunc name  = {r1} LastName = {"Behra"}/><br/>
//     <button onClick={()=>r2("Raghav")}>Update Button</button>
//    <StudentForFunc name  = {"Nandini"} LastName = {"Behra"}/>
//    </div>)
// }



// ------------------------------vedio 13  one  more practice------------------------
// class App extends Component{

//     constructor(){
//         super();
//         this.state ={data1:1,data2:2, data3:3, data4:4};
//     }

//     IncreaseByTwo(){
//         this.setState({data1 : this.state.data1+2,
//             data2 : this.state.data2+2,
//             data3 : this.state.data3+2,
//             data4 : this.state.data4+2
//         })
//     }

//     render()
//     {
//         return(
//             <div className='App'>
//                 <h1>{this.state.data1}</h1>
//                 <h1>{this.state.data2}</h1>
//                 <h1>{this.state.data3}</h1>
//                 <h1>{this.state.data4}</h1>
//                 <button onClick={()=>this.IncreaseByTwo()}>click here</button>
//             </div>
//         )
//     }
// }














// ---------------------------------------vedio13 state in class component------------------------------
// class App extends Component
// {
//   constructor()
//   {
//     super();
//     this.state ={
//       data: 1
//     }
//   }
// apple()
//  {
//  this.setState({data:this.state.data+1})
//  }


//   render()
//   {
// return(
//   <div className="App">
//     <h1>{this.state.data}</h1>
//     <button onClick ={()=>this.apple()}>click me</button>
//   </div>
// )
//   }
// }
























// --------------------------------------------vedio 12-----------------------------
// function App() {

//   function apple()
//   {
//     pappu("Behra")
//     setData("Pawel")
//   }


//   const [data , pappu] = useState("Sandeep")
//   const [naam , setData] = useState("Gagan")
//   return (
//     <div className="App">
//       <h1>{data}</h1>
//      <button onClick={apple}>click me</button>
//       <h2>{naam}</h2>
//     </div>
//   );
// }












// ------------------------------vedio 11------------------------------------------
// function apple()
// {
//   alert("Sandeep Bhai")
// }

// function App() {
//   return (
//     <div className="App">
//      <button onClick={apple}>click me</button>

//     </div>
//   );
// }




export default App;
