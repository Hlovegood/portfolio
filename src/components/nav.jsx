import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './nav.css'
const nav = () => {
    return ( <>
     <nav>
        <ul>
            <Link className="nav-link">
                Work
            </ Link>

            <Link className="nav-link">
                About
            </Link>

            <Link className="nav-link">
                Contact
            </Link>
            
            <Link className="nav-link">
                Blog
            </Link>
        </ul>

    </nav>
    
    </> );
}
 
export default nav;