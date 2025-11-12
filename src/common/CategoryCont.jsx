import React, { Component } from 'react';
import './Container.css'
const Container = (props) => {
    return ( <>
    <div className='hero-div hero-text'>
        {props.title}
        <p>
         {props.Subtitle}   
        </p>
        
        <img src={props.img} alt="" />
    </div>
    
    </> );
}
 
export default Container;