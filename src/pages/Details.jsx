import React from 'react';
import DotGrid from '../animation/DotGrid ';
import Nav from '../components/nav';
import Footer from '../components/footer'
import CaseStudyCont from '../common/CaseStudyCont';
import Mockup1 from '../assets/Mockups/Edita-Web.png'

const Details = () => {
    return (<>
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
                <CaseStudyCont CaseTitle={"Egyptian Food Company Website"} 
                CaseSub={"A digital platform for the channel you like the most."}  
                CaseRole={"Lead UX/UI Designer"}
                CaseTime={"3 Weeks"}
                CaseDate={"2024"}
                CaseApp={"Figma"}
                CaseOvr={"This project aimed to create a smooth, user-friendly website that celebrates Egyptian culinary traditions while providing an intuitive digital experience. The design incorporates warm colors reminiscent of Egyptian bakery and street atmosphere, creating an inviting atmosphere that bridges cultural heritage with contemporary web design."}
                CaseProblem={"The client needed a digital presence that authentically represents Egyptian culture while appealing to a modern, international audience. The main challenge was balancing traditional aesthetic elements with contemporary web design standards, ensuring the site felt both authentic and accessible."}
                CaseSol={"Through thorough research into Egyptian visual culture and modern e-commerce best practices, I developed a design system that seamlessly bridges tradition and innovation. The result is a website that feels culturally authentic while maintaining modern usability and accessibility."}
                CaseResearch={"Conducted user research and competitive analysis to understand the target audience and market."}
                CaseDesign={"Created detailed wireframes, mockups, and interactive prototypes to test and refine the user experience."}
                CaseDev={"Collaborated with developers to ensure pixel-perfect implementation and smooth, responsive functionality."}
                CaseVis={"Comprehensive design system including color palette, typography, and brand guidelines inspired by Egyptian cultural elements."}
                CaseResponsive={"Fully responsive website optimized for desktop, tablet, and mobile devices with modern transitions and animations."}
                CaseFlow={"Intuitive navigation structure and user flows that guide visitors through their journey."}
                CaseGuide={"Complete brand guidelines documentation for consistent application across all touchpoints."}
                CaseImpact={"95%"}
                CaseEngage={"40%"}
                CaseLoad={"2.5x"}
                CaseKey={"This project reinforced the importance of thorough cultural research when designing for specific communities. By deeply understanding Egyptian visual patterns and working closely with stakeholders, I was able to create a design that resonates authentically with the target audience while maintaining modern web standards. The success of this project demonstrates how thoughtful design can bridge cultural elements and digital requirements without compromising quality."}/>


                       



                <Footer/>
                </main>
                </div>


    </>
);
}
 
export default Details;