import React from 'react';
import './CatgPill.css'
import { Link } from 'react-router-dom';
const CatgPill = (props) => {
    const page = props.Page || '/projects';
    const target = `${page}?category=${encodeURIComponent(props.Category)}`;
    return ( <div className='category'>
        <Link to={target}>
        <p className='category-txt'>
            {props.Category}
        </p>
        </Link>
    </div> );
}
 
export default CatgPill;