import React, { useEffect } from 'react'
import { useState } from 'react'
import './trip-list.css'
export default function TripList() {
  const [trips, setTrips]=useState([])
  const [url, setUrl]=useState(['http://localhost:3000/trips']) 
  console.log(trips)
  useEffect(()=>{fetch(url)
  .then(response=>response.json())
  .then(json=>setTrips(json))},[url])
  return (

    <div className="trip-list"><h1>trip-list</h1>
    <ul>
      {trips.map(trip=>(
        <li keys={trip.id}>
          <h3>{trip.title}</h3>
          <p>{trip.price}</p>
        </li>
      ))}
    </ul>

    <div className='filter'><button onClick={()=>setUrl('http://localhost:3000/trips?loc=europe')}>Europe</button>
    <button onClick={()=>setUrl('http://localhost:3000/trips')}>All location</button>
    </div>
    </div>
  )
}
