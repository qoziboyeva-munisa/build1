

import "./Footer.css"
import footer from "../../assets/img/footer.png"
import { useTranslation } from "react-i18next"


function Footer(){
    const {t}= useTranslation()
    return(
        <>
        <div className="footer">
            <div className="container footer__container">
                <ul className="footer__list">
                    <li className="footer__item">
                          <img className="footer__img" src={footer} alt="" />
                          <h1 className="footer__title">{t("footer.sub")}</h1>
                          <div className="footer__wrap">
                            <a href="#" className="footer__icon">
                            <i className="fa-brands fa-instagram fa-xl" style={{color:"#fff"}}></i>
                            </a>
                            <a href="#" className="footer__icon">
                            <i className="fa-brands fa-facebook fa-xl" style={{color:"#fff"}}></i>
                            </a>
                          </div>
                    </li>
                    <li className="footer__item">
                          <h1 className="footer__title">{t("footer.our")}</h1>
                          <a href="#" className="footer__link">{t("footer.enter")}</a>
                          <a href="#" className="footer__link">{t("footer.about")}</a>
                          <a href="#" className="footer__link">{t("footer.news")}</a>
                          <a href="#" className="footer__link">{t("footer.project")}</a>
                    </li>
                    <li className="footer__item">
                          <h1 className="footer__title">{t("footer.commun")}</h1>
                          <p className="footer__text">+998974839999</p>
                          <p className="footer__text">+998997126666</p>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}
export default Footer