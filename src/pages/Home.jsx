import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Nav from "../components/nav";
import "./Home.css";
import DotGrid from "../animation/DotGrid ";
import HeroImg from "../assets/Header-Logo.png";
import Container from "../common/CategoryCont";
import Pill from "../common/Pill";
import ScrollVelocity from "../animation/ScrollVelocity";
import CatgPill from "../common/CatgPill";
import Project1 from "../assets/Project 1.png";
import Project2 from "../assets/Project 2.png";
import Project3 from "../assets/Project 3.png";
import Project4 from "../assets/Project 4.png";
import Project5 from "../assets/Project 5.png";
import Project6 from "../assets/Project 6.png";
import TiltedCard from "../animation/TiltedCard";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import { supabase } from "../supabase";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [Details, setDetails] = useState([]);

  useEffect(() => {
  async function callGetAPI() {
    const { data, error } = await supabase
      .from("Home")
      .select("*")
      .order("id", { ascending: true }) // ALWAYS English row
      .limit(1)
      .single();

    if (!error && data) {
      setDetails([data]);
    }

    setLoading(false);
  }

  callGetAPI();
}, []);


  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="This is the HomePage for the portfolio"
        />
        <meta property="og:title" content="Home" />
      </Helmet>

      {/* Background */}
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
            activeColor="#fc5a1aff"
            proximity={80}
            shockRadius={150}
            shockStrength={5}
            resistance={150}
            returnDuration={1.5}
          />
        </div>

        {/* Content */}
        <div style={{ position: "relative", zIndex: 10 }}>
          <Nav />

          <main>
            {Details.map((Detail) => (
              <React.Fragment key={Detail.id}>
                {/* Hero */}
                <ScrollVelocity
                  texts={["Front-End Dev.", "Video Editor"]}
                  velocity={80}
                  className="custom-scroll-text"
                />

                <Container
                  title={Detail.Name}
                  img={Detail.Hero_Img}
                />

                <ScrollVelocity
                  texts={["UX/UI Desinger", "3D Modeler"]}
                  velocity={80}
                  className="custom-scroll-text"
                />

                {/* Showreel */}
                <div className="showreel">
                  <iframe
                    width="560"
                    height="315"
                    src={Detail.ShowReel}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="video"
                  ></iframe>
                </div>

                {/* Experience Pills */}
                <div className="Pill-cont">
                  <Pill EXP={Detail.Experience_1} />
                  <Pill EXP={Detail.Experience_2} />
                  <Pill EXP={Detail.Experience_3} />
                </div>

                {/* Projects */}
                <div className="projects-cont">
                  <h1 className="title">Projects</h1>

                  <div className="Catg-Cont">
                    <CatgPill Page="/projects" Category={"UX/UI"} />
                    <CatgPill Category={"3D Modeling"} />
                    <CatgPill Category={"Digital Design"} />
                    <CatgPill Category={"Front-End Dev."} />
                    <CatgPill Category={"Photography"} />
                    <CatgPill Category={"Augmented Reality"} />
                  </div>

                  <div className="projects-holder1">
                    <article className="projects-up">
                      <article className="project">
                        <img src={Project1} alt="" />
                      </article>

                      <Link to={"/projects/e-sports"} className="project">
                        <img src={Project2} alt="" />
                      </Link>

                      <article className="project">
                        <img src={Project3} alt="" />
                      </article>
                    </article>

                    <article className="projects-down">
                      <article className="project-1-dwn">
                        <img src={Project4} alt="" />
                      </article>

                      <article className="project-2-dwn">
                        <img src={Project5} alt="" />
                      </article>

                      <article className="project-1-dwn">
                        <img src={Project6} alt="" />
                      </article>
                    </article>
                  </div>
                </div>

                {/* About */}
                <div className="About">
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
                    showTooltip={false}
                    displayOverlayContent={true}
                    overlayContent={
                      <p className="tilted-card-demo-text">
                        Hesham Abozaid
                      </p>
                    }
                  />

                  <div className="about-filling">
                    <h1 className="About-head">About</h1>

                    <div className="About-txt">
                     <p>
                      {Detail.About}
                     </p>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}

            <Footer />
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
