import { useState } from 'react';
import './NewEventForm.css'


export default function NewEventForm({addEvent}) {
    const [title, setTitle] = useState('') 
    const [date, setDate] = useState('')
    const [location, setLocation] = useState('manchester');

    const resetForm = () => {
        setTitle('')
        setDate('')
        setLocation('manchester')
    }

    // Using refs
    // const title = useRef();
    // const date = useRef();

    // const handleChange= (e)=>{
    //    // setTitle(e.target.value)
    // }

    // const resetForm = () => {
    //    title.current.value ="";
    //    date.current.value = "";
    // }

    const handleSubmit = (e) => {
        e.preventDefault();// function preventDefault prevents the default behaviour ( the browser refresh ) 
        // console.log(title, date);

        const event = {
            title: title,
            date: date,
            location: location,
            id: Math.floor(Math.random() * 10000)
        }
        console.log(event);
        
        addEvent(event)
        resetForm();
    }

  return (
    <form className='new-event-form' onSubmit={handleSubmit}>
        <label>
            <span className='eventTitle'>Event Title: </span>
            <input type="text"

            // ref={title}

             onChange={(e) => setTitle(e.target.value)} 
             value={title} 
            />
        </label>
    <label>
        <span className='eventDate'> Event Date:</span>
        <input type="date" 
        // ref={date}
        onChange={(e) => setDate(e.target.value)} 
        value={date}
      />
    </label>
    <label>
        <span> Event location:  </span>
        <select onChange={(e) => setLocation(e.target.value)}>
        <option value="manchester">Manchester</option>
        <option value="london">London</option>
        <option value="cardiff">Cardiff</option>
        </select>
    </label>
    
    <button >Submit</button>
    </form>
  )
}
