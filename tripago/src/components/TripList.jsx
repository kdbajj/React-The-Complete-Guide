import { useEffect, useState } from 'react';

//styles
import './TripList.css' 

export default function TripList() {
    const [trips, setTrips] = useState([]);
    const [url, setUrl] = useState('http://localhost:3000/trips');
    
    useEffect(()=> {
        fetch(url)
        .then(response => response.json())//that method returns json to us
        .then(json => setTrips(json))
    }, [])
    
    console.log(trips);


  return (
    <div className='trip-list'>
        <h2>Trip List</h2>
        <ul>
          {trips.map(trip => (
            <li key={trip.id}>
            <h3>{trip.title}</h3>
            <p>{trip.price}</p>
            </li>
          ))}
        </ul>
    </div>
  )
}
