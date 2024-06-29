import React from 'react'
import './web.css';
import Sidebar from '../../components/sidebar/Sidebar.jsx';
import Home from '../../components/home/Home.jsx';
import About from '../../components/about/About.jsx';
import Service from '../../components/services/Services.jsx';
import Resume from '../../components/resume/Resume.jsx'; 
import Portfolio from '../../components/portfolio/Portfolio.jsx';
import Pricing from '../../components/pricing/Pricing.jsx';
import Testimonials from '../../components/testimonials/Testimonials.jsx';
import Blog from '../../components/blog/Blog.jsx';
import Contact from '../../components/contact/Contact.jsx'


function Body() {
  return (
    <>
        <Sidebar />
        <main className='main'>
        <Home />
        <About />
        <Service />
        <Resume />
        <Portfolio />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
    </>
  )
}

export default Body

