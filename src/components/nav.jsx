import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './nav.css'
const nav = () => {
    return ( <>
     <nav>
        <ul>
            <Link class="nav-link">
                Work
            </ Link>

            <Link class="nav-link">
                About
            </Link>

            <Link class="nav-link">
                Contact
            </Link>
            
            <Link class="nav-link">
                Blog
            </Link>
        </ul>

    </nav>
    
    </> );
}
 
export default nav;