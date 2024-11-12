import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import NavBar from './Components/NavBar';
import Page404 from './Components/Page404'
import Users from './Components/Users'
import Filter from './Components/Filter';
import Company from './Components/Company';
import Channel from './Components/Channel';
import Other from './Components/Other';
import Login from './Components/Login'
import Protected from './Components/Protected';

function App() {


  return (
    <div className='App'>
      <BrowserRouter>
        {/* <Link to={'/about'}>About</Link> simple link create */}
        <NavBar></NavBar>
        <Routes>
          
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/' element={<Protected Component ={Home}></Protected>}></Route>
          <Route path='/about' element={<Protected Component ={About}></Protected>}></Route>
          {/* <Route path='/*' element={<Protected Component ={}></Protected>}></Route> */}
          <Route path='/users/:name' element={<Protected Component ={Users}></Protected>}></Route>
          <Route path='/filter/' element={<Protected Component ={Filter}></Protected>}>

            <Route path='company' element={<Company></Company>}></Route>
            <Route path='channel' element={<Channel></Channel>}></Route>
            <Route path='other' element={<Other></Other>}></Route>


          </Route>

        </Routes>


      </BrowserRouter>
    </div>
  )
}





// --------------------- 56 nestred routing , with filter.js and imoport Outlet in this
// function App() {


//           return (
//             <div className='App'>
//               <BrowserRouter>
//               {/* <Link to={'/about'}>About</Link> simple link create */}
//               <NavBar></NavBar>
//                 <Routes>
//                   <Route path='/' element={<Home></Home>}></Route>
//                   <Route path='/about' element={<About></About>}></Route>
//                   <Route path='/*' element={<Page404></Page404>}></Route>
//                   <Route path='/users/:name' element={<Users></Users>}></Route>
//                   <Route path='/filter/' element={<Filter></Filter>}>

//                   <Route path='company' element={<Company></Company>}></Route>
//                   <Route path='channel' element={<Channel></Channel>}></Route>
//                   <Route path='other' element={<Other></Other>}></Route>


//                   </Route>

//                 </Routes>


//               </BrowserRouter>
//             </div>
//           )
//         }


// ---------------------------55 navigating programmatically-------------------

// in Home.js

// function Home(){
//     const navigate = useNavigate();
//     const navigateFunction =(url)=>{
//        navigate(url)
//     }
//     return (<div>
//          <p><h1>HomePage:-</h1> This is My Home Page ok</p>
//         <p >what are you doing</p>
//         <br>
//         </br>
//            {/* by only useNavigate */}
//         {/* <button onClick={()=>navigate('/about')}>Click for About</button>
//         <button onClick={()=>navigate('/filter')}>Click for Filter</button> */}



//           {/* by function calling */}
//          <button onClick={()=>navigateFunction('/about')}>Click for About</button>
//         <button onClick={()=>navigateFunction('/filter')}>Click for Filter</button>
//      </div>)
//  }

//  export default Home;







// ---------------54 searchParams-------------------------
// imported Filter.js
// import { useSearchParams } from "react-router-dom";

// function Filter(){
//     const[Params,setParams] = useSearchParams();
// return(
// <div><h2>This is filter Page</h2>

//     <p><h3>Age : {Params.get('age')}</h3> </p>
//     <br>
//     </br>
//     <br>
//     </br>
//     <input type="text" placeholder="enter text" onChange={(e)=>{setParams({text : e.target.value})}}></input>
//     </div>
// )

// }
// export default Filter;
// function App() {


//       return (
//         <div className='App'>
//           <BrowserRouter>
//           {/* <Link to={'/about'}>About</Link> simple link create */}
//           <NavBar></NavBar>
//             <Routes>
//               <Route path='/' element={<Home></Home>}></Route>
//               <Route path='/about' element={<About></About>}></Route>
//               <Route path='/*' element={<Page404></Page404>}></Route>
//               <Route path='/users/:name' element={<Users></Users>}></Route>
//               <Route path='/filter' element={<Filter></Filter>}></Route>

//             </Routes>
//           </BrowserRouter>
//         </div>
//       )
//     }

















// --------------------51,52 and 53 ---------------------

//             NavBar.js
//             <ul className="navbar">
//                 <li><NavLink style={({ isActive }) => { return { color: isActive ? "greenyellow" : "black" } }} className="nav-bar-link" to={'/about'}>About</NavLink></li>
//                 <li ><NavLink style={({ isActive }) => { return { color: isActive ? "greenyellow" : "black" } }} className="nav-bar-link" to={'/'}> Home</NavLink></li>
//                 <li ><NavLink style={({ isActive }) => { return { color: isActive ? "greenyellow" : "black" } }} className="nav-bar-link" to={'/users/sandeep'}> Sandy</NavLink></li>
//             </ul>

//      Users.js
//      import { useParams } from "react-router-dom";

// function Users()
// {
//     const  params = useParams();
//     const {name} = params
//     return(
//        <h3>This is {name} from Users Page</h3>
//     )
// }

// export default Users;





// function App() {
//       return (
//         <div className='App'>
//           <BrowserRouter>
//           {/* <Link to={'/about'}>About</Link> simple link create */}
//           <NavBar></NavBar>
//             <Routes>
//               <Route path='/' element={<Home></Home>}></Route>
//               <Route path='/about' element={<About></About>}></Route>
//               <Route path='/*' element={<Page404></Page404>}></Route>
//               <Route path='/users/:name' element={<Users></Users>}></Route>

//             </Routes>
//           </BrowserRouter>
//         </div>
//       )
//     }

















// -------------------------------50,     404 Page------------------------

// make error msg for wrong URL
// made Page404.js and import  

// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import Home from './Components/Home';
// import About from './Components/About';
// import NavBar from './Components/NavBar';
// import Page404 from './Components/Page404'

// function App() {
//   return (
//     <div className='App'>
//       <BrowserRouter>
//       {/* <Link to={'/about'}>About</Link> simple link create */}
//       <NavBar></NavBar>
//         <Routes>
//           <Route path='/' element={<Home></Home>}></Route>
//           <Route path='/about' element={<About></About>}></Route>
//           <Route path='/*' element={<Page404></Page404>}></Route>

//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }



// ------------49, Links for router---------------------

// import Link 
// create simple Link
// make  NavBar component and import

// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import Home from './Components/Home';
// import About from './Components/About';
// import NavBar from './Components/NavBar'

// function App() {
//   return (
//     <div className='App'>
//       <BrowserRouter>
//       {/* <Link to={'/about'}>About</Link> simple link create */}
//       <NavBar></NavBar>
//         <Routes>
//           <Route path='/' element={<Home></Home>}></Route>
//           <Route path='/about' element={<About></About>}></Route>

//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }











// ---------------------------- React Router start----------------------------
// -------------------------48 , work with two component Home and About from compoents folder
// we had to import 
// import { BrowserRouter ,Routes,Route } from 'react-router-dom';
// import Home from './Components/Home';
// import About from './Components/About'

// function App() {
//   return (
//     <div className="App">

//       <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Home></Home>}></Route>
//         <Route path='/about' element={<About></About>}></Route>
//       </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

export default App;
