import React from 'react';
import {BroweserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
const Routing = () => {
    return ( <>
    <BroweserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
    </Routes>
    
    </BroweserRouter>
    
    </> );
}
 
export default Routing;