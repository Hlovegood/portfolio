import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './nav.css'
const nav = () => {
    return ( <>
     <nav>
        <ul>
            <Link to={"/"} className="nav-link">
                Home
            </ Link>

            <Link to={"/about"} className="nav-link">
                About
            </Link>

            <Link to={"/contact"} className="nav-link">
                Contact
            </Link>
            

        </ul>

    </nav>
    
    </> );
}
 
export default nav;