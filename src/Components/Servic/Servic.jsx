import "./Servic.css"
import servic1 from "../../assets/img/servic1.png"
import servic21 from "../../assets/img/servic21.png"
import servic3 from "../../assets/img/servic3.png"
import servic5 from "../../assets/img/servic5.png"
import { t } from "i18next"


function Servic(){
   
    return(
        <>

          <div className="servic" id="servic">
            <div className="container servic__container">
                <h1 className="servic__title">{t("servic.our")}</h1>
                <ul className="servic__list">
                    <li data-aos="zoom-out-right" className="servic__itemone">
                            <p className="servic__text">{t("servic.can")}</p>
                            <img className="servic__img" src={servic1} alt="" />
                    </li>
                    <li className="servic__itemtoo">
                         <p className="servic__text"> {t("servic.document")}<br /> {t("servic.clear")}</p>
                         <img className="servic__img" src={servic21} alt="" />
                    </li>
                    <li className="servic__itemtoo">
                        <p className="servic__text">{t("servic.rep")}<br /> {t("servic.cor")} <br /> {t("servic.servic")}</p>
                        <img className="servic__img" src={servic3} alt="" />
                    </li>
                    <li className="servic__itemone">
                         <p className="servic__text">{t("servic.of")}<br />{t("servic.prof")}</p>
                         <img className="servic__img" src={servic5} alt="" />
                    </li>
                </ul>
            </div>
          </div>
        </>
    )
}
export default Servic