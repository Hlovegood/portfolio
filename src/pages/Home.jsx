import React from 'react';
import Nav from '../components/nav';
import './Home.css'
import DotGrid from '../animation/DotGrid ';
import HeroImg from '../assets/Header-Logo.png'
import Container from '../common/CategoryCont';
import Pill from '../common/Pill';
import ScrollVelocity from '../animation/ScrollVelocity';
import CatgPill from '../common/CatgPill';
import Project1 from '../assets/Project 1.png'
import Project2 from '../assets/Project 2.png'
import Project3 from '../assets/Project 3.png'
import Project4 from '../assets/Project 4.png'
import Project5 from '../assets/Project 5.png'
import Project6 from '../assets/Project 6.png'
import TiltedCard from '../animation/TiltedCard';
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
                    <img src={Project1} alt="" />
                </article>

                <article class="project">
                    <img src={Project2} alt="" />

                </article>

                <article class="project">
                    <img src={Project3} alt="" />
                    
                </article>
                
            </article>

            <article class="projects-down">

                <article class="project-1-dwn">
                    <img src={Project4} alt="" />
                    
                </article>

                <article class="project-2-dwn">
                    <img src={Project5} alt="" />
                    
                </article>

                <article class="project-1-dwn">
                    <img src={Project6} alt="" />
                    
                </article>

            </article>
                    </div>


                    </div>

                    {/* About */}

                    <div className='About'>
                        


                        <TiltedCard
  imageSrc={HeroImg}
  altText="Hesham Abozaid UX|UI Designer"
  captionText="Hesham Abozaid UX|UI Designer"
  containerHeight="300px"
  containerWidth="300px"
  imageHeight="300px"
  imageWidth="300px"
  rotateAmplitude={12}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={
    <p className="tilted-card-demo-text">
      Hesham Abozaid
    </p>
  }
/>

  <div class="about-filling">
                <h1 class="About-head">
                About
            </h1>

                <div class="About-txt">
             <p>
                My name is Hesham Abozaid I am 21 Years of age and I am a User Experience Designer Based in Cairo, Egypt.
            </p>

            <p>
                I studied in the Egypt University of Informatics for 4 years in the faculty of Digital arts & Design, I majored in User Experience Design for 3 years of my study, In Those Years
            </p>

            <p>
                I learned a lot of skills as: Proportionality, Spacing, Color Theory, Photography, Digital design, 3D Modeling, User Interface, User Experience, Coding, Drawing. And many 
            </p>

            <p>
                Apps: Blender, Photoshop, Illustrator, Figma, Visual studio code. Premiere pro, Aftereffects, 3Ds MAX, Lightroom, Aero,  Substance, Bezi
            </p>
                </div>
            </div>

                    </div>




                </main>
            </div>
        </div>
    );
}
 
export default Home;