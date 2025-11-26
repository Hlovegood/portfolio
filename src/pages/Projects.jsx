import React from 'react';
import { useParams } from 'react-router-dom';
import './Projects.css'
import DotGrid from '../animation/DotGrid ';
import Nav from '../components/nav';
import Container from '../common/CategoryCont';
import Pill from '../common/Pill';
import ProjectHolder from '../common/ProjectHolder';
import Mockup1 from '../assets/Mockups/Edita-Web.png'
import Footer from '../components/footer'
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
                    baseColor="#3b2b0269"
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

                        <div className='projects-up'>
                            <ProjectHolder 
                            ProjectIMG={Mockup1} 
                             ProjectTitle={"Egyptian Food Brand Website"} 
                             ProjectDate={"2024"} 
                             ProjectCatg1={"Code"} 
                             ProjectCatg2={"Design"} 
                             Project={"egyptian-food"}/>
                            <ProjectHolder />
                            <ProjectHolder />

                        </div>
                        
                    </div>

                    <Footer/>

                </main>
                </div>
    </> );
}
 
export default Projects;