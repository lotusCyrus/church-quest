import React from 'react'
import TopNav from '../../nav/TopNav'
import { Link } from 'react-router-dom'
import mobileApp from '../../assets/images/app_1.png'

export default function Home() {
  return (
   
    <div> 
       <header className="foi-header landing-header">
       <TopNav>
    
                        <li className="nav-item mr-2 mb-3 mb-lg-0">
                            <Link className="btn btn-secondary" to="portal">Sign up</Link>
                        </li>
                            
                        <li className="nav-item">
                            <Link className="btn btn-secondary" to="/portal">Login</Link>
                        </li>
       
       </TopNav>
       
       <div className="header-content">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Great app that makes your church administration feassible & easy </h1>
                        <p className="text-dark">.
                        Church administration has now become easy with solutions like this right from keeping church attendance , 
                        soul winning record/management , guest register/followup to the point of tracking memebers status.
                        </p>
                        <button className="btn btn-primary mb-4">Sign Up </button>
                        <div className="my-2">
                            <p className="header-app-download-title">GET OUR MOBILE APP</p>
                        </div>
                        <div>
                            <button className="btn btn-app-download mr-2">
                              <img src="https://pic.onlinewebfonts.com/svg/img_103664.png" alt="ios" style={{overflow:'hidden'}}/>
                              </button>
                            <button className="btn btn-app-download">
                              <img src="https://th.bing.com/th/id/R.c7f92fc8ed96d918aadee1b51c717ac4?rik=IY7kSGkaQEzCcQ&riu=http%3a%2f%2fsiliconcali.com%2fwp-content%2fuploads%2f2012%2f02%2fblack_android_logo.png&ehk=NuA37h07VaFyJ3G7D2O1Y0RnnkY%2bdKXRtRe7AcrF3SY%3d&risl=&pid=ImgRaw&r=0" alt="ndroid" style={{overflow:'hidden'}}/>
                              </button>
                        </div>
                    </div>
                    <div className="col-md-6">
                    <img src={mobileApp}  alt="ndroid" className='img-fluid' style={{overflow:'hidden',width:'399px'}}/>

                        
                    </div>
                </div>
            </div>
        </header>
    </div>
  )
}
