import React from 'react';
// countup
import { useState } from 'react';
// identify whether an anime has been trigered
import CountUp from 'react-countup';
// intersection observer
import {useInView} from 'react-intersection-observer'
// motion
import {motion} from 'framer-motion'
// variant
import {fadeIn} from '../variants';
import {Link} from 'react-scroll'


const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  return (
    <section id='about' className='section' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/*img*/}
          <motion.div variants={fadeIn('right',0.3)} initial='hidden' whileInView={'show'} viewport={{once:true, amount:0.3}} className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></motion.div>
          {/*text*/}
          <motion.div variants={fadeIn('left', 0.5)} initial='hidden' whileInView={'show'} viewport={{once:true,amount:0.7}}  className='flex-1'>
            <h2 className='h2 text-accent'>Education</h2>
            <h3 className='h3 mb-4'>B.S. in Applied Mathematics and Applied Data Science <span>at University of California, Santa Barbara.</span></h3>
            <p className='mb-6'>
            My academic and personal research endeavors are deeply rooted in NLP, Deep Learning, and the transformative power of data analytics.
            </p>
            {/*stats*/}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] fount-tertiary text-gradient mb-2'>
                  {/*Unlock Animation of CountUp*/}
                  {inView && !hasAnimated ?
                  <CountUp start={0} end={3.95} decimals={2} duration={3} onEnd={() => setHasAnimated(true)}/> 
                  : (<span>3.95</span>) }
                </div>
                <div className='font-primary text-sm tracking-[0px]'>
                  GPA In D.S.<br/>
                  Relevant Courses
                </div>
              </div>
              <div>
                <div className='text-[40px] fount-tertiary text-gradient mb-2'>
                  {/*Unlock Animation of CountUp*/}
                  {inView && !hasAnimated ?
                  <CountUp start={0} end={8} duration={5} onEnd={() => setHasAnimated(true)}/> 
                  : (<span>8</span>) }
                </div>
                <div className='font-primary text-sm tracking-[0px]'>
                  Projects <br/>
                  Completed 
                </div>
              </div>
              <div>
                <div className='text-[40px] fount-tertiary text-gradient mb-2'>
                  {/*Unlock Animation of CountUp*/}
                  {inView && !hasAnimated ?
                  <CountUp start={0} end={2} duration={5} onEnd={() => setHasAnimated(true)}/> 
                  : (<span>2</span>) }
                </div>
                <div className='font-primary text-sm tracking-[0px]'>
                  Ongoing <br/>
                  Researches 
                </div> 
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg'>Download My CV</button>
              <Link to='about' activeClass='active' smooth={true} className='text-gradient btn-link'>
                  My Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
