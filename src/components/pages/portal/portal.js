import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import loginImage from '../../assets/images/login.png'
import TopNav from '../../nav/TopNav'
export default function Portal() {
   const [login,setLogin]=useState(false)

   
  return (
   <div className='portal'>
   <TopNav>  
    
         <li className="nav-item mr-2 mb-3 mb-lg-0">
            <Link className="btn btn-secondary" to="#" onClick={()=>setLogin(false)}>Sign up</Link>
         </li>
            <li className="nav-item">
                 <Link className="btn btn-secondary" to="#" onClick={()=>setLogin(true)}>Log in</Link>
         </li>
   </TopNav>
 
{login &&(<main className="page-auth">
        <div className="container">
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <section className="auth-wrapper">
                        <div className="row">
                           <div className="col-md-6 mb-4 mb-md-0">
                                <h2 className="auth-section-title">Log In</h2>
                                <p className="auth-section-subtitle">Sign in to your account to continue.</p>
                                <form action="/login.html" method="POST">
                                    <div className="form-group">
                                        <label htmlFor="email">Email <sup>*</sup></label>
                                        <input type="email" className="form-control" id="email" name="email" placeholder="Email *"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password <sup>*</sup></label>
                                        <input type="password" className="form-control" id="password" name="password" placeholder="Password *"/>
                                    </div>
                                    <div className="form-actions-wrapper d-flex flex-wrap align-items-center justify-content-between">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="keepLogin"/>
                                            <label className="form-check-label" htmlFor="keepLogin">
                                                keep me login
                                            </label>
                                        </div>
                                        <a href="#!" className="forgot-password-link">Forgot password?</a>
                                    </div>
                                    <button className="btn btn-primary btn-auth-submit" type="submit">Submit</button>
                                </form>
                                <p className="mb-0">
                                    <Link to="" onClick={()=>setLogin(false)} className="text-dark font-weight-bold">New User? Sign Up</Link>
                                </p>
                            </div>
                            <div className="col-md-6 d-flex align-items-center">
                                <img src='https://www.pinclipart.com/picdir/big/212-2129001_no-cell-phone-clip-art.png'  alt="portal-image" className="img-fluid"/>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </main>)}

    

    {!login &&(<main className="page-auth">
        <div className="container">
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <section className="auth-wrapper">
                        <div className="row">
                            <div className="col-md-6 mb-4 mb-md-0">
                                <h2 className="auth-section-title">Create a church account</h2>
                                <p className="auth-section-subtitle">Create your account to continue.</p>
                                <form action="/login.html" method="POST">
                                    <div className="form-group">
                                        <label htmlFor="email">Email <sup>*</sup></label>
                                        <input type="email" className="form-control" id="email" name="email" placeholder="Email"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password <sup>*</sup></label>
                                        <input type="password" className="form-control" id="password" name="password" placeholder="Password"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="confirmPassword">Confirm Password <sup>*</sup></label>
                                        <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password"/>
                                    </div>
                                    <button className="btn btn-primary btn-auth-submit" type="submit">Create account</button>
                                </form>
                                <p className="mb-0">
                                    <Link to="" onClick={()=>setLogin(true)} className="text-dark font-weight-bold">Already have an acocunt? Sign in</Link>
                                </p>
                            </div>
                            <div className="col-md-6 d-flex align-items-center">
                                <img src={loginImage} alt="login" className="img-fluid"/>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </main>)}
 </div>
  )
}
