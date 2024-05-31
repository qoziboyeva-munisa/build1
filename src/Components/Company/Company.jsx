
import "./Company.css"
import company1 from "../../assets/img/company1.jpg"
import { t } from "i18next"
function Company(){

    const backgraundImgStyle = { 
        background: `linear-gradient(rgba(0, 0, 0 ,0.4), rgba(0, 0, 0, 0.4)),url(${company1})`,
        backgroundSize:"cover",
        backgroundPosition:"center",
        height:"100%",
    
    }

    
 

    return (
        <>
        <div className="company" 
        style={backgraundImgStyle}
        >
            <div className="container company__container"  >
               <div className="company__box">
               <h1 className="company__title">{t("company.our")}</h1>
                <ul className="company__list">
                    <li className="company__item">
                        <h1 className="company__title__name">120 +</h1>
                        <p className="company__text">{t("company.number")}</p>
                    </li>
                    <li className="company__item">
                        <h1 className="company__title__name">43 +</h1>
                        <p className="company__text">{t("company.object")}</p>
                    </li>
                    <li className="company__item">
                        <h1 className="company__title__name">250 +</h1>
                        <p className="company__text">{t("company.spec")}</p>
                    </li>
                    <li className="company__item">
                        <h1 className="company__title__name">2 +</h1>
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