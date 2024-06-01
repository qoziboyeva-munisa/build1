
import "./Company.css"
import company1 from "../../assets/img/company1.jpg"
import { useTranslation } from "react-i18next"
import CountUp from "react-countup";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
function Company(){
    const {t} = useTranslation();
    const [counterState, setCounterState] = useState(false)
    const backgraundImgStyle = { 
        background: `linear-gradient(rgba(0, 0, 0 ,0.4), rgba(0, 0, 0, 0.4)),url(${company1})`,
        backgroundSize:"cover",
        backgroundPosition:"center",
        height:"100%",
    }
    return (
        <>
        <ScrollTrigger  onEnter={()=> setCounterState(true)} onExit={()=>setCounterState(false)}/>
        <div className="company"  id="company"
        style={backgraundImgStyle}
        >
            <div className="container company__container"  >
               <div className="company__box">
               <h1 className="company__title">{t("company.our")}</h1>
                <ul className="company__list">
                    <li className="company__item">
                        <h1 className="company__title__name">
                           
                           {
                            counterState &&
                            <CountUp
                              start={0}
                              end={120}
                              duration={3}
                              separator=" "
                              decimals={0}
                              decimal=" "
                           />
                           }
                             +</h1>
                        <p className="company__text">{t("company.number")}</p>
                    </li>
                    <li className="company__item">
                        <h1 className="company__title__name">
                        {
                            counterState &&
                            <CountUp
                              start={0}
                              end={43}
                              duration={3}
                              separator=" "
                              decimals={0}
                              decimal=" "
                           />
                           }
                             +</h1>
                        <p className="company__text">{t("company.object")}</p>
                    </li>
                    <li className="company__item">
                        <h1 className="company__title__name">
                        {
                            counterState &&
                            <CountUp
                              start={0}
                              end={250}
                              duration={3}
                              separator=" "
                              decimals={0}
                              decimal=" "
                           />
                           }
                             +</h1>
                        <p className="company__text">{t("company.spec")}</p>
                    </li>
                    <li className="company__item">
                        <h1 className="company__title__name">
                        {
                            counterState &&
                            <CountUp
                              start={0}
                              end={2}
                              duration={5}
                              separator=" "
                              decimals={0}
                              decimal=" "
                           />
                           }
                             +</h1>
                        <p className="company__text">{t("company.years")}</p>
                    </li>
                </ul>
               </div>
            </div>
        </div>
        
        </>
    )
}
export default Company