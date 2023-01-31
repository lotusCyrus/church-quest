import './css/practise.css';
import Testing  from './modal-app/testing.js'
import {useState} from 'react'
import Modal from './modal-app/modal.js'
import EventList from './modal-app/EventList.js';
import EventForm from './modal-app/EventForm';
import TripList from './triapago/trip-list'; 

  export default function Practise() {
    const [showModal, setShowModal]=useState(false)
const [showEvents , setShowEvents]=useState(true)
const [events, setEvents]=useState([])
console.log(showModal) 

const addEvent=(event)=>{
  setEvents((prevEvents)=>{
    return[...prevEvents, event]
  })
}


const handleClick=(id)=>{
setEvents((prevEvent)=>{
  return prevEvent.filter((event)=>{
    return id !== event.id
  })
})
    console.log(id)
  }

  const handleClose=()=>{

    setShowModal(false)
  }
    return(

  <div className="practise">
      
  <Testing title="Mario Gamers Hub" />
   {showEvents && (<button onClick={()=>setShowEvents
     (false)}>Hide Events </button>)}
   {!showEvents && (<button onClick={()=>setShowEvents(true)}>Show Events </button>)}

    {showEvents && <EventList events={events} handleClick={handleClick} />}
                      
    {showModal && (<Modal handleClose={handleClose}  isModalColor={true}>
     <h2>10% off coupon Code!!</h2>
           <p>use the code iri for the coupon</p> 
           <button onClick={handleClose}>close</button>     
          <EventForm setShowModal={setShowModal} addEvent={addEvent}/>
           </Modal>)} 

    {!showModal &&(<button onClick={()=>setShowModal(true)}>Open</button>)}  
    
     <TripList />
     </div>
)  
}