import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home'
import Projects from './pages/Projects'
import Details from './pages/Details'
import Contact from './pages/Contact';
import About from './pages/About';
import Error from './pages/404';
import TestAPI from './pages/TestAPI';
import Test from './pages/test'
const Routing = () => {
    return ( <>
    <BrowserRouter>
    <ScrollToTop/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects/:id' element={<Details/>}/>
        <Route path='/testapi' element={<TestAPI/>}/>
        <Route path='/test' element={<Test/>}/>










        
        <Route path='*' element={<Error/>}/>

    </Routes>
    
    </BrowserRouter>
    
    </> );
}
 
export default Routing;