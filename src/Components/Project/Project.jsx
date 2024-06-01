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
import { useTranslation } from "react-i18next";


function Project(){
  const {t}=useTranslation()

       
  


    return (
          <>
           <div className="project" id="project">
            <div className="container project__container">
                <h1 className="project__title">{t("project.our")}</h1>
                <ul className="project__list">
                    <li className="project__item">
                  <img className="project__img" src={project1}  alt=""/>
                    <Accordion style={{background:"initial" , top:"-350px", zIndex:"1"}} >
        <AccordionSummary
        >
        <h2 className="project__title__name"> {t("project.magic")}</h2>
        </AccordionSummary>
        <AccordionDetails>
       <p style={{width:"100%"}} className="project__text"> {t("project.large")}</p>
        </AccordionDetails>
      </Accordion>

                    </li>
                    <li className="project__item">
                    <img className="project__img" src={project2} alt="" />
                        
                    <Accordion  style={{background:"initial", top:"-350px", zIndex:"1"}} >
        <AccordionSummary
        >
         <h2 className="project__title__name">{t("project.gardens")}</h2>
        </AccordionSummary>
        <AccordionDetails>
          <p style={{width:"100%"}}  className="project__text">{t("project.multifun")}</p>
        </AccordionDetails>
      </Accordion>
                        </li>
                        <li className="project__item">
                        <img className="project__img" src={project3} alt="" />
                   
                        <Accordion  style={{background:"initial", top:"-350px", zIndex:"1"}} >
        <AccordionSummary
        >
          <h2 className="project__title__name">{t("project.fonon")}</h2>
        </AccordionSummary>
        <AccordionDetails>
          <p style={{width:"100%"}}  className="project__text">{t("project.grandios")}</p>
        </AccordionDetails>
      </Accordion >
                        </li>
                        <li className="project__item">
                        <img className="project__img" src={project4} alt="" />

                        <Accordion  style={{background:"initial", top:"-350px", zIndex:"1"}} >
        <AccordionSummary
        >
          <h2 className="project__title__name">{t("project.invento")}</h2>
        </AccordionSummary>
        <AccordionDetails>
       <p style={{width:"105%"}}  className="project__text">{t("project.jewel")}</p>
        </AccordionDetails>
      </Accordion>
                        </li>
                        <li className="project__item">
                        <img className="project__img" src={project5} alt="" />

                        <Accordion  style={{background:"initial", top:"-350px", zIndex:"1"}} >
        <AccordionSummary
        >
          <h2 className="project__title__name">{t("project.presi")}</h2>
        </AccordionSummary>
        <AccordionDetails>
         <p style={{width:"100%"}}  className="project__text">{t("project.inter")}</p>
        </AccordionDetails>
      </Accordion>
                        </li>
                        <li className="project__item">
                        
                        <img className="project__img" src={project6} alt="" />

                        <Accordion  style={{background:"initial", top:"-350px", zIndex:"1"}} >
        <AccordionSummary
        >
         <h2 className="project__title__name">{t("project.boul")}</h2>
        </AccordionSummary>
        <AccordionDetails>
         <p style={{width:"100%"}}  className="project__text">{t("project.education")}</p>
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