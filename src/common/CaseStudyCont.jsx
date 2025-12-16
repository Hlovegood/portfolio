import React, { useEffect, useState } from 'react';
import { supabase } from '../supabase';
import './CaseStudyCont.css'

const CaseStudyCont = ({ projectId }) => {
    const [modalImg, setModalImg] = useState(null);
    const [detail, setDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const openModal = (img) => setModalImg(img);
    const closeModal = (e) => { 
        e && e.stopPropagation(); 
        setModalImg(null); 
    };

    useEffect(() => {
        async function fetchProjectData() {
            try {
                setLoading(true);
                
                // Fetch specific project by slug (URL-friendly identifier)
                const { data, error } = await supabase
                    .from("Project Details")
                    .select("*")
                    .eq('slug', projectId)
                    .single();
                
                if (error) throw error;
                
                setDetail(data);
                console.log('Fetched project:', data);
            } catch (err) {
                console.error('Error fetching project:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        if (projectId) {
            fetchProjectData();
        }
    }, [projectId]);

    if (loading) {
        return <div className="CaseStudy"><p>Loading...</p></div>;
    }

    if (error) {
        return <div className="CaseStudy"><p>Error: {error}</p></div>;
    }

    if (!detail) {
        return <div className="CaseStudy"><p>Project not found.</p></div>;
    }

    // Build gallery array from Img_1, Img_2, Img_3
    const gallery = [detail.Img_1, detail.Img_2, detail.Img_3].filter(Boolean);

    return (
        <div className='CaseStudy'>
            <section className="case-hero">
                <img src={detail.CoverImg} className="case-hero-img" alt='Case Hero'/>
                <h1 className="case-title">{detail.Title}</h1>
                <p className="case-subtitle">{detail.Sub}</p>
                
                <div className="case-meta">
                    <div className="meta-item">
                        <h2 className="meta-label">ROLE</h2>
                        <h2 className="meta-value">{detail.Role}</h2>
                    </div>
                    <div className="meta-item">
                        <span className="meta-label">DURATION</span>
                        <span className="meta-value">{detail.Time}</span>
                    </div>
                    <div className="meta-item">
                        <span className="meta-label">YEAR</span>
                        <span className="meta-value">{detail.Year}</span>
                    </div>
                    <div className="meta-item">
                        <span className="meta-label">TOOLS</span>
                        <span className="meta-value">{detail.Apps}</span>
                    </div>
                </div>
            </section>

            <section className="case-content">
                <article className="case-section">
                    <h2 className="section-title">Overview</h2>
                    <p className="section-text">{detail.Ovr}</p>
                </article>

                <div className="case-grid">
                    <article className="case-section">
                        <h2 className="section-title">The Problem</h2>
                        <p className="section-text">{detail.Prob}</p>
                    </article>

                    <article className="case-section">
                        <h2 className="section-title">The Solution</h2>
                        <p className="section-text">{detail.Sol}</p>
                    </article>
                </div>

                <article className="case-section">
                    <h2 className="section-title">Design Process</h2>
                    <div className="process-steps">
                        <div className="process-item">
                            <span className="process-number">01</span>
                            <h3 className="process-title">Research & Discovery</h3>
                            <p className="process-text">{detail.Research}</p>
                        </div>
                        <div className="process-item">
                            <span className="process-number">02</span>
                            <h3 className="process-title">Design & Prototyping</h3>
                            <p className="process-text">{detail.Proto}</p>
                        </div>
                        <div className="process-item">
                            <span className="process-number">03</span>
                            <h3 className="process-title">Development & Launch</h3>
                            <p className="process-text">{detail.Dev}</p>
                        </div>
                    </div>
                </article>

                <article className="case-section">
                    <h2 className="section-title">Key Deliverables</h2>
                    <div className="deliverables-grid">
                        <div className="deliverable-item">
                            <h3 className="deliverable-title">Visual Design System</h3>
                            <p className="deliverable-text">{detail.Vis}</p>
                        </div>
                        <div className="deliverable-item">
                            <h3 className="deliverable-title">Responsive Website</h3>
                            <p className="deliverable-text">{detail.Res}</p>
                        </div>
                    </div>
                </article>

                {gallery.length > 0 && (
                    <article className="case-section">
                        <h2 className="section-title">Gallery</h2>
                        <div className="gallery-grid">
                            {gallery.map((g, i) => (
                                <div className="gallery-item" key={i}>
                                    <img 
                                        src={g} 
                                        alt={`Gallery ${i + 1}`} 
                                        onClick={() => openModal(g)} 
                                    />
                                </div>
                            ))}
                        </div>
                    </article>
                )}

                <article className="case-section">
                    <h2 className="section-title">Impact & Results</h2>
                    <div className="results-grid">
                        <div className="result-item">
                            <span className="result-number">{detail.Impact_1}</span>
                            <span className="result-label">Client Satisfaction Score</span>
                        </div>
                        <div className="result-item">
                            <span className="result-number">{detail.Impact_2}</span>
                            <span className="result-label">Increase in User Engagement</span>
                        </div>
                        <div className="result-item">
                            <span className="result-number">{detail.Impact_3}</span>
                            <span className="result-label">Faster Page Load Time</span>
                        </div>
                    </div>
                </article>

                <article className="case-section">
                    <h2 className="section-title">Key Learnings</h2>
                    <p className="section-text">{detail.Learnings}</p>
                </article>
            </section>

            {/* Modal overlay for enlarged gallery image */}
            {modalImg && (
                <div className="gallery-modal" onClick={closeModal}>
                    <button className="gallery-modal-close" onClick={closeModal}>×</button>
                    <img src={modalImg} alt="Enlarged" className="gallery-modal-img" />
                </div>
            )}
        </div>
    );
}
 
export default CaseStudyCont;