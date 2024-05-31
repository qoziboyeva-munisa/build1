import { useTranslation } from "react-i18next"
import "./Build.css"
import build21 from "../../assets/img/build21.png"

function Build(){
    const {t}= useTranslation();

    return(

        <>
         <div className="build" >
            <img className="build__img" src={build21} alt="" />
            <div className="container build__container">
                <div className="build__box">
                    <h1 className="build__title">{t("build.atayev")}</h1>
                    <h2 className="build__title__name">{t("build.atayev")}</h2>
                    <p className="build__text">{t("build.dont")} </p>
                   <a href="#" className="build__link">{t("build.more")}</a>
                </div>
            </div>
         </div>
        </>
    )
}
export default Build