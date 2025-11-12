import React, { Component } from 'react';
import './CaseStudyCont.css'
const CaseStudyCont = (props) => {
    return ( <div className='CaseStudy'>
     <section className="case-hero">
            <figure className="case-hero-img" data-project="egyptian-food">
            </figure>
            <h1 className="case-title">
                {props.CaseTitle}
            </h1>
            <p className="case-subtitle">{props.CaseSub}</p>
            
            <div className="case-meta">
                <div className="meta-item">
                    <h2 className="meta-label">ROLE</h2>
                    <h2 className="meta-value">{props.CaseRole}</h2>
                </div>
                <div className="meta-item">
                    <span className="meta-label">DURATION</span>
                    <span className="meta-value">{props.CaseTime}</span>
                </div>
                <div className="meta-item">
                    <span className="meta-label">YEAR</span>
                    <span className="meta-value">{props.CaseDate}</span>
                </div>
                <div className="meta-item">
                    <span className="meta-label">TOOLS</span>
                    <span className="meta-value">{props.CaseApp}</span>
                </div>
            </div>
        </section>

        <section className="case-content">
            <article className="case-section">
                <h2 className="section-title">Overview</h2>
                <p className="section-text">{props.CaseOvr}</p>
            </article>

            <div className="case-grid">
                <article className="case-section">
                    <h2 className="section-title">The Problem</h2>
                    <p className="section-text">{props.CaseProblem}</p>
                </article>

                <article className="case-section">
                    <h2 className="section-title">The Solution</h2>
                    <p className="section-text">{props.CaseSol}</p>
                </article>
            </div>

            <article className="case-section">
                <h2 className="section-title">Design Process</h2>
                <div className="process-steps">
                    <div className="process-item">
                        <span className="process-number">01</span>
                        <h3 className="process-title">Research & Discovery</h3>
                        <p className="process-text">{props.CaseResearch}</p>
                    </div>
                    <div className="process-item">
                        <span className="process-number">02</span>
                        <h3 className="process-title">Design & Prototyping</h3>
                        <p className="process-text">{props.CaseDesign}</p>
                    </div>
                    <div className="process-item">
                        <span className="process-number">03</span>
                        <h3 className="process-title">Development & Launch</h3>
                        <p className="process-text">{props.CaseDev}</p>
                    </div>
                </div>
            </article>

            <article className="case-section">
                <h2 className="section-title">Key Deliverables</h2>
                <div className="deliverables-grid">
                    <div className="deliverable-item">
                        <h3 className="deliverable-title">Visual Design System</h3>
                        <p className="deliverable-text">{props.CaseVis}</p>
                    </div>
                    <div className="deliverable-item">
                        <h3 className="deliverable-title">Responsive Website</h3>
                        <p className="deliverable-text">{props.CaseResponsive}</p>
                    </div>
                    <div className="deliverable-item">
                        <h3 className="deliverable-title">User Flow & Navigation</h3>
                        <p className="deliverable-text">{props.CaseFlow}</p>
                    </div>
                    <div className="deliverable-item">
                        <h3 className="deliverable-title">Brand Guidelines</h3>
                        <p className="deliverable-text">{props.CaseGuide}</p>
                    </div>
                </div>
            </article>

            <article className="case-section">
                <h2 className="section-title">Impact & Results</h2>
                <div className="results-grid">
                    <div className="result-item">
                        <span className="result-number">{props.CaseImpact}</span>
                        <span className="result-label">Client Satisfaction Score</span>
                    </div>
                    <div className="result-item">
                        <span className="result-number">{props.CaseEngage}</span>
                        <span className="result-label">Increase in User Engagement</span>
                    </div>
                    <div className="result-item">
                        <span className="result-number">{props.CaseLoad}</span>
                        <span className="result-label">Faster Page Load Time</span>
                    </div>
                </div>
            </article>

            <article className="case-section">
                <h2 className="section-title">Key Learnings</h2>
                <p className="section-text">{props.CaseKey}</p>
            </article>
        </section>
    
    </div> );
}
 
export default CaseStudyCont;