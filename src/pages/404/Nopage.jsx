import React from "react";
import "../../components/home/home.css";
import Me from "../../assets/avatar.webp";
import HeaderSocials from "../../components/home/HeaderSocials";
import ScrollDown from "../../components/home/ScrollDown";
import Shapes from "../../components/home/Shapes"
import CV from "../../Qifei_CV.pdf"


const Home = () => {
    return (
        <section className="home container" id="home">
            <div className="intro">
                <img src={Me} alt="" className="home__img" />
                <h1 className="home__name">Qifei C</h1>
                <span className="home__education">This website is under maintenance.</span>

                <HeaderSocials />
                
                <a href={CV} download="Qifei_CV.pdf" className="btn">Download CV</a>
            </div>
        </section>
    )
}

export default Home
