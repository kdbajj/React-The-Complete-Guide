import { useState } from 'react';
import './NewEventForm.css'


export default function NewEventForm({addEvent}) {

    const [title, setTitle] = useState('') 
    const [date, setDate] = useState('')

    // const handleChange= (e)=>{
    //    // setTitle(e.target.value)
    // }

    const resetForm = () => {
        setTitle('')
        setDate('')
    }

    const handleSubmit = (e) => {
        e.preventDefault();// function preventDefault prevents the default behaviour ( the browser refresh ) 

        const event = {
            title: title,
            date: date,
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
             onChange={(e) => setTitle(e.target.value)} 
             value={title} />
        </label>
    <label>
        <span className='eventDate'> Event Date:</span>
        <input type="date" 
        onChange={(e) => setDate(e.target.value)} 
        value={date}
      />
    </label>
    
    <button >Submit</button>
    </form>
  )
}
