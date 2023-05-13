import React, {useState} from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import Navbar from '../components/Navbar'


// const events = [
//     {
//         title: "test1",
//         start: new Date(2023, 4, 12),
//         end: new Date(2023, 4, 13)
//     },
//     {
//         title: "test2",
//         start: new Date(2023, 4, 14),
//         end: new Date(2023, 4, 16)
//     },
//     {
//         title: "test2",
//         allDay: true,
//         start: new Date(2023, 4, 13),
//         end: new Date(2023, 4, 13)
//     }
// ]

const events = localStorage.getItem("CalendarEvents") ? JSON.parse(localStorage.getItem("CalendarEvents")) : []

if(events.length > 0){
    console.log('Test',events)
    events.forEach((event) => {
        event.start = new Date(event.start)
        event.end = new Date(event.end)
    })
}

const CalendarPage = () => {

    const localizer = momentLocalizer(moment)

    const [newEvent, setNewEvent] = useState({title: "", start: "", end: ""})
    const [allEvents, setAllEvents] = useState(events)

    localStorage.setItem("CalendarEvents", JSON.stringify(allEvents))

    const handleAddEvent = () => {
        setAllEvents([...allEvents, newEvent])
    }


    return (
        <div style={{textAlign: "center"}}>
            <Navbar/>
            <h1>Calendar</h1>
            <h2>Add New Event</h2>
            <div>
                <input 
                type="text" 
                placeholder="add title" 
                style={{width: "20%", marginRight: "10px"}}
                value={newEvent.title} 
                onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                />
                <DatePicker
                    placeholderText="Start Date"
                    style={{marginRight: "10px"}}
                    selected={newEvent.start}
                    onChange={(start) => setNewEvent({...newEvent, start})}
                />
                <DatePicker
                    placeholderText="Endt Date"
                    selected={newEvent.end}
                    onChange={(end) => setNewEvent({...newEvent, end})}
                />
                <button
                style={{marginTop: "10px"}}
                onClick={handleAddEvent}>
                    Add Event
                </button>
            </div>
        <Calendar
            localizer={localizer}
            events={allEvents}
            startAccessor="start"
            endAccessor="end"
            style={{height: 500, margin: "50px"}}

        />
      </div>
    )
}

export default CalendarPage