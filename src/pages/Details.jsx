import React from 'react';
import {Helmet} from 'react-helmet';
import DotGrid from '../animation/DotGrid ';
import Nav from '../components/nav';
import Footer from '../components/footer'
import CaseStudyCont from '../common/CaseStudyCont';
import { useParams } from 'react-router-dom';
import caseStudiesData from '../Data/CaseStudiesData';

const Details = () => {
    const { id } = useParams();
    const caseData = caseStudiesData[id] || Object.values(caseStudiesData)[0];


    return (<>


                    <Helmet>
                    <title>Details</title>
                    <meta name="description" content="This is the detail page for every project" />
                    <meta property="og:title" content="Details" />
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

            <div style={{ position: 'relative', zIndex: 10 }}/>
                <Nav />
                
                                <main>
                                    <CaseStudyCont {...caseData} />

                                <Footer/>
                                </main>
                </div>


    </>
);
}
 
export default Details;