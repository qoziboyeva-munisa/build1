

import "./Footer.css"
import footer from "../../assets/img/footer.png"


function Footer(){
    return(
        <>
        <div className="footer">
            <div className="container footer__container">
                <ul className="footer__list">
                    <li className="footer__item">
                          <img className="footer__img" src={footer} alt="" />
                          <h1 className="footer__title">Subscribe to our social networks</h1>
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
                          <h1 className="footer__title">Our company</h1>
                          <a href="#" className="footer__link">Enterprises</a>
                          <a href="#" className="footer__link">About Us</a>
                          <a href="#" className="footer__link">News</a>
                          <a href="#" className="footer__link">Our Projects</a>
                    </li>
                    <li className="footer__item">
                          <h1 className="footer__title">Communication</h1>
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