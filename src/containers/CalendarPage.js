import React, {useState} from 'react'
import { Navigate } from "react-router-dom"
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import Navbar from '../components/Navbar'


const blackoutEvents = [
    {
        title: "May Long",
        start: new Date(2023, 4, 20),
        end: new Date(2023, 4, 23)
    },
    {
        title: "July Long",
        start: new Date(2023, 6, 1),
        end: new Date(2023, 6, 4)
    },
    {
        title: "August Long",
        allDay: true,
        start: new Date(2023, 7, 5),
        end: new Date(2023, 7, 8)
    },
    {
        title: "September Long",
        allDay: true,
        start: new Date(2023, 8, 2),
        end: new Date(2023, 8, 5)
    },
    {
        title: "Thanksgiving",
        allDay: true,
        start: new Date(2023, 9, 7),
        end: new Date(2023, 9, 10)
    },
    {
        title: "November Long",
        allDay: true,
        start: new Date(2023, 10, 11),
        end: new Date(2023, 10, 14)
    },
]

const events = localStorage.getItem("CalendarEvents") ? JSON.parse(localStorage.getItem("CalendarEvents")) : blackoutEvents

if(events.length > 0){
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

    let authenticated = false;

    const signedInUser = localStorage.getItem("authenticated");
    if (signedInUser) {
        authenticated = true;
    }

    if(!authenticated){
        return <Navigate replace to="/" />
    } else {
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
}

export default CalendarPage