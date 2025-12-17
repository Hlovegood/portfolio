import React, { useEffect, useState } from 'react';
import {Helmet} from 'react-helmet';
import './Contact.css';
import Nav from '../components/nav';
import DotGrid from '../animation/DotGrid ';
import { supabase } from '../supabase';

const Contact = () => {
  const [contactLinks, setContactLinks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchContact() {
      const { data, error } = await supabase
        .from('Contact')
        .select('*')
        .order('id', { ascending: true });

      if (!error && data) setContactLinks(data);
      setLoading(false);
    }

    fetchContact();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Helmet>
        <title>Contact</title>
        <meta name="description" content="This is the contact page to reach Hesham Abozaid" />
        <meta property="og:title" content="Contact" />
      </Helmet>

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

        <div style={{ position: 'relative', zIndex: 10, height: '100vh' }}>
          <Nav />
          
          <main className="contact-main">
            <header className="contact-header">
              <div className="contact-title-wrapper">
                <h1 className="contact-title">Get in Touch</h1>
              </div>
              <p className="contact-intro">
                Have a project in mind or want to collaborate? I'd love to hear from you. Send me a message and let's create something amazing together.
              </p>
            </header>

            <div className="contact-content">
              <section className="message-section">
                <h2 className="section-title">Send a Message</h2>
                <form className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" placeholder="John Doe"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" placeholder="john@example.com"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" placeholder="Project Inquiry"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" placeholder="Tell me about your project..."></textarea>
                  </div>
                  <button type="submit" className="submit-btn">Send Message</button>
                </form>
              </section>

              <aside className="contact-info">
                <section className="info-section">
                  <h2 className="section-title">Contact Information</h2>
                  <div className="info-list">
                    {contactLinks.map((link) => (
                      <div className="info-item" key={link.id}>
                        {link.Number && (
                          <div>
                            <span className="info-icon">📱</span>
                            <p>{link.Number}</p>
                          </div>
                        )}
                        {link.Location && (
                          <div>
                            <span className="info-icon">📍</span>
                            <p>{link.Location}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>

                <section className="social-section">
                  <h2 className="section-title">Social Media</h2>
                  <div className="social-links">
                    {contactLinks.map((link) =>
                      link.Link_Title && link.Links ? (
                        <a
                          key={link.id}
                          href={link.Links}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-link"
                        >
                          {link.Link_Title}
                        </a>
                      ) : null
                    )}
                  </div>
                </section>

                <section className="availability-section">
                  <h2 className="section-title">Availability</h2>
                  <p className="availability-text">Currently open for freelance projects and collaborations.</p>
                  <p className="response-time">Response time: 24-48 hours.</p>
                </section>
              </aside>
            </div>

            <section className="cta-section">
              <h2 className="cta-title">Let's Create Something Amazing</h2>
              <p className="cta-text">
                Whether you have a project in mind, need design consultation, or just want to say hello, I'm always excited to connect with fellow creatives and potential clients.
              </p>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default Contact;
