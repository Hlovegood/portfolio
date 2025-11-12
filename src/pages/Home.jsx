import React from 'react';
import Nav from '../components/nav';
import './Home.css'
import DotGrid from '../animation/DotGrid ';
import HeroImg from '../assets/Header-Logo.png'
import Container from '../common/CategoryCont';
import Pill from '../common/Pill';
import ScrollVelocity from '../animation/ScrollVelocity';
import CatgPill from '../common/CatgPill';

const Home = () => {
    return (
        
        // BG
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

            {/* Content */}
            <div style={{ position: 'relative', zIndex: 10 }}>
                <Nav />
                
                <main>

                <ScrollVelocity
                 texts={['Front-End Dev.', 'Video Editor',]} 
                velocity={80} 
                className="custom-scroll-text"/>

                    <Container title={"Hesham Abozaid | UX/UI Designer"} img={HeroImg}/>
                <ScrollVelocity
                 texts={['UX/UI Desinger', '3D Modeler',]} 
                velocity={80} 
                className="custom-scroll-text"/>
                        

                    <div className='showreel'>
                    {/* Showreel */}
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/VrLXMjj0ybU?si=b1IIV9JWa-YriOzk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='video'></iframe>

                    </div>
                    {/* Experience */}
                    <div className='Pill-cont'>
                    <Pill EXP={"3+ Years of Experience"}/>
                    <Pill EXP={"10+ Apps Used"}/>
                    <Pill EXP={"30+ Designs made"}/>
                    </div>

                    {/* Projects */}
                    
                    <div className='projects-cont'>
                    <h1 className='title'>
                        Projects
                    </h1>

                    <div className='Catg-Cont'>
                    <CatgPill Page='/projects' Category={"UX/UI"}/>
                    <CatgPill Category={"3D Modeling"}/>
                    <CatgPill Category={"Video Editor"}/>
                    <CatgPill Category={"Front-End Dev."}/>
                    <CatgPill Category={"Photography"}/>
                    <CatgPill Category={"Augmented Reality"}/>
                    </div>

                    <div>
                        <article class="projects-up">

                <article class="project">
                    
                </article>

                <article class="project">
                    
                </article>

                <article class="project">
                    
                </article>
                
            </article>

            <article class="projects-down">

                <article class="project-1-dwn">
                    
                </article>

                <article class="project-2-dwn">
                    
                </article>

                <article class="project-1-dwn">
                    
                </article>

            </article>
                    </div>


                    </div>




                </main>
            </div>
        </div>
    );
}
 
export default Home;