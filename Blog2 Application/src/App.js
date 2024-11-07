import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import NavBar from './Components/NavBar';
import Page404 from './Components/Page404'
import Users from './Components/Users'
import Filter from './Components/Filter';

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
