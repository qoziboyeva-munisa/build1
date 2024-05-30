

import "./Ending.css"

function Ending(){

    return(
        <>
        <div className="ending">
            <div className="container ending__container">
                
                <div className="ending__box">
                   <h1 className="ending__title">Do you have any questions, suggestions or requests?</h1>
                    <form className="ending__form">
                        <input type="text" className="ending__input" placeholder="Your name" />
                        <input type="text" className="ending__input"  placeholder="Your phone number"/>
                        <input type="text" className="ending__input__name" placeholder="Your messege" />
                        <button className="ending__btn">Sending</button>
                    </form>
                   </div>
            
            </div>
        </div>
        
        </>
    )
}
export default Ending