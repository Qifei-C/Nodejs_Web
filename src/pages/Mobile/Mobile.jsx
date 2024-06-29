import React from 'react';
import "../../components/home/home.css";
import CV from "../../Qifei_CV.pdf"
import HeaderSocials from "../../components/home/HeaderSocials";

const Mobile = () => {
  return (
    <section className="home container" id="home">
            <div className="intro">
                <h1 className="home__name">Unsupported Screen Size</h1>
                <span className="home__education">It looks like you are trying to access this application from an unsupported device or screen size. 
                For the best experience, please use a device with a larger screen.</span>
                <HeaderSocials />
                
                <a href={CV} download="Qifei_CV.pdf" className="btn">Download CV</a>
            </div>
        </section>
  );
};

export default Mobile;