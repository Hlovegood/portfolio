import React, { Component } from 'react';
import './footer.css'
import logo from '../assets/Logo.png'
const footer = () => {
    return ( <footer className='footer'>
         <div >
                <img className='footer-logo' src={logo} alt="" />
            </div>

            <article className="footer-parts">

                <article className="footer-part-2">
                    <h2>
                        Projects
                    </h2>

                    <p>
                        Project
                    </p>

                    <p>
                        Project
                    </p>

                    <p>
                        Project
                    </p>
                </article>

                <article className="footer-part-2">
                    <h2>
                        About
                    </h2>

                    <p>
                        About
                    </p>

                    <p>
                        About
                    </p>

                    <p>
                        About
                    </p>
                </article>

                
                <article className="footer-part-2">
                    <h2>
                        Contact
                    </h2>

                    <p>
                        Contact
                    </p>

                    <p>
                        Contact
                    </p>

                    <p>
                        Contact
                    </p>
                </article>
            </article>

    </footer> );
}
 
export default footer;