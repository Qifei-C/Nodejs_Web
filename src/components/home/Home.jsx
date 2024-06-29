import React from "react";
import "./home.css";
import Me from "../../assets/avatar-1.svg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes"


const Home = () => {
    return (
        <section className="home container" id="home">
            <div className="intro">
                <img src={Me} alt="" className="home__img" />
                <h1 className="home__name">Qifei C</h1>
                <span className="home__education">This space left for self-introduction</span>

                <HeaderSocials />
                
                <a href="#contact" className="btn">Hire Me</a>

                <ScrollDown />
            </div>

        <Shapes />
        </section>
    )
}

export default Home