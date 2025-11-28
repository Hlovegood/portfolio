// src/Data/CaseStudiesData.js
// Centralized case studies data. Each key is the project id used in routes (e.g. /projects/:id)
// Include the same prop keys used by CaseStudyCont so we can spread the object as props.

import Mockup1 from "../assets/Mockups/Edita Website.png";
import Mockup2 from "../assets/Mockups/Nickelodeon Website.png";
import Mockup3 from '../assets/Mockups/Car Parts Website.png'

const caseStudiesData = {
  "egyptian-food": {
    IMGCase: Mockup1,
    CaseTitle: "Egyptian Food Company Website",
    CaseSub: "A digital platform for the channel you like the most.",
    CaseRole: "Lead UX/UI Designer",
    CaseTime: "3 Weeks",
    CaseDate: "2024",
    CaseApp: "Figma",
    CaseOvr:
      "This project aimed to create a smooth, user-friendly website that celebrates Egyptian culinary traditions while providing an intuitive digital experience. The design incorporates warm colors reminiscent of Egyptian bakery and street atmosphere, creating an inviting atmosphere that bridges cultural heritage with contemporary web design.",
    CaseProblem:
      "The client needed a digital presence that authentically represents Egyptian culture while appealing to a modern, international audience. The main challenge was balancing traditional aesthetic elements with contemporary web design standards, ensuring the site felt both authentic and accessible.",
    CaseSol:
      "Through thorough research into Egyptian visual culture and modern e-commerce best practices, I developed a design system that seamlessly bridges tradition and innovation. The result is a website that feels culturally authentic while maintaining modern usability and accessibility.",
    CaseResearch:
      "Conducted user research and competitive analysis to understand the target audience and market.",
    CaseDesign:
      "Created detailed wireframes, mockups, and interactive prototypes to test and refine the user experience.",
    CaseDev:
      "Collaborated with developers to ensure pixel-perfect implementation and smooth, responsive functionality.",
    CaseVis:
      "Comprehensive design system including color palette, typography, and brand guidelines inspired by Egyptian cultural elements.",
    CaseResponsive:
      "Fully responsive website optimized for desktop, tablet, and mobile devices with modern transitions and animations.",
    CaseFlow:
      "Intuitive navigation structure and user flows that guide visitors through their journey.",
    CaseGuide:
      "Complete brand guidelines documentation for consistent application across all touchpoints.",
    CaseImpact: "95%",
    CaseEngage: "40%",
    CaseLoad: "2.5x",
    CaseKey:
      "This project reinforced the importance of thorough cultural research when designing for specific communities. By deeply understanding Egyptian visual patterns and working closely with stakeholders, I was able to create a design that resonates authentically with the target audience while maintaining modern web standards.",
  },

  "tv-channel": {
    IMGCase: Mockup2,
    CaseTitle: "TV Channel Website",
    CaseSub: "A modern, responsive site for a TV channel.",
    CaseRole: "UX/UI Designer",
    CaseTime: "4 Weeks",
    CaseDate: "2024",
    CaseApp: "Figma",
    CaseOvr:
      "A responsive platform to showcase video content, schedules, and channel news with an emphasis on speed and accessibility.",
    CaseProblem:
      "The legacy site lacked responsiveness and modern UI patterns for video consumption across devices.",
    CaseSol:
      "Redesigned the information architecture, implemented responsive video blocks, and improved the CMS workflow for editors.",
    CaseResearch: "User interviews and analytics review.",
    CaseDesign: "Wireframes, high-fidelity mockups and interactive prototypes.",
    CaseDev: "Worked with frontend engineers to ensure performant playback and responsive layouts.",
    CaseVis: "Design tokens and a visual language tuned for fast-loading media.",
    CaseResponsive: "Optimized responsive layouts and adaptive media handling.",
    CaseFlow: "Clear video discovery and scheduling flows.",
    CaseGuide: "Component library and guidelines for editorial teams.",
    CaseImpact: "88%",
    CaseEngage: "52%",
    CaseLoad: "1.8x",
    CaseKey: "Showcased improvements in engagement and retention after launch.",
  },

   "car-parts": {
    IMGCase: Mockup3,
    CaseTitle: "Car Parts Website",
    CaseSub: "A modern, responsive site for a Car Parts shop.",
    CaseRole: "UX/UI Designer",
    CaseTime: "2 Weeks",
    CaseDate: "2024",
    CaseApp: "Figma",
    CaseOvr:
      "A responsive platform to showcase video content, schedules, and channel news with an emphasis on speed and accessibility.",
    CaseProblem:
      "The legacy site lacked responsiveness and modern UI patterns for video consumption across devices.",
    CaseSol:
      "Redesigned the information architecture, implemented responsive video blocks, and improved the CMS workflow for editors.",
    CaseResearch: "User interviews and analytics review.",
    CaseDesign: "Wireframes, high-fidelity mockups and interactive prototypes.",
    CaseDev: "Worked with frontend engineers to ensure performant playback and responsive layouts.",
    CaseVis: "Design tokens and a visual language tuned for fast-loading media.",
    CaseResponsive: "Optimized responsive layouts and adaptive media handling.",
    CaseFlow: "Clear video discovery and scheduling flows.",
    CaseGuide: "Component library and guidelines for editorial teams.",
    CaseImpact: "78%",
    CaseEngage: "58%",
    CaseLoad: "0.7x",
    CaseKey: "Showcased improvements in engagement and retention after launch.",
  },
};

export default caseStudiesData;
