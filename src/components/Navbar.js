import React from "react"
import { Link } from "react-router-dom"

const Navbar = () =>{
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link>Photos</Link></li>
                    <li><Link to="/calendar">Calendar</Link></li>
                    <li><Link>About</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar