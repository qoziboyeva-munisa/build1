
import "./Company.css"
import company1 from "../../assets/img/company1.jpg"
function Company(){

    const backgraundImgStyle = { 
        background: `linear-gradient(rgba(0, 0, 0 ,0.4), rgba(0, 0, 0, 0.4)),url(${company1})`,
        backgroundSize:"cover",
        backgroundPosition:"center",
        height:"100%",
    
    }

    
 

    return (
        <>
        <div className="company" 
        style={backgraundImgStyle}
        >
            <div className="container company__container"  >
               <div className="company__box">
               <h1 className="company__title">Our company</h1>
                <ul className="company__list">
                    <li className="company__item">
                        <h1 className="company__title__name">120 +</h1>
                        <p className="company__text">Number of employees</p>
                    </li>
                    <li className="company__item">
                        <h1 className="company__title__name">43 +</h1>
                        <p className="company__text">Objects</p>
                    </li>
                    <li className="company__item">
                        <h1 className="company__title__name">250 +</h1>
                        <p className="company__text">Special equipment</p>
                    </li>
                    <li className="company__item">
                        <h1 className="company__title__name">2 +</h1>
                        <p className="company__text">14 years on the market</p>
                    </li>
                </ul>
               </div>
            </div>
        </div>
        
        </>
    )
}
export default Company