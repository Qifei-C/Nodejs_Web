import React from "react";
import "./testimonials.css";
import Image1 from "../../assets/avatar-1.svg";
import Image3 from "../../assets/avatar-3.svg";
// import Swiper core and required modules
import {  Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper style
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
      id: 1,
      image: Image1,
      title: "Niu Mu",
      subtitle: "Student at Duke University",
      comment:
        "I enjoy working with him and learn so much. Good luck! 👍",
    },
    {
        id: 2,
        image: Image3,
        title: "Han Wu",
        subtitle: "Student at University of Southern California",
        comment:
          "Collaborating on this project was a fantastic experience. He is incredibly innovative and a pleasure to work with. 🌟",
      },
      {
        id: 3,
        image: Image1, // Replace with actual image path
        title: "Andrew William",
        subtitle: "Senior Data Analyst at Google",
        comment: "He is a fast learner and brings a lot of enthusiasm to the team.",
      },
  ];

const Testimonials = () => {
    return (
        <section className="testimonials container section" id="comments">
            <h2 className="section__title">Clients & Review</h2>

            <Swiper className="testmonials__container grid"
            // install Swiper modules
            modules={[ Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            grabCursor={true}
            pagination={{ clickable: true }}
            >
                {data.map(({id, image, title, subtitle, comment}) => {
                    return (
                        <SwiperSlide className="testimonial__item" key={id}>
                            <div className="thumb">
                                <img src={image} alt="" />
                            </div>
                            <h3 className="testimonial__title">{title}</h3>
                            <span className="subtitle">{subtitle}</span>
                            <div className="comment">{comment}</div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}

export default Testimonials