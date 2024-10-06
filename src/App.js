import './App.css';
import './responsive.css';
import {  Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Members from './Pages/Members/Members';
import Settings from './Pages/Settings/Settings';
import TopBar from './components/nav/topBar/topBar';
import SideNav from './components/nav/sideNav/sideNav';
import Modal from './components/modal/Modal';
import './Pages/Home/Home.css'
import { useState } from 'react';

function App() {
const [isOpen,setIsOpen]=useState()
const [isModalOpen, setIsModalOpen]=useState(false)
const [status,setStatus]=useState(null)
  const modalToggle=(value)=>{
    setIsModalOpen(!isModalOpen)
    setStatus(value)
 }

  const onClose=()=>{
  setIsModalOpen(!isModalOpen)
  console.log("closed")

 }
 
  const toggleSideNav=()=>{
   setIsOpen(!isOpen)
   console.log(isOpen)
 }

  return ( 
      <div className='App'>
          {isModalOpen && (
                <Modal onClose={onClose}>
                 {status === "convert" && (
                         <div>
                            <h3>Convert Form</h3>
                         <div>
                       <input type='text' className='modal-input'placeholder='Convert Name' />
                       
                       </div>
                       <div>
                       <input type='text' className='modal-input'placeholder='Phone number' />
           
                       </div>
                       <div>
                       <input type='text' className='modal-input'placeholder='Email address' />
           
                      </div>
       
                      <div> <input type='text' className='modal-input' placeholder='Residential adress' />  </div>
                       <div>
                       <input type='submit' className='submit-btn' value='submit'/>
           
                     </div>
                       
                         </div>
                 )}
                 {status === "discipling" && (
                         <div>
                                      <h3>Disciples Form</h3>

                         <div>
                       <input type='text' className='modal-input'placeholder='Disciple name' />
                       
                       </div>
                       <div>
                       <input type='number' className='modal-input'placeholder='Phone number' />
           
                       </div>

                       <div>
                       <input type='text' className='modal-input'placeholder='Your email address' />
           
                      </div>
       
                      <div> <input type='text' className='modal-input' placeholder='Your residential adress' />  </div>
                       <div>
                       <input type='submit' className='submit-btn' value='submit'/>
           
                     </div>
                       
                         </div>
                 )}
                 {status === "established" && (
                         <div>
                                                <h3>Established Members Form</h3>
         
                         <div>
                       <input type='text' className='modal-input'placeholder='Established member name' />
                       
                       </div>
                       <div>
                       <input type='text' className='modal-input'placeholder='Your phone number' />
           
                       </div>
                       <div>
                       <input type='text' className='modal-input'placeholder='Your email address' />
           
                      </div>
       
                      <div> <input type='text' className='modal-input' placeholder='Your residential adress' />  </div>
                       <div>
                       <input type='submit' className='submit-btn' value='submit'/>
           
                     </div>
                       
                         </div>
                 )}
                 
                 
            
                
              </Modal>
   )}     
      
           <SideNav modalToggle={modalToggle} isOpen={isOpen}/>     
      
           <div className={`right-section ${isOpen ? 'open' : 'close'}`}>
           <TopBar isOpen={isOpen} toggleSideNav={toggleSideNav}/>
        <Routes>
            <Route path="/"  element={<Home isOpen={isOpen} modalToggle={modalToggle} />} />
            <Route path="/Members" isOpen={isOpen} element={<Members />} />
            <Route path="/Settings" element={<Settings />} />
         </Routes>
       </div>
      </div>
   
  );
}  

export default App;
