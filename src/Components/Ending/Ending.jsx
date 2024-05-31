

import { useTranslation } from "react-i18next"
import "./Ending.css"
import axios from "axios";
import { message } from "antd";
import ending from "../../assets/img/ending.png"

function Ending(){
    const {t}=useTranslation();

    const sendMessege = (event) =>{
        event.preventDefault();
        const token = "6760074363:AAG5oBjXnm9O2E0PGwDihFH5eArxYuyqxk0";
        const chat_id = 5376061460;
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const name = document.getElementById("name").value;
        const number = document.getElementById("number").value;
        const messeg = document.getElementById("messeg").value;
        const textcontent = ` Ismi:${name} \n Nomeri:${number} \n messeg:${messeg}`;
    

    axios({
        url:url,
        method:"POST",
        data:{
            "text":textcontent,
            "chat_id":chat_id
        }
    }).then((res)=>{
       message.success("yuborildi")
       }).catch((error)=>{
        message.error("xatolik")
        console.log("yuborishda xatolik", error);
       })
}

    return(
        <>
        <div className="ending">
            <div className="container ending__container">

                <div className="ending__box">
                <img className="ending__img" src={ending} alt="" />
                  <div className="ending__wrapper">
                  <h1 className="ending__title">{t("ending.have")}</h1>
                    <form className="ending__form" onSubmit={sendMessege} >
                        <input id="name" type="text" className="ending__input" placeholder={t("ending.name")} />
                        <input id="number" type="text" className="ending__input"  placeholder={t("ending.number")}/>
                        <input id="messeg" type="text" className="ending__input__name" placeholder={t("ending.messege")} />
                        <button className="ending__btn">{t("ending.sending")}</button>
                    </form>
                  </div>
                   </div>
            
            </div>
        </div>
        
        </>
    )
}
export default Ending