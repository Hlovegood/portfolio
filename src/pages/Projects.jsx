import React from "react";
import { Helmet } from "react-helmet";
import "./Projects.css";
import DotGrid from "../animation/DotGrid ";
import Nav from "../components/nav";
import Container from "../common/CategoryCont";
import Pill from "../common/Pill";
import ProjectHolder from "../common/ProjectHolder";
import Mockup1 from "../assets/Mockups/Edita Website.png";
import Mockup2 from "../assets/Mockups/Nickelodeon Website.png";
import Mockup3 from "../assets/Mockups/Car Parts Website.png";
import Mockup4 from "../assets/Mockups/E-Commerce Website.png";
import Mockup5 from "../assets/Mockups/E-Sports Website.png";
import Mockup6 from "../assets/Mockups/Real Estate Firm Website.png";
import Mockup7 from "../assets/Photography/Photo1.JPG";
import Mockup8 from "../assets/Photography/Photo2.JPG";
import Mockup9 from "../assets/Photography/Photo3.JPG";
import Mockup10 from "../assets/Mockups/Game AR.png";
import Mockup11 from "../assets/Mockups/Tour AR.png";
import Mockup12 from "../assets/Mockups/Escape Room AR.png";
import Footer from "../components/footer";
import { useLocation } from 'react-router-dom';

const Projects = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get('category') || (location.state && location.state.category);

  const projects = [
    {
      ProjectIMG: Mockup1,
      ProjectTitle: "Egyptian Food Brand Website",
      ProjectDate: "2023",
      ProjectCatg1: "Code",
      ProjectCatg2: "Design",
      Project: "egyptian-food",
      ProjectCategory: 'UX/UI'
    },
    {
      ProjectIMG: Mockup2,
      ProjectDate: "2024",
      ProjectCatg1: "Code",
      ProjectCatg2: "Design",
      ProjectTitle: "TV Channel Website",
      Project: "tv-channel",
      ProjectCategory: 'UX/UI'
    },
    {
      ProjectIMG: Mockup3,
      ProjectDate: "2022",
      ProjectCatg1: "Code",
      ProjectCatg2: "Design",
      ProjectTitle: "Car Parts Website",
      Project: "car-parts",
      ProjectCategory: 'UX/UI'
    },
    {
      ProjectIMG: Mockup4,
      ProjectDate: "2024",
      ProjectCatg1: "Code",
      ProjectCatg2: "Design",
      ProjectTitle: "E-Commerce Website",
      Project: "e-commerce",
      ProjectCategory: 'UX/UI'
    },
    {
      ProjectIMG: Mockup5,
      ProjectDate: "2022",
      ProjectCatg1: "Code",
      ProjectCatg2: "Design",
      ProjectTitle: "E-Sports Website",
      Project: "e-sports",
      ProjectCategory: 'UX/UI'
    },
    {
      ProjectIMG: Mockup6,
      ProjectDate: "2025",
      ProjectCatg1: "Code",
      ProjectCatg2: "Design",
      ProjectTitle: "Real Estate Website",
      Project: "real estate",
      ProjectCategory: 'UX/UI'
    },
    {
      ProjectIMG: Mockup7,
      ProjectDate: "2022",
      ProjectCatg2: "Photo",
      ProjectTitle: "High Shutter Speed",
      Project: "High Shutter Speed",
      ProjectCategory: 'Photography'
    },
    {
      ProjectIMG: Mockup8,
      ProjectDate: "2022",
      ProjectCatg2: "Photo",
      ProjectTitle: "Night Shot",
      Project: "Night shot",
      ProjectCategory: 'Photography'
    },
        {
      ProjectIMG: Mockup9,
      ProjectDate: "2022",
      ProjectCatg2: "Photo",
      ProjectTitle: "Stop motion",
      Project: "Stop Motion",
      ProjectCategory: 'Photography'
    },

    {
        ProjectIMG: Mockup10,
        ProjectDate: "2023",
        ProjectCatg1: "AR",
        ProjectTitle: "AR Game",
        Project: "Game AR",
        ProjectCategory: 'Augmented Reality'

    }
  ];

  const filtered = projects.filter(p => !category || (p.ProjectCategory && p.ProjectCategory.toLowerCase() === category.toLowerCase()));

  
  const firstRow = filtered.slice(0, 3);
  const secondRow = filtered.slice(3, 6);

  return (
    <>
      <Helmet>
        <title>Projects</title>
        <meta
          name="description"
          content="This is the page for each projects category"
        />
        <meta property="og:title" content="Projects" />
      </Helmet>

      <div style={{ position: "relative", width: "100%", minHeight: "100vh" }}>
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            zIndex: 0,
            pointerEvents: "none",
          }}
        >
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

        <div style={{ position: "relative", zIndex: 10 }} />
        <Nav />

        <main>
          <div className="category-holder">
            <Container
              title={category ? category : "UX|UI Design"}
              Subtitle={
                "Welcome to my UX/UI Design section — where creativity meets functionality. Here, I showcase user-centered designs that combine aesthetic appeal with seamless digital experiences."
              }
            />
            <div className="EXP-holder">
              <Pill EXP={"Total Projects 10+"} />
              <Pill EXP={"Latest Update October 2024"} />
            </div>
          </div>

          <div className="Projects-Holder">
            <div className="projects-up">
              {firstRow.map((p) => (
                <ProjectHolder
                  key={p.Project}
                  ProjectIMG={p.ProjectIMG}
                  ProjectTitle={p.ProjectTitle}
                  ProjectDate={p.ProjectDate}
                  ProjectCatg1={p.ProjectCatg1}
                  ProjectCatg2={p.ProjectCatg2}
                  Project={p.Project}
                />
              ))}
            </div>

            <div className="projects-down">
              {secondRow.map((p) => (
                <ProjectHolder
                  key={p.Project}
                  ProjectIMG={p.ProjectIMG}
                  ProjectTitle={p.ProjectTitle}
                  ProjectDate={p.ProjectDate}
                  ProjectCatg1={p.ProjectCatg1}
                  ProjectCatg2={p.ProjectCatg2}
                  Project={p.Project}
                />
                
              ))}
            </div>
          </div>

          <Footer />
        </main>
      </div>
    </>
  );
};

export default Projects;
