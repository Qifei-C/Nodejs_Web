import React from 'react';
// motion
import {motion} from 'framer-motion'
// variants
import { fadeIn } from '../variants';
// img
import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'

const Work = () => {
  return (
    <section id='work' className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div 
          variants={fadeIn('right', 0.2)} initial='hidden' whileInView={'show'} viewport={{once:true,amount:0.7}}
          className='flex-1 flex flex-col gap-y-4 mb-10 lg:mb-0'>
            {/*text*/}
            <div>
              <h2 className='h2 leading-tight text-accent'>
                Recent Researches
              </h2>
              <p className='max-w-sm mb-16'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
              </p>
              <button className='btn btn-sm mb-16'>
                View all proposal
              </button>
            </div>
            {/*image delete code part*/}
          </motion.div>
          <motion.div 
          variants={fadeIn('left', 0.2)} initial='hidden' whileInView={'show'} viewport={{once:true,amount:0.7}}
          className='flex-1 flex flex-col gap-y-8'>
            {/*image*/}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                {/*overlay*/}
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
                </div>
                {/*img*/}
                <img className='group-hover:scale-150 transition-all duration-500' src={Img1} alt='' />
                {/*pretitle*/}
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span>
                    UI/UX Design
                  </span>
                </div>
                {/*title*/}
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='text-3xl text-white'>Project Title</span>
                </div>
            </div>
            {/*image*/}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                {/*overlay*/}
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
                </div>
                {/*img*/}
                <img className='group-hover:scale-150 transition-all duration-500' src={Img1} alt='' />
                {/*pretitle*/}
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span>
                    UI/UX Design
                  </span>
                </div>
                {/*title*/}
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='text-3xl text-white'>Project Title</span>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;


//            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
//              {/*overlay*/}
//              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
//              </div>
//              {/*img*/}
//              <img className='group-hover:scale-150 transition-all duration-500' src={Img1} alt='' />
//              {/*pretitle*/}
//              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
//                <span>
//                  UI/UX Design
//                </span>
//              </div>
//              {/*title*/}
//              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
//                <span className='text-3xl text-white'>Project Title</span>
//              </div>
//          </div>

