<<<<<<< HEAD

import logo from './logo.svg';
import './App.css';
import './responsive.css';
import {  Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Members from './Pages/Members/Members';
import Settings from './Pages/Settings/Settings';
import TopBar from './components/nav/topBar/topBar';
import SideNav from './components/nav/sideNav/sideNav';
import './Pages/Home/Home.css'
import { useState } from 'react';

function App() {
const [isOpen,setIsOpen]=useState(true)

 const toggleSideNav=()=>{
   setIsOpen(!isOpen)
   console.log(isOpen)
 }

  return ( 
      <div className='App'>
             <SideNav isOpen={isOpen}/>     
      
       <div className={`right-section ${isOpen ? 'open' : 'close'}`}>
        <TopBar isOpen={isOpen} toggleSideNav={toggleSideNav}/>
       <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Members" element={<Members />} />
            <Route path="/Settings" element={<Settings />} />
         </Routes>
       </div>
          
    </div>
   
  );
}

export default App;
=======
import './App.css';
import './components/assets/css/component.css'
import { Route, Routes } from 'react-router-dom';
import Practise from './components/pages/practise/practise';
import Home from './components/pages/home/home';
import Portal from './components/pages/portal/portal';
import Footer from './components/nav/Footer';
import Dashboard from './components/pages/dashboard/dashboard';
export default function App() {

  return (
<div> 
    <Routes>
            <Route path="/" element={<Home />}/>
      <Route path="practise" element={<Practise />}/>
      <Route path="portal" element={<Portal />} />
      <Route path="dashboard" element={<Dashboard/>}/>
    </Routes>
    <Footer/>
    </div>
  )
}
  
>>>>>>> 211b44896ca6ba81767824139ce8a51861872b7b
