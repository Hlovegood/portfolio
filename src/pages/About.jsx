import React from 'react';
import HeroImg from '../assets/Header-Logo.png'
import './About.css';
import Nav from '../components/nav';
import DotGrid from '../animation/DotGrid ';
const About = () => {
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

             <div style={{ position: 'relative', zIndex: 10 , height: '100vh' }}>
                <Nav />
     <main class="about-main">
        <header class="about-header">
            <h1 class="about-title">About Me</h1>
            <div class="about-stats">
                <div class="stat-item">3+ Years Experience</div>
                <div class="stat-item">10+ Apps</div>
                <div class="stat-item">30+ Designs made</div>
            </div>
        </header>

        <section class="about-intro">
            <div class="intro-content">
                <h2 class="section-heading">Introduction</h2>
                <p>My name is Hesham Abozaid I am 21 Years of age and I am a User Experience Designer based in Cairo, Egypt.</p>
                <p>I studied in the Egypt University of Informatics for 4 years in the Faculty of Digital arts & Design. I majored in User Experience Design for 3 years of my study.</p>
                <p>During those years, I developed a passion for creating intuitive and visually stunning digital experiences that solve real-world problems.</p>
            </div>
            <div class="profile-image">
                <img src={HeroImg} alt="Hesham Abozaid" class="about-photo"/>
            </div>
        </section>

        <section class="skills-section">
            <h2 class="section-heading">Skills & Expertise</h2>
            <div class="skills-grid">
                <span class="skill-tag">UX/UI Design</span>
                <span class="skill-tag">Front-End Dev</span>
                <span class="skill-tag">3D Modeling</span>
                <span class="skill-tag">Photography</span>
                <span class="skill-tag">Digital Design</span>
                <span class="skill-tag">Video Editing</span>
            </div>
            <p class="skills-description">I learned a lot of skills including: Proportionality, Spacing, Color Theory, Photography, Digital Design, 3D Modeling, User Interface, User Experience, Coding, and Drawing.</p>
        </section>

        <section class="tools-section">
            <h2 class="section-heading">Tools & Software</h2>
            <div class="tools-grid">
                <span class="tool-tag">Figma</span>
                <span class="tool-tag">Blender</span>
                <span class="tool-tag">Photoshop</span>
                <span class="tool-tag">Illustrator</span>
                <span class="tool-tag">VS Code</span>
                <span class="tool-tag">Premiere Pro</span>
                <span class="tool-tag">After Effects</span>
                <span class="tool-tag">3Ds Max</span>
                <span class="tool-tag">Lightroom</span>
                <span class="tool-tag">Substance</span>
                <span class="tool-tag">Rhino</span>
                <span class="tool-tag">Aero</span>
            </div>
        </section>

        <section class="education-section">
            <h2 class="section-heading">Education</h2>
            <div class="education-content">
                <h3 class="university">Egypt University of Informatics</h3>
                <p class="faculty">Faculty of Digital Arts & Design</p>
                <p class="major">Major: User Experience Design</p>
            </div>
        </section>

        <section class="philosophy-section">
            <h2 class="section-heading">Design Philosophy</h2>
            <div class="philosophy-content">
                <p>I believe that great design is the perfect intersection of aesthetics and functionality. Every pixel should serve a purpose, every interaction should feel natural, and every design should tell a story.</p>
                <p>My approach combines creative innovation with user-centered thinking, ensuring that the final product not only looks beautiful but also solves real problems and enhances user experiences.</p>
            </div>
        </section>
    </main>
    </div>
    </div>
    </> );
}
 
export default About;