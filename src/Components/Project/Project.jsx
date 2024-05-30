import "./Project.css"

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import project1 from "../../assets/img/project1.jpg"
import project2 from "../../assets/img/project2.jpg"
import project3 from "../../assets/img/project3.jpg"
import project4 from "../../assets/img/project4.jpg"
import project5 from "../../assets/img/project5.jpg"
import project6 from "../../assets/img/project6.jpg"


function Project(){

       
  


    return (
          <>
           <div className="project">
            <div className="container project__container">
                <h1 className="project__title">Our Projects</h1>
                <ul className="project__list">
                    <li className="project__item">
                  <img className="project__img" src={project1}  alt=""/>
                    <Accordion style={{background:"initial" , top:"-250px", zIndex:"1"}} >
        <AccordionSummary
        >
        <h2 className="project__title__name">  Magic City</h2>
        </AccordionSummary>
        <AccordionDetails>
       <p className="project__text"> This is a large-scale socially significant project. The cultural and entertainment cluster in Tashkent is one of the new attractions.</p>
        </AccordionDetails>
      </Accordion>

                    </li>
                    <li className="project__item">
                    <img className="project__img" src={project2} alt="" />
                        
                    <Accordion  style={{background:"initial", top:"-250px", zIndex:"1"}} >
        <AccordionSummary
        >
         <h2 className="project__title__name">Gardens Residence</h2>
        </AccordionSummary>
        <AccordionDetails>
          <p className="project__text">Multifunctional residential complex created to provide comfort to the residents of Uzbekistan.</p>
        </AccordionDetails>
      </Accordion>
                        </li>
                        <li className="project__item">
                        <img className="project__img" src={project3} alt="" />
                   
                        <Accordion  style={{background:"initial", top:"-250px", zIndex:"1"}} >
        <AccordionSummary
        >
          <h2 className="project__title__name">Fonon</h2>
        </AccordionSummary>
        <AccordionDetails>
          <p className="project__text">A grandiose residential area in the heart of the capital.</p>
        </AccordionDetails>
      </Accordion >
                        </li>
                        <li className="project__item">
                        <img className="project__img" src={project4} alt="" />

                        <Accordion  style={{background:"initial", top:"-290px", zIndex:"1"}} >
        <AccordionSummary
        >
          <h2 className="project__title__name">Invento</h2>
        </AccordionSummary>
        <AccordionDetails>
       <p className="project__text">Fonon is a jewelry production plant in Uzbekistan built on the basis of Italian ones in 2020. Fonon is the only large enterprise in Central Asia producing jewelry from precious metals in European and Oriental styles,</p>
        </AccordionDetails>
      </Accordion>
                        </li>
                        <li className="project__item">
                        <img className="project__img" src={project5} alt="" />

                        <Accordion  style={{background:"initial", top:"-250px", zIndex:"1"}} >
        <AccordionSummary
        >
          <h2 className="project__title__name">Presidential School</h2>
        </AccordionSummary>
        <AccordionDetails>
         <p className="project__text">International kindergarten and school located in the international business center of Tashkent City.</p>
        </AccordionDetails>
      </Accordion>
                        </li>
                        <li className="project__item">
                        
                        <img className="project__img" src={project6} alt="" />

                        <Accordion  style={{background:"initial", top:"-250px", zIndex:"1"}} >
        <AccordionSummary
        >
         <h2 className="project__title__name">Boulevard </h2>
        </AccordionSummary>
        <AccordionDetails>
         <p className="project__text">This is an educational institution that provides knowledge at an international level</p>
        </AccordionDetails>
      </Accordion>
                        </li>
                </ul>
            </div>
           </div>

        
        </>
    )
}

export default Project