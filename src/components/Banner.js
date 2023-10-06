import React from 'react';
// images
import Image from '../assets/avatar.svg';
// icons
import {FaGithub,FaYoutube,FaLinkedin} from 'react-icons/fa'
// type animation
import {TypeAnimation} from 'react-type-animation'
// motion
import {motion} from 'framer-motion'
// variants
import {fadeIn} from '../variants'
import {Link} from 'react-scroll'

const Banner = () => {
  return (
    <section id='home' className='min-h-[85vh] lg:min-h-[78vh] flex items-center'>
      <div className='container mx-auto'>
         <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* text */}
            <div className='flex-1 text-center font-secondary lg:text-left'>
              <motion.h1 variants={fadeIn('up', 0.3)} initial='hidden' whileInView={'show'} viewport={{once:true,amount:0.7}} className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
                Hi, <span>I'm Qifei!</span>
              </motion.h1>
              <motion.div variants={fadeIn('up', 0.4)} initial='hidden' whileInView={'show'} viewport={{once:true,amount:0.7}} className='mb-6 text-[36px] lg:text[60px] font-secondary font-semibold uppercase leading-[2]'>
                <span className='text-white mr-3'>A/AN</span>
                <TypeAnimation sequence={[
                  'Data Analyst', 2000, 
                  'Algorthm Writer', 2000,
                  'Simulation', 2000,
                ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}/>
              </motion.div>
              <motion.p variants={fadeIn('up', 0.5)} initial='hidden' whileInView={'show'} viewport={{once:true,amount:0.7}} className='mb-8 max-w-lg mx-auto lg:mx-0'>
              My academic and personal research endeavors are deeply rooted in NLP, Deep Learning, and the transformative power of data analytics. Here's a snapshot of my projects and experiences:
              </motion.p>
              <motion.div variants={fadeIn('up', 0.6)} initial='hidden' whileInView={'show'} viewport={{once:true,amount:0.7}} className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
                <button className='btn btn-lg'>Download My CV</button>
                <Link to='about' activeClass='active' smooth={true} spy={true} className='text-gradient btn-link'>
                  My Projects
                </Link>
              </motion.div>
              {/* socials */}
              <motion.div variants={fadeIn('up', 0.7)} initial='hidden' whileInView={'show'} viewport={{once:true,amount:0.7}} className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
                  <a href='#'>
                    <FaYoutube/>
                  </a>
                  <a href='https://github.com/Qifei-C' target="_blank" rel="noopener noreferrer">
                    <FaGithub/>
                  </a>
                  <a href='https://www.linkedin.com/in/qifei-c-339a76247' target="_blank" rel="noopener noreferrer">
                    <FaLinkedin/>
                  </a>
                </motion.div>
            </div>
          {/* Image */}
            <motion.div variants={fadeIn('down', 0.5)} initial='hidden' whileInView={'show'} viewport={{once:true,amount:0.7}} className='hidden lg:flex flex-1 max-w-[320px= lg:max-w-[482px]'>
              <img src={Image} alt=''/>
            </motion.div>
         </div>
      </div>
    </section>
    );
};

export default Banner;
