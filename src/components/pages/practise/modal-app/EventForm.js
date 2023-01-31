import { useState } from 'react'
import  './EventForm.css'
export default function EventForm({addEvent, setShowModal}) {
  const [title,setTitle]=useState('')
  const [date,setDate]= useState('')
 const [location, setLocation]=useState('manchester')
  const handleSubmit=(e)=>{
    e.preventDefault()
    const event={
      title:title,
      date:date,
      id:Math.floor(Math.random() *10000),
      location:location
    }
    console.log(event)

    setShowModal(false)
    addEvent(event)
    resetForm()
  }
    const resetForm=()=>{
      setDate('')
      setTitle('')
      setLocation('manchester')
    }

  return (
    <form className='new-event-form' onSubmit={handleSubmit}>
     <label htmlFor='title'>
        <span>Event Title:</span> 
     <input type="text" id="title" onChange={(e)=>setTitle(e.target.value)} value={title}/>

     </label>
     <label><span>Event Date:</span>
     <input type="date"  onChange={(e)=>setDate(e.target.value)} value={date}/>

     </label>
     <label>
      <span>Event Location:</span>
      <select onChange={(e)=>setLocation(e.target.value)}>
        <option value="manchester">Manchester</option>
        <option value="london">London</option>
        <option value="cardiff">cardiff</option>

      </select>

     </label>
     <span>{title}</span> 
     <span>{date}</span>  
     <p onClick={resetForm}>reset</p>
     <button >submit</button> 
    </form>
    )
}
