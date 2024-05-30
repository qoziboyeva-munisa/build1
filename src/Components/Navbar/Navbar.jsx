import "./Navbar.css"

import build1 from "../../assets/img/build1.png"
import { useTranslation } from "react-i18next";

function Navbar(){
    const {t,i18n} = useTranslation();
    const handleChange = (event) =>{
      const selectedLaungage = event.target.value;
      i18n.changeLanguage(selectedLaungage);
    }

    return(

        <>
        <div className="navbar">
            <div className="container navbar__container">
                <ul className="navbar__list">
                    <li className="navbar__item">
                        <a href="#" className="navbar__link">{t("navbar.infor")}</a>
                    </li>
                    <li className="navbar__item">
                        <a href="#" className="navbar__link">{t("navbar.about")}</a>
                    </li>
                    <li className="navbar__item">
                        <a href="#" className="navbar__link">{t("navbar.enter")}</a>
                    </li>
                    <li className="navbar__item">
                        <a href="#" className="navbar__link">
                            <img className="navbar__img" src={build1} alt="" />
                        </a>
                    </li>
                    <li className="navbar__item">
                        <a href="#" className="navbar__link">{t("navbar.our")}</a>
                    </li>
                    <li className="navbar__item">
                        <a href="#" className="navbar__link">{t("navbar.news")}</a>
                    </li>
                    <li className="navbar__item">
                        <a href="#" className="navbar__link">{t("navbar.commun")}</a>
                    </li>
                    <li className="navbar__item">
                        <a href="#" className="navbar__link"></a>
                    </li>
                </ul>
                <select className="navbar__select" onChange={handleChange} value={i18n.language}>
                    <option className="navbar__option" value="uz">{t("navbar.uz")}</option>
                    <option className="navbar__option" value="ru">{t("navbar.ru")}</option>
                    <option className="navbar__option" value="en">{t("navbar.en")}</option>
                </select>
                
            </div>
        </div>
        
        </>
    )
}
export default Navbar