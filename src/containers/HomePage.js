import { React, useState, useEffect } from "react"
import { Navigate } from "react-router-dom"

import Navbar from "../components/Navbar";

const HomePage = () => {
    let authenticated = false;

    const signedInUser = localStorage.getItem("authenticated");
    if (signedInUser) {
        authenticated = true;
    }

    console.log('authenticated: ', authenticated)

    if(!authenticated){
        console.log('hi')
        return <Navigate replace to="/" />
    } else {
        return (
            <div className="homeWrapper">
                <Navbar/>
                <h1>Welcome to the Huberdeau Cabin!</h1>
                <p>This site is currenty under construction.</p>
            </div>
        )
    }
}

export default HomePage