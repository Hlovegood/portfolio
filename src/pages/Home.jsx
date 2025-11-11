import React from 'react';
import Nav from '../components/nav';
import './Home.css'
import DotGrid from '../animation/DotGrid ';
import HeroImg from '../assets/Header-Logo.png'
import Container from '../common/Container';

const Home = () => {
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
                    baseColor="#ffb70069"
                    activeColor="#ffffffff"
                    proximity={80}
                    shockRadius={150}
                    shockStrength={5}
                    resistance={150}
                    returnDuration={2.5}
                />
            </div>


            <div style={{ position: 'relative', zIndex: 10 }}>
                <Nav />
                
                <main>

                    <Container title={"Hesham Abozaid | UX/UI Designer"} img={HeroImg}/>

                </main>
            </div>
        </div>
    );
}
 
export default Home;