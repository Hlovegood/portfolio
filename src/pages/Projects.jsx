import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "./Projects.css";
import DotGrid from "../animation/DotGrid ";
import Nav from "../components/nav";
import Container from "../common/CategoryCont";
import Pill from "../common/Pill";
import ProjectHolder from "../common/ProjectHolder";
import Footer from "../components/footer";
import { useLocation, useNavigate } from 'react-router-dom';
import { supabase } from "../supabase";

const Projects = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const categoryParam = params.get('category') || (location.state && location.state.category);

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    if (!categoryParam) {
      navigate('/projects?category=UX/UI', { replace: true });
    }
  }, [categoryParam, navigate]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true);

        const { data, error } = await supabase
          .from("Project Details")
          .select("*");

        if (error) throw error;

        setProjects(data);
        console.log('Fetched projects:', data);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);


  const filtered = categoryParam
    ? projects.filter(p => {
        const projectCategory = ( p.ProjectCategory || '').toString().trim();
        const paramCategory = categoryParam.toString().trim();
        console.log(`Comparing: "${projectCategory.toLowerCase()}" === "${paramCategory.toLowerCase()}"`);
        return projectCategory.toLowerCase() === paramCategory.toLowerCase();
      })
    : [];

  const displayCategory = categoryParam || "UX/UI";
  
  // Split projects into rows of 3
  const projectRows = [];
  for (let i = 0; i < filtered.length; i += 3) {
    projectRows.push(filtered.slice(i, i + 3));
  }
  
  console.log('Category Param:', categoryParam);
  console.log('Filtered Projects Count:', filtered.length);
  console.log('Filtered Projects:', filtered);
  console.log('All Projects:', projects);
  console.log('Project Rows:', projectRows);

  if (loading) {
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
        <Nav />
        <div style={{ textAlign: "center", padding: "100px 20px" }}>
          <p>Loading projects...</p>
        </div>
      </>
    );
  }

  if (error) {
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
        <Nav />
        <div style={{ textAlign: "center", padding: "100px 20px" }}>
          <p>Error loading projects: {error}</p>
        </div>
      </>
    );
  }

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
              title={displayCategory}
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
            {projectRows.map((row, rowIndex) => (
              <div key={rowIndex} className="projects-row">
                {row.map((p) => (
                  <ProjectHolder
                    key={p.slug}
                    ProjectIMG={p.CoverImg}
                    ProjectTitle={p.Title}
                    ProjectDate={p.Year}
                    ProjectCatg2={p.Apps}
                    Project={p.slug}
                  />
                ))}
              </div>
            ))}
          </div>

          <Footer />
        </main>
      </div>
    </>
  );
};

export default Projects;