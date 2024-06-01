import "./News.css"
import news1 from "../../assets/img/news1.jpg"
import news2 from "../../assets/img/news2.jpg"
import news3 from "../../assets/img/news3.jpg"
import news4 from "../../assets/img/news4.jpg"
import { useTranslation } from "react-i18next"

function News(){
    const {t}=useTranslation();

    return(
        <>
        <div className="news" id="news">
            <div className="container news__container">
                <h1 className="news__title">{t("news.all")}</h1>

                <ul className="news__list">
                    <li className="news__item">
                        <img className="news__img" src={news1} alt="" />
                        <div className="news__box">
                            <button className="news__btn">{t("news.news")}</button>
                            <h1 className="news__title">{t("news.construc")}</h1>
                            <p className="news__text">{t("news.discover")}</p>
                        </div>
                    </li>
                    <li className="news__item">
                    <img className="news__img" src={news2} alt="" />
                    <div className="news__box">
                    <button className="news__btn">{t("news.news")}</button>
                    <h1 className="news__title">{t("news.congra")}</h1>
                    <p className="news__text">{t("news.sop")}</p>
                        </div>
                        </li>
                        <li className="news__item">
                        <img className="news__img" src={news3} alt="" />
                        <div className="news__box">
                        <button className="news__btn">{t("news.news")}</button>
                        <h1 className="news__title">{t("news.location")}</h1>
                        <p className="news__text">{t("news.transport")}</p>
                        </div>
                        </li>
                        <li className="news__item">
                        <img className="news__img" src={news4} alt="" />
                        <div className="news__box">
                        <button className="news__btn">{t("news.news")}</button>
                        <h1 className="news__title">{t("news.continui")}</h1>
                        <p className="news__text">{t("news.yangi")}</p>

                        </div>
                        </li>

                        
                </ul>
            </div>
        </div>
        
        
        </>
    )
}

export default News