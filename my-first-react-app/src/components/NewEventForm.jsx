import './NewEventForm.css'


export default function NewEventForm() {

    const handleChange= (e)=>{
        console.log(e.target.value);
    }

  return (
    <form className='new-event-form'>
        <label>
            <span className='eventTitle'>Event Title: </span>
            <input type="text" onChange={handleChange}/>
        </label>
    <label>
        <span className='eventDate'> Event Date:</span>
        <input type="date"/>
    </label>
    <button>Submit</button>
    </form>
  )
}
