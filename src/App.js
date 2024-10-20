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
import ModalForm from './components/modal/ModalForm';

function App() {
const [isOpen,setIsOpen]=useState()
const [isModalOpen, setIsModalOpen]=useState(false)
const [status,setStatus]=useState(null)

const [memberList, setMemberList ]=useState([
  
])




const addMember=(member)=>{
  setMemberList((prevMember)=>{
    return[...prevMember, member]
  })
}

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
                <Modal  onClose={onClose}>
                           <ModalForm addMember={addMember} status={status}/>
              </Modal>
   )}     
      
           <SideNav modalToggle={modalToggle} isOpen={isOpen}/>     
      
           <div className={`right-section ${isOpen ? 'open' : 'close'}`}>
           <TopBar isOpen={isOpen} toggleSideNav={toggleSideNav}/>
        <Routes>
            <Route path="/"  element={<Home isOpen={isOpen} modalToggle={modalToggle} />} />
            <Route path="/Members" isOpen={isOpen} element={<Members setMemberList={setMemberList} memberList={memberList} addMember={addMember}  />} />
            <Route path="/Settings"  element={<Settings />} />
         </Routes>
       </div>
      </div>
   
  );
}  


export default App;
