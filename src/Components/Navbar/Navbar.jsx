import "./Navbar.css"

import build1 from "../../assets/img/build1.png"
import { useTranslation } from "react-i18next";
import TemporaryDrawer from "../../Modal/Modal";
import { useEffect, useState } from "react";
import footer from "../../assets/img/footer.png"

function Navbar(){
    const {t,i18n} = useTranslation();
    const [logoiTem, setlogoItem] = useState(false);
    const handleChange = (event) =>{
      const selectedLaungage = event.target.value;
      i18n.changeLanguage(selectedLaungage);
    }

    const [navColor, setNavColor] = useState('transparent');
    const [linkColor, setLinkColor] = useState('transparent');

    const handleScroll = () => {

        if (window.scrollY > 150 && window.innerWidth > 1000) {
          setlogoItem(true)
          setNavColor('blue');
          setLinkColor('blue');
        
    
        } else {
          setlogoItem(false)
          setNavColor('transparent');
          setLinkColor('transparent');
         
    
        }
      };






    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
      
        };
      
      }, []);




    return(

        <>
        <div className= {`navbar ${navColor === 'blue' ? 'navbar__blue' : 'navbar-transparent'}`}>
            <div className="container navbar__container">
                <ul className="navbar__list">
                    <li className="navbar__item">
                        <a href="#header" className={`navbar__link ${linkColor ? 'link__blue' : 'link-transparent'}`}>{t("navbar.infor")}</a>
                    </li>
                    <li className="navbar__item">
                        <a href="#project" className={`navbar__link ${linkColor === 'blue' ? 'link__blue' : 'link-transparent'}`}>{t("navbar.about")}</a>
                    </li>
                    <li className="navbar__item">
                        <a href="#servic" className={`navbar__link ${linkColor === 'blue' ? 'link__blue' : 'link-transparent'}`}>{t("navbar.enter")}</a>
                    </li>
                    <li className="navbar__item">
                        <a href="#header" className="navbar__link">
                            <img className={`navbar__img `} src={logoiTem?footer:build1}  alt="" />
                        </a>
                    </li>
                    <li className="navbar__item">
                        <a href="#project" className={`navbar__link ${linkColor === 'blue' ? 'link__blue' : 'link-transparent'}`}>{t("navbar.our")}</a>
                    </li>
                    <li className="navbar__item">
                        <a href="#news" className={`navbar__link ${linkColor === 'blue' ? 'link__blue' : 'link-transparent'}`}>{t("navbar.news")}</a>
                    </li>
                    <li className="navbar__item">
                        <a href="#company" className={`navbar__link ${linkColor === 'blue' ? 'link__blue' : 'link-transparent'}`}>{t("navbar.commun")}</a>
                    </li>
                </ul>
                <TemporaryDrawer/>
                <select className={`navbar__select ${linkColor === 'blue' ? 'link__blue' : 'link-transparent'}`} onChange={handleChange} value={i18n.language}>
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