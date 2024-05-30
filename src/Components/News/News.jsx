import "./News.css"
import news1 from "../../assets/img/news1.jpg"
import news2 from "../../assets/img/news2.jpg"
import news3 from "../../assets/img/news3.jpg"
import news4 from "../../assets/img/news4.jpg"

function News(){

    return(
        <>
        <div className="news">
            <div className="container news__container">
                <h1 className="news__title">All our news</h1>

                <ul className="news__list">
                    <li className="news__item">
                        <img className="news__img" src={news1} alt="" />
                        <div className="news__box">
                            <button className="news__btn">News</button>
                            <h1 className="news__title">Who is a construction project manager?</h1>
                            <p className="news__text">The Discover Invest company has several construction project managers. This is a specialist responsible for the successful implementation of the construction site entrusted to him. He manages the entire process, from the planning stage and approval of project documentation to the commissioning of the building, and sometimes also performs post-project support. Latest  </p>
                        </div>
                    </li>
                    <li className="news__item">
                    <img className="news__img" src={news2} alt="" />
                    <div className="news__box">
                    <button className="news__btn">News</button>
                    <h1 className="news__title">Congratulations to everyone on the upcoming 2024!</h1>
                    <p className="news__text">The sophisticated interior design of the halls will create an atmosphere of comfort even before entering the apartment, and a convenient navigation system will help you easily get to the floor you need or exit to the territory</p>
                        </div>
                        </li>
                        <li className="news__item">
                        <img className="news__img" src={news3} alt="" />
                        <div className="news__box">
                        <button className="news__btn">News</button>
                        <h1 className="news__title">Location</h1>
                        <p className="news__text">The transport infrastructure allows you to easily move to anywhere in the city: you just have to choose the desired and desired direction.</p>
                        </div>
                        </li>
                        <li className="news__item">
                        <img className="news__img" src={news4} alt="" />
                        <div className="news__box">
                        <button className="news__btn">News</button>
                        <h1 className="news__title">We continue to introduce you to the multifunctional objects of Discover Invest.</h1>
                        <p className="news__text">We continue to introduce you to the multifunctional objects of Discover Invest. One of them is the Yangi Choshtepa residential complex built in the Yangihayat district of Tashkent. The total construction area is 12 hectares. To date, 29 houses have been built.</p>

                        </div>
                        </li>

                        
                </ul>
            </div>
        </div>
        
        
        </>
    )
}

export default News