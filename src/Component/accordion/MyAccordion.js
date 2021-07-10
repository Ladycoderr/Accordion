import React, { useState } from "react";
const MyAcoordion=({question,answer,id})=>{
    const[show,setShow]=useState(false);
   
   return(<>
   <div className="main-heading">
       <p className="btn" onClick={()=>setShow(!show)}>{show?"➖":"➕"}</p> 
       <h3>{id}. {"  "} {question}</h3>
   </div>
     { show && <p className="answers">{answer}</p>}
   </>);
    
}
export default MyAcoordion;