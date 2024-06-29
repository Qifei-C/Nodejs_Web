import React from "react";
import "./about.css";
import about from "../../assets/avatar-2.svg";
import AboutBox from "./AboutBox";

const About = () => {
    return (
        <section className="about container section" id='about'>
            <h2 className="section__title">
                About Me
            </h2>
            <div className="about__info">
                <p className="about__description">
                I am a driven and knowledgeable professional with a robust background in finance, data management, and machine learning. Currently, I am pursuing a master's degree in Systems Engineering at the University of Pennsylvania, where my focus is on leveraging big data to develop innovative investment systems that can effectively manage market risk.
                </p>
                <p className="about__description">
                My expertise lies in database building, AWS ML training and organization, and quantitative analysis. I am passionate about harnessing the power of data to provide insightful, data-driven solutions. Whether you need help with constructing a robust database, organizing and training machine learning models on AWS, or delving into quantitative finance, I am here to provide top-notch services tailored to meet your needs.
                </p>
            </div>

            <AboutBox />
        </section>
    )
}

export default About