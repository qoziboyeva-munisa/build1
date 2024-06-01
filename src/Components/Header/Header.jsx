
import Navbar from "../Navbar/Navbar"
import "./Header.css"
import { useTranslation } from "react-i18next"
import build11 from "../../assets/img/build11.jpg"

function Header(){

    const backgraundImgStyle = { 
        background: `linear-gradient(rgba(0, 0, 0 ,0.4), rgba(0, 0, 0, 0.4)),url(${build11})`,
        backgroundSize:"cover",
        backgroundPosition:"center",
        height:"100%",
    
    }

    const {t} = useTranslation( )
    return(
        <>
        <div className="header" style={backgraundImgStyle} id="header">
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