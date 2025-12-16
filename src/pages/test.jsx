import React, { useEffect, useState } from 'react';
import { supabase } from '../supabase';
const Test = () => {

    const [loading, setLoading] = useState(true);


        const [Details, setDetails]= useState([
{
   Apps: "",
Category: [{}],
Cover_Img: "",
Dev: "",
Img_1: "",
Img_2: "",
Img_3: "",
Impact_1: "",
Impact_2:  "",
Impact_3: "",
Vis: "",
Learnings: "",
Ovr: "",
Prob: "",
Proto: "",
Research: "",
Role: "",
Sol: "",
Time: "",
Title: "",
Year: "",
Res: "",
Sub: "",
created_at: "",
id: ""
}
        ]);
    
    
        useEffect(()=>{
    
            async function  callGetAPI(){
                const Details = await supabase.from("Project Details").select("*");
                setDetails(Details.data)
                // console.log(Details.data[0]);
setLoading(false);

            }
    
            callGetAPI();
    
        },[]);

 if (loading) return <p>Loading...</p>;



    return ( <>
                {

Details.map((c)=>{

return (<>
<div>

<h1>{c}</h1>

</div>
</>)

})


}
{console.log(Details[0].Category)}
    
    </> );
}
 
export default Test;