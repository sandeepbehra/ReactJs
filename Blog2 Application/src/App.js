import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import NavBar from './Components/NavBar';
import Page404 from './Components/Page404'





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
