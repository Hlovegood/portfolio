import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "./About.css";
import Nav from "../components/nav";
import DotGrid from "../animation/DotGrid ";
import { supabase } from "../supabase";

const About = () => {
  const [loading, setLoading] = useState(true);
  const [Details, setDetails] = useState([]);
  const [Skills, setSkills] = useState([]);

  useEffect(() => {
    async function callGetAPI() {
      // 1️⃣ Fetch HOME (English row)
      const { data: homeData, error: homeError } = await supabase
        .from("Home")
        .select("*")
        .order("id", { ascending: true })
        .limit(1)
        .single();

      if (!homeError && homeData) {
        setDetails([homeData]); // keep same map logic
      }

      // 2️⃣ Fetch SKILLS table
      const { data: skillsData, error: skillsError } = await supabase
        .from("Skills")
        .select("*")
        .order("id", { ascending: true });

      if (!skillsError && skillsData) {
        setSkills(skillsData);
      }

      setLoading(false);
    }

    callGetAPI();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Helmet>
        <title>About Me</title>
        <meta
          name="description"
          content="This is the about me page to know more about Hesham Abozaid"
        />
        <meta property="og:title" content="About Me" />
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

        <div style={{ position: "relative", zIndex: 10, height: "100vh" }}>
          <Nav />

          {Details.map((Detail) => (
            <main className="about-main" key={Detail.id}>
              <header className="about-header">
                <h1 className="about-title">About Me</h1>
                <div className="about-stats">
                  <div className="stat-item">{Detail.Experience_1}</div>
                  <div className="stat-item">{Detail.Experience_2}</div>
                  <div className="stat-item">{Detail.Experience_3}</div>
                </div>
              </header>

              <section className="about-intro">
                <div className="intro-content">
                  <h2 className="section-heading">Introduction</h2>
                  <p>{Detail.About}</p>
                </div>

                <div className="profile-image">
                  <img
                    src={Detail.Hero_Img}
                    alt="Hesham Abozaid"
                    className="about-photo"
                  />
                </div>
              </section>

              <section className="skills-section">
                <h2 className="section-heading">Skills & Expertise</h2>

             <div className="skills-grid">
  {Skills
    .filter(skill => skill.Skills) 
    .map((skill) => (
      <span className="skill-tag" key={skill.id}>
        {skill.Skills}
      </span>
    ))}
</div>

              </section>

              <section className="tools-section">
                <h2 className="section-heading">Tools & Software</h2>

                <div className="tools-grid">
                  {Skills.flatMap((skill) =>
                    skill.Apps
                      ? skill.Apps.split(",").map((app) => app.trim())
                      : []
                  ).map((app, i) => (
                    <span className="tool-tag" key={i}>
                      {app}
                    </span>
                  ))}
                </div>
              </section>

                  
             {/* Education Section */}
{Skills.find(skill => skill.Uni || skill.Faculty || skill.Major) && (
  <section className="education-section">
    <h2 className="section-heading">Education</h2>
    <div className="education-content">
      {Skills.find(skill => skill.Uni)?.Uni && (
        <h3 className="university">{Skills.find(skill => skill.Uni).Uni}</h3>
      )}
      {Skills.find(skill => skill.Faculty)?.Faculty && (
        <p className="faculty">{Skills.find(skill => skill.Faculty).Faculty}</p>
      )}
      {Skills.find(skill => skill.Major)?.Major && (
        <p className="major">{Skills.find(skill => skill.Major).Major}</p>
      )}
    </div>
  </section>
)}

{/* Philosophy Section */}
{Skills.find(skill => skill.Philosophy)?.Philosophy && (
  <section className="philosophy-section">
    <h2 className="section-heading">Design Philosophy</h2>
    <div className="philosophy-content">
      <p>{Skills.find(skill => skill.Philosophy).Philosophy}</p>
    </div>
  </section>
)}

            </main>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
