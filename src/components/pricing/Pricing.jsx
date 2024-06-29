import React from "react";
import "./pricing.css";
import Image1 from "../../assets/price-1.svg";
import Image2 from "../../assets/price-2.svg";
import Image3 from "../../assets/price-3.svg";


const Pricing = () => {
    return (
        <section className="pricing container section">
            <h2 className="section__title">Pricing Plans</h2>

            <div className="pricing__container grid">
                <div className="pricing__item">
                    <img src={Image1} alt="" className="pricing__img" />
                    <h3 className="pricing__plan">Basic</h3>
                    <p className="pricing__title">Title1 replace by anything</p>
                    <p className="pricing__support">Email support</p>
                    <h3 className="price">
                        <em>$</em> 9 <span>Month</span>
                    </h3>
                    <a href="" className="btn">Get Started</a>
                </div>

                <div className="pricing__item best">
                    <span className="badge">Recommended</span>
                    <img src={Image2} alt="" className="pricing__img" />
                    <h3 className="pricing__plan">Item2</h3>
                    <p className="pricing__title">Title2 replace by anything</p>
                    <p className="pricing__support">Further support</p>
                    <h3 className="price">
                        <em>$</em> 15 <span>Month</span>
                    </h3>
                    <a href="" className="btn">Get Started</a>
                </div>

                <div className="pricing__item">
                    <img src={Image3} alt="" className="pricing__img" />
                    <h3 className="pricing__plan">Item3</h3>
                    <p className="pricing__title">Title3 replace by anything</p>
                    <p className="pricing__support">Ultimate support</p>
                    <h3 className="price">
                        <em>$</em> 19 <span>Month</span>
                    </h3>
                    <a href="" className="btn">Get Started</a>
                </div>
            </div>
        </section>
    )
}

export default Pricing