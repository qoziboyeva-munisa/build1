import "./Exchange.css"

import exchange1 from "../../assets/img/exchange1.jpg"
import exchange2 from "../../assets/img/exchange2.jpg"
import exchange3 from "../../assets/img/exchange3.jpg"
import exchange4 from "../../assets/img/exchange4.jpg"
import exchange5 from "../../assets/img/exchange5.jpg"
import exchange6 from "../../assets/img/exchange6.jpg"
import exchange7 from "../../assets/img/exchange7.jpg"
import exchange8 from "../../assets/img/exchange8.jpg"
import { useTranslation } from "react-i18next"

function Exchange(){
    const {t}= useTranslation();

    return(
          <>
         <div className="exchange">
            <div className="conatiner exchange__container">
                <h1 className="exchange__title">{t("exchange.exchange")}</h1>
               
            </div>
            <div className="exchange__wrapper">
                    <img className="exchange__img" src={exchange1} alt="" />
                    <img className="exchange__img" src={exchange2} alt="" />
                    <img className="exchange__img" src={exchange3} alt="" />
                    <img className="exchange__img" src={exchange4} alt="" />
                    <img className="exchange__img" src={exchange5} alt="" />
                    <img className="exchange__img" src={exchange6} alt="" />
                    <img className="exchange__img" src={exchange7} alt="" />
                    <img className="exchange__img" src={exchange8} alt="" />
                </div>
         </div>
        </>
    )
}

export default Exchange