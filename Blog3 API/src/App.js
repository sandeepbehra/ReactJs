import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


// --------67,68 form and 'PUT' method and here create all thing get, post,delete and put

// function App()
// {
// const[data,setdata] = useState([])
// const[name,setname]   = useState()
// const[email,setemail]   = useState()
// const[address,setaddress]   = useState()
// const[userId,setuserId]   = useState()

//   useEffect(()=>
// {
//   fetch("http://localhost:3000/users").then((res)=>{
//     res.json().then((result)=>{
//      setdata(result)
//     })
//   })
// })


// function DeleteItem(url)
// {
// fetch("http://localhost:3000/users/"+url,{
//   method : 'DELETE'
// })
// }

// function UpdateItem(id)
// {
//   setname(data[id-1].name)
//   setemail(data[id-1].email)
//   setaddress(data[id-1].address)
//   setuserId(id)
// }

// let updatedItem = {name,email,address}

// function UpdatedSubmit(id)
// {
//   fetch("http://localhost:3000/users/"+id,{
//     method: 'PUT',
//     headers :{
//       'Accept': 'appliction/json',
//       'Content': 'appliction/json'
//     },
//     body : JSON.stringify(updatedItem)
//   })
// }

// function AddItem()
// {
//   fetch("http://localhost:3000/users",{
//     method : 'POST',
//     headers: {
//       'Action': 'appliction/json',
//       'Content': 'appliction/json',
//     },
//     body : JSON.stringify(updatedItem)
//   })
// }

// return(
//   <div className='App'>
//     <table border={1}>
//       <tbody>
//         <tr>
//           <th>Id</th>
//           <th>Name</th>
//           <th>Email</th>
//           <th>Address</th>
//           <th>Operation</th>
//           <th>Updation</th>
//         </tr>
//         {
//           data.map((item,i)=>
//           <tr>
//             <td>{item.id}</td>
//             <td>{item.name}</td>
//             <td>{item.email}</td>
//             <td>{item.address}</td>
//             <td><button onClick={()=>DeleteItem(item.id)}>Delete</button></td>
//             <td><button onClick={()=>UpdateItem(item.id)}>Update</button></td>
//           </tr>)
//         }
//       </tbody>
//     </table>
//     <input type='text' placeholder='name'  value={name} onChange={(e)=>setname(e.target.value)}></input><br></br><br></br>
//     <input type='text' placeholder='email' value={email} onChange={(e)=>setemail(e.target.value)}></input><br></br><br></br>
//     <input type='text' placeholder='address' value={address} onChange={(e)=>setaddress(e.target.value)}></input><br></br><br></br>
//     <button onClick={()=>UpdatedSubmit(userId)}>Update</button>
//     <button onClick={AddItem}>Add</button>
//   </div>
// )



// }






// -----------------66 DELETE method with API

// function App()
// {

// const[data,setdata] = useState([])

//   useEffect(()=>
// {
//   fetch("http://localhost:3000/users").then((res)=>{
//     res.json().then((result)=>{
//      setdata(result)
//     })
//   })
// })


// function DeleteItem(url)
// {
// fetch("http://localhost:3000/users/"+url,{
//   method : 'DELETE'
// })
// }
// return(
//   <div className='App'>
//     <table border={1}>
//       <tbody>
//         <tr>
//           <th>Id</th>
//           <th>Name</th>
//           <th>Email</th>
//           <th>Address</th>
//           <th>Operation</th>
//         </tr>
//         {
//           data.map((item,i)=>
//           <tr>
//             <td>{item.id}</td>
//             <td>{item.name}</td>
//             <td>{item.email}</td>
//             <td>{item.address}</td>
//             <td><button onClick={()=>DeleteItem(item.id)}>Delete</button></td>
//           </tr>)
//         }
//       </tbody>
//     </table>
//   </div>
// )



// }

 



// -----------------64 has not needed ,here  65 POST method with API
// function App(){
//   const[name, setName]  = useState();
//   const[email, setEmail]  = useState();
//   const[address, setAddress]  = useState();
//   let data = {name,email,address};
//   function SubmitForm()
//   {
//     fetch("http://localhost:3000/users" ,{
//       method : 'POST',
//       headers : {
//         Action : 'application/json',
//         Content : 'application/json'
//       },

//       body : JSON.stringify(data)

//     })
    

//     alert("Form has submitted")
//     setAddress("")
//     setEmail("")
//     setName("")
//   }


//   return(
//     <div className='App'>
//       <h1>fill entry for users Api</h1><br></br>
//      <input type='text' placeholder='enter name' value={name} onChange={(e)=>setName(e.target.value)}></input><br></br><br></br>
//      <input type='text' placeholder='enter email' value={email} onChange={(e)=>setEmail(e.target.value)}></input><br></br><br></br>
//      <input type='text' placeholder='enter address' value={address} onChange={(e)=>setAddress(e.target.value)}></input><br></br><br></br>
//      <button onClick={SubmitForm}>Submit</button>
//     </div>
//   )
// }








// ---------------------------63 , GET method in API from React
// function App() {
//   const [data, setData] = useState([]);
//   useEffect(() => {
    
    
//     fetch("http://localhost:3000/users").then((res) => {
//       res.json().then((result) => {
//         setData(result)
//         // console.log(data)

//       })
//     })
//   },[])


//   return (
//     <div className="App">
//       <h1>API Call for  GET method using react</h1><br></br>
//       <table border="1">
//         <tbody><tr>
//           <th>ID</th>
//           <th>Name</th>
//           <th>Email</th>
//           <th>Address</th>
//           <th>Operation</th>

//         </tr>
//         {
//           data.map((item,i) =>
//             <tr>
//               <td>{item.id}</td>
//               <td>{item.name}</td>
//               <td>{item.email}</td>
//               <td>{item.address}</td>
//               <td><button>Delete</button></td>

//             </tr>


//           )
//         }
//         </tbody>
//       </table>

//     </div>
//   );
// }

export default App;
