import React, { useEffect, useState } from 'react';
import { supabase } from '../supabase';

const TestAPI = () => {

    const [Details, setDetails] = useState([
        {
Apps: "Figma, VS Code",
Category: null,
Cover_Img: "https://qihjupqhnbyqxeufexud.supabase.co/storage/v1/object/public/portfolio-assets/projects/TV%20Channel/Nickelodeon%20Website.png",
Dev: "Worked with frontend engineers to ensure performant playback and responsive layouts.\n\n",
Images: null,
Img_1: "https://qihjupqhnbyqxeufexud.supabase.co/storage/v1/object/public/portfolio-assets/projects/TV%20Channel/HOME.png",
Img_2: "https://qihjupqhnbyqxeufexud.supabase.co/storage/v1/object/public/portfolio-assets/projects/TV%20Channel/Channels.png",
Img_3: "https://qihjupqhnbyqxeufexud.supabase.co/storage/v1/object/public/portfolio-assets/projects/TV%20Channel/Error.png",
Impact: null,
Learnings: "Showcased improvements in engagement and retention after launch.\n\n",
Ovr: "A responsive platform to showcase video content, schedules, and channel news with an emphasis on speed and accessibility.\n\n",
Prob: "The legacy site lacked responsiveness and modern UI patterns for video consumption across devices.\n\n",
Proto: "Wireframes, high-fidelity mockups and interactive prototypes.\n\n",
Research: "User interviews and analytics review.\n\n",
Role: "Lead UI Designer",
Sol: "Redesigned the information architecture, implemented responsive video blocks, and improved the CMS workflow for editors.\n\n",
Time: "6 Hours",
Title: "Tv Channel Website",
Year: "2024-12-24",
created_at: "2025-12-10T17:16:58.865077+00:00",
id: 2
        }
    ]);


    useEffect(()=>{

        async function  callGetAPI(){
            const Details = await supabase.from("Project Details").select("*");
            setDetails(Details.data)
            console.log(Details.data[1]);
        }

        callGetAPI();

    },[]);


    return ( <>
    <p>
        {Details[0].Time}
    </p>
    </> );
}
 
export default TestAPI;