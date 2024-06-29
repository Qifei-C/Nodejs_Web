import React from "react";
import "./certificates.css"
import Image1 from "../../assets/cfa.svg";
import Image2 from "../../assets/aws.svg";
import Image3 from "../../assets/oracle.svg";

const data = [
    {
      id: 1,
      image: Image1,
      title: "CFA Level I",
      description:
        "Awarded to candidates with proven competence in investment analysis and wealth management.",
      isWhite: true,
      isDark: false,
    },
    {
      id: 2,
      image: Image2,
      title: "AWS Machine Learning Specialty",
      description:
        "Awarded to specialty who validates expertise in building, training, tuning, and deploying machine learning (ML) models on AWS.",
      isWhite: false,
      isDark: false,
    },
    {
      id: 3,
      image: Image3,
      title: "MySQL 8.0 Database Administrator",
      description:
        "Awarded to specialty who can design, develop, and maintain MySQL schema objects and control transactions in SQL and applications..",
      isWhite: false,
      isDark: true,
    },
  ];
  

const certificates = () => {
    return (
        <section className="certificates container section" id="certificates">
            <h2 className="section__title">Certificates</h2>

            <div className="certificates__container grid">
                {data.map(({id, image, title, description, isWhite, isDark}) => {
                    return (
                        <div className="certificates__card" key={id}>
                            <div className="certificates__img-container">
                                <img src={image} alt="" className={`certificates__img ${isWhite ? 'certificates__img--white' : ''} ${isDark ? 'certificates__img--dark' : ''}`} />
                            </div>
                            <h3 className="certificates__title">{title}</h3>
                            <p className="certificates__description">{description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}

export default certificates