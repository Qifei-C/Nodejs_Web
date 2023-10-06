import React from 'react';
// icon
import {BsArrowUpRight} from 'react-icons/bs';
// motion
import {motion} from 'framer-motion'
// variants
import { fadeIn } from '../variants';

// services data
const services = [
  {
    name: 'Deep Learning',
    description:
    'Harnessing deep learning techniques to develop predictive models for anticipating credit risks and detecting fraudulent transactions. ',
    link: 'Learn more',
  },
  {
    name: 'Recommendation Systems',
    description:
    'Crafted algorithms tailored to diverse datasets. Systems prioritize user-centric recommendations, ensuring a tailored content discovery and enriched user experience.',
    link: 'Learn more',
  },
  {
    name: 'Natural Language Processing',
    description:
    'Development of a dynamic text prediction tool based on the Word2Vec model. Exploration underscores the potential of machines in semantic understanding.',
    link: 'Learn more',
  },
  {
    name: 'Data Analytics',
    description:
    'Analysis of global happiness and wellbeing trends across 15 years. Aimed at elucidating underlying patterns and major influences on societal contentment.',
    link: 'Learn more',
  },
  {
    name: 'Numerical Analysis',
    description:
    'Work spans matrix theories, differential equations, and integration techniques. Bridging pure mathematical concepts with practical applications and error analysis.',
    link: 'Learn more',
  },
]

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text & img */}
          <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{once:true,amount:0.7}} className='flex-1 mx-auto lg:bg-services bg-contain lg:bg-bottom lg:mr-16 bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>So Far I Go.</h2>
            <h3 className='h3 max-w-[455px] text-[22px] mb-16'>B.S. in Applied Mathematics and Applied Data Science <span>at University of California, Santa Barbara.</span></h3>
            <button className='btn btn-sm'>Link to Github</button>
          </motion.div>
          {/* services */}
          <motion.div variants={fadeIn('left', 0.3)} initial='hidden' whileInView={'show'} viewport={{once:true,amount:0.7}} >
            {/* services list*/}
            <div>
              {services.map((services, index) =>{
                // destructure service
                const {name, description, link} = services;
                return (
                  <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                    <div className='max-w-[476px]'>
                        <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-4'>{name}</h4>
                        <p className='font-tertiary text-[16px] leading-tight'>{description}</p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                        <BsArrowUpRight />
                      </a>
                      <a href='#' className='text-gradient text-sm'>
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
