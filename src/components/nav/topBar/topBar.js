import React from 'react'
import './topBar.css'
import profileImage from './profileImage.png'
export default function TopBar({toggleSideNav, isOpen}) { 


  
  return (
    <div className={`top-bar ${isOpen?'open':'close'}`}>
          
            <div className="hamburger" onClick={toggleSideNav} >
               <div className="bar"></div>
               <div className="bar"></div>
               <div className="bar"></div>
 
            </div>

          <div className="search-box">
            <i className="fa fa-search"></i>
            <input type="text"  placeholder="search member" className="search-input"/>

          </div>
          
          <div className="user">
             <img src={profileImage} className="user-img" alt="" />
             <div className="user-info">
            
                <span className="user-name">Johnson</span> <br/>
                <span className="user-title"> Super Admin</span>
             </div>
          </div> 
    </div>
  )
}
