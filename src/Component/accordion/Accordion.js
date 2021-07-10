import React from 'react';
import './Accordion.css';
import { questions } from './Api';
import MyAcoordion from "./MyAccordion";

const Accordion=()=>{
 
    return(<>
    <section className="main-div">
    <h1>DataStructure Interview Questions</h1>
    {
        questions.map((curr)=>
        {
            return <MyAcoordion key={curr.id}{...curr}/>;
        })
    }
    </section>

    </>);
}
export default Accordion;