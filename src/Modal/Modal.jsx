import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import './Modal.css';
import i18next from "i18next";
export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
 
  const ChangeLanguage=(event)=>{
    const selectedLanguage = event.target.value;
    i18next.changeLanguage(selectedLanguage)
  
  }
  const toggleDrawer =  ()  =>{
    setOpen(true);
  };
  const onCloseD = () =>{
    setOpen(false)
  }
 const {t} = useTranslation()

  const DrawerList = (
    <Box sx={{ width: 250 }}  >
      <div className="modal">
        <div className=" container modal__container">
      <ul className="modal__list">
           < li className="modal__item" >
                      <a href="#" className="modal__link">{t("navbar.infor")}</a>
                </li>
                <li className="modal__item">
                         <a href="#" className="modal__link">{t("navbar.about")}</a>                </li>
                <li className="modal__item">
                            <a href="#" className="modal__link">{t("navbar.enter")}</a>                </li>
                <li className="modal__item">
                            <a href="#" className="modal__link">{t("navbar.our")}</a>              
             </li>
             < li className="modal__item" >
                        <a href="#" className="modal__link">{t("navbar.news")}</a>              
               </li>
               < li className="modal__item" >
                        <a href="#" className="modal__link">{t("navbar.commun")}</a>           
                   </li>
                
                
                </ul>

                   <select className='modal__select' onChange={ChangeLanguage} value={i18next.language}>
                  <option  className="modal__option" value="en">En</option>
                  <option className="modal__option"  value="uz">Uz</option>
                  <option className="modal__option"  value="ru">Ru</option>
                </select>

                </div>
                </div>
    </Box>
  );

  return (
    <div className="modali">
      <Button  onClick={toggleDrawer}>
      
      <i className="fa-solid fa-bars fa-2xl" style={{color:"white",}}></i>
    
      </Button>
      <Drawer open={open} onClose={onCloseD} >
        {DrawerList}
      </Drawer>
    </div>
  );
}