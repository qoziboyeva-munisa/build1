import "./Main.css"
import main1 from "../../assets/img/main1.jpg"
import main2 from "../../assets/img/main2.jpg"
import main3 from "../../assets/img/main3.jpg"
import main4 from "../../assets/img/main4.jpg"
import main5 from "../../assets/img/main5.jpg"
import main6 from "../../assets/img/main6.jpg"

function Main(){

    return(

        <>
         <div className="main">
                <h1 className="main__title">Your dream home</h1>
                 <div className="main__wrapper">
                 <img className="main__img" src={main1} alt="" />
                 <img className="main__img" src={main2} alt="" />
                 <img className="main__img" src={main3} alt="" />
                 <img className="main__img" src={main4} alt="" />
                 <img className="main__img" src={main5} alt="" />
                 <img className="main__img" src={main6} alt="" />
                 </div>
            </div>
        </>
    )
}

export default Main