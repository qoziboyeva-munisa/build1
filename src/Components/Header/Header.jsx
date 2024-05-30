
import { t } from "i18next"
import Navbar from "../Navbar/Navbar"
import "./Header.css"
import { useTranslation } from "react-i18next"

function Header(){
    const {t} = useTranslation( )
    return(
        <>
        <div className="header">
        <Navbar/>
       
            <div className="container header__container">
               <div className="header__box">
                <h1 className="header__title">{t("header.atayev")}</h1>
                <p className="header__text">{t("header.excel")}</p>
                <div className="header__wrapper">
                    <a href="#" className="header__link">{t("header.our")}</a>
                   <a href="#" className="header__link">{t("header.connec")}</a>
                </div>
               </div>

            </div>
        </div>
        </>
    )
}
export default Header