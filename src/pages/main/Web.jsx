import React from 'react'
import { useRef } from 'react';
import './web.css';
import Sidebar from '../../components/sidebar/Sidebar.jsx';
import Home from '../../components/home/Home.jsx';
import About from '../../components/about/About.jsx';
import Certificate from '../../components/certificates/Certificates.jsx';
import Resume from '../../components/resume/Resume.jsx'; 
import Portfolio from '../../components/portfolio/Portfolio.jsx';
import Pricing from '../../components/pricing/Pricing.jsx';
import Testimonials from '../../components/testimonials/Testimonials.jsx';
import Blog from '../../components/blog/Blog.jsx';
import Contact from '../../components/contact/Contact.jsx'
import Footer from '../../components/footer/Footer.jsx';
import AnimatedBackground from '../../assets/background/AnimatedBackground.jsx';


function Body() {
  const mainRef = useRef(null);
  return (
    <>
      <Sidebar mainRef={mainRef} />
      <main className='main' ref={mainRef}>
      <div className="home-container">
        <Home />
        <AnimatedBackground className="moving-background"/>
      </div>
        <About />
        <Certificate />
        <Resume />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default Body

