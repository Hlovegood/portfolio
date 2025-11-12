import React, { Component } from 'react';
import './CatgPill.css'
import { Link } from 'react-router-dom';
const CatgPill = (props) => {
    return ( <div className='category'>
        <Link to={props.Page}>
        <p className='category-txt'>
            {props.Category}
        </p>
        </Link>
    </div> );
}
 
export default CatgPill;