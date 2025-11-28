import React from 'react';
import {Helmet} from 'react-helmet';
import './Projects.css'
import DotGrid from '../animation/DotGrid ';
import Nav from '../components/nav';
import Container from '../common/CategoryCont';
import Pill from '../common/Pill';
import ProjectHolder from '../common/ProjectHolder';
import Mockup1 from '../assets/Mockups/Edita Website.png'
import Mockup2 from '../assets/Mockups/Nickelodeon Website.png'
import Mockup3 from '../assets/Mockups/Car Parts Website.png'
import Mockup4 from '../assets/Mockups/E-Commerce Website.png'
import Mockup5 from '../assets/Mockups/E-Sports Website.png'
import Mockup6 from '../assets/Mockups/Real Estate Firm Website.png'
import Footer from '../components/footer'
const Projects = () => {
    return ( <>

        <Helmet>
        <title>Projects</title>
        <meta name="description" content="This is the page for each projects category" />
        <meta property="og:title" content="Projects" />
        </Helmet>

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
                             ProjectDate={"2023"} 
                             ProjectCatg1={"Code"} 
                             ProjectCatg2={"Design"} 
                             Project={"egyptian-food"}/>
                            <ProjectHolder 
                            ProjectIMG={Mockup2}
                             ProjectDate={"2024"} 
                             ProjectCatg1={"Code"} 
                             ProjectCatg2={"Design"}
                             ProjectTitle={"TV Channel Website"}
                             Project={"tv-channel"}
                              />
                            <ProjectHolder
                            ProjectIMG={Mockup3}
                             ProjectDate={"2022"} 
                             ProjectCatg1={"Code"} 
                             ProjectCatg2={"Design"}
                             ProjectTitle={"Car Parts Website"}
                             Project={"car-parts"}
                            />

                            

                        </div>

                        <div className='projects-down'>
                            <ProjectHolder
                            ProjectIMG={Mockup4}
                             ProjectDate={"2022"} 
                             ProjectCatg1={"Code"} 
                             ProjectCatg2={"Design"}
                             ProjectTitle={"E-Commerce Website"}
                             Project={"e-commerce"}
                            /> 


                            <ProjectHolder
                            ProjectIMG={Mockup5}
                             ProjectDate={"2022"} 
                             ProjectCatg1={"Code"} 
                             ProjectCatg2={"Design"}
                             ProjectTitle={"E-Sports Website Website"}
                             Project={"e-sports"}
                            />                                 
                        </div>
                        
                    </div>

                    <Footer/>

                </main>
                </div>
    </> );
}
 
export default Projects;