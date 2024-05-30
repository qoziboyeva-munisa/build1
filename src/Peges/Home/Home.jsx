
import Build from "../../Components/Build/Build"
import Company from "../../Components/Company/Company"
import Ending from "../../Components/Ending/Ending"
import Exchange from "../../Components/Exchange/Exchange"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import Main from "../../Components/Main/Main"
import News from "../../Components/News/News"
import Project from "../../Components/Project/Project"
import Servic from "../../Components/Servic/Servic"
import "./Home.css"

function Home(){
    return(
        <>
       
        <Header/>
        <Servic/>
        <Company/>
        <Main/>
        <Project/>
        <News/>
        <Exchange/>
        <Build/>
        <Ending/>
        <Footer/>
        </>
    )
}
export default Home