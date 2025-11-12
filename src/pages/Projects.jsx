import React from 'react';
import { useParams } from 'react-router-dom';
import './Projects.css'
import DotGrid from '../animation/DotGrid ';
import Nav from '../components/nav';
import Container from '../common/CategoryCont';
import Pill from '../common/Pill';

const Projects = () => {
    return ( <>
                <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>

            <div style={{ 
                position: 'fixed', 
                top: 0, 
                left: 0, 
                width: '100%', 
                height: '100vh',
                zIndex: 0,
                pointerEvents: 'none' 
            }}>
                <DotGrid
                    dotSize={5}
                    gap={15}
                    baseColor="#ffb70069"
                    activeColor="#ffffffff"
                    proximity={80}
                    shockRadius={150}
                    shockStrength={5}
                    resistance={150}
                    returnDuration={2.5}
                />
            </div>

            <div style={{ position: 'relative', zIndex: 10 }}/>
                <Nav />
                
                <main>

                    <div className='category-holder'>
                    <Container title={"UX|UI Design"} Subtitle={"Welcome to my UX/UI Design section — where creativity meets functionality. Here, I showcase user-centered designs that combine aesthetic appeal with seamless digital experiences."}/>
                    <div className='EXP-holder'>
<Pill EXP={"Total Projects 10+"}/>
<Pill EXP={"Latest Update October 2024"}/>

                    </div>
                    
                    </div>

                    <div className='Projects-Holder'>

                    </div>

                </main>
                </div>
    </> );
}
 
export default Projects;