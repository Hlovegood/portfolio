import React from 'react';
import { Link } from 'react-router-dom';
import DotGrid from '../animation/DotGrid ';
const Error = () => {
    const containerStyle = {
        display: 'flex',
        padding: '24px 32px',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '24px',
        alignSelf: 'stretch'
    };

    const linkStyle = {
        borderRadius: '40px',
        border: '2px solid #FFB574',
        display: 'flex',
        padding: '16px 24px',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        fontFamily: 'panchang',
        textDecoration: 'none',
        color: 'white'
    };

    return (
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


        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            textAlign: 'center'}}>
             <header>
        <h1 style={{color: '#ffffff', fontFamily: 'panchang', fontSize: '32px'}}>
        Hesham Abozaid 
        | UX/UI Designer
        </h1>

    </header>

    <article>
        <h1 style={{color: '#ffffff', fontFamily: 'panchang', fontSize: '48px'}}>
            Error 404
        </h1>

        <div style={{color: '#ffffff', fontFamily: 'panchang', fontSize: '20px'}}>
            Not Found
        </div>
    </article>

            <article style={containerStyle}>
                <Link to="/" style={linkStyle} aria-label="Home">
                    Home
                </Link>

                <Link to="/projects" style={linkStyle} aria-label="Work">
                    Work
                </Link>

                <Link to="/contact" style={linkStyle} aria-label="Hire">
                    Hire
                </Link>
            </article>
        </div>
        </div>
        </div>

    );
};
 
export default Error;