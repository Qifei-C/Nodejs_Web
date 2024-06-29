import React from 'react'
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


function Body() {
  return (
    <>
        <Sidebar />
      <main className='main'>
        <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>
        <Home />
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

