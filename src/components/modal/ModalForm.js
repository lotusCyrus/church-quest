import React from 'react'
import { useState } from 'react'
export default function ModalForm({status, addMember}) {

    const [formData, setFormData]=useState({
      name: '',
      number: '',
      email: '',
      address: '',
     })
    
     const resetForm=()=>{
      setFormData('')
     }
    
    const handleSubmit=(e)=>{
      e.preventDefault()
    
      const member ={
        ...formData,
        id: `member_${Date.now()}`
      }
      addMember(member)
      resetForm()
    }
      const handleChange=(e)=>{
        const {name, value}=e.target
         setFormData((prevData)=>(
            {
                 ...prevData, 
                 [name]:value
            }))
      }
      
    

  return (
    <div>
           {status === "convert" && (
                         <div>
                            <h3>Convert Form</h3>

                      <form className='' onSubmit={handleSubmit}> 

                        <div>  
                           <input type='text' name='name' value={formData.name} className='modal-input' placeholder='Convert Name' onChange={handleChange} />
                       
                       </div>
                       
                       <div>
                          <input type='text' name='number' value={formData.number}  className='modal-input' placeholder='Phone number' onChange={handleChange}  />
           
                       </div>
                       
                       <div>
                         <input type='text' name='email' value={formData.email} className='modal-input' placeholder='Email address' onChange={handleChange} />
           
                       </div>
       
                        <div> 
                          <input type='text' name='address' value={formData.address} className='modal-input' placeholder='Residential adress' onChange={handleChange} />   
                       </div>
                        <div>
                         <input type='submit' className='submit-btn' value='submit'/>
           
                       </div>
                    </form>
                         </div>
                 )}
                 {status === "discipling" && (
                         <div>
                                      <h3>Disciples Form</h3>

                         <div>
                       <input type='text' className='modal-input'placeholder='Disciple name'  />
                       
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
                       <input type='text'  className='modal-input' placeholder='Established member name' />
                       
                       </div>
                       <div>
                       <input type='text' className='modal-input' placeholder='Your phone number' />
           
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
    </div>
  )
}
