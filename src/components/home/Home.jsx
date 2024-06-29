import React from "react";
import "./home.css";
import Me from "../../assets/avatar-trans.png";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes"
import CV from "../../Qifei_CV.pdf"


const Home = () => {
    return (
        <section className="home container" id="home">
            <div className="intro">
                <div className="home__img-container">
                    <img src={Me} alt="" className="home__img" />
                </div>
                <h1 className="home__name">Qifei C</h1>
                <span className="home__education">Welcome to my professional portfolio.</span>

                <HeaderSocials />
                
                <a href={CV} className="btn">Download CV</a>

                <ScrollDown />
            </div>

        </section>
    )
}

export default Home