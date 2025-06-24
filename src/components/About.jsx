import React from 'react'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion';
import {styles} from '../styles';
import {services} from '../constants';
import {fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard=({index, title, icon})=>{
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={ fadeIn("right", "spring", 0.5 * index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title}
          className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>

      </motion.div>
    </Tilt>
  )
  
}
const About = () => {
  return (
    <>
    <motion.div varients={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
      
    </motion.div>
    <motion.p
    variants={fadeIn("","",0.1,1)}
    className='mt-4 text-secondary text-[17px]
    max-w-3xl leading-[30px]'
    >
      I’m a full-stack software engineer with 1.5+ years of experience building scalable web applications using React, NestJS, SQL databases, and Java. At Blink Charging, I’ve worked on microfrontend architectures, data reporting modules, and ETL services—driving performance and automation across EV analytics systems. I enjoy solving complex problems and writing clean, efficient code, whether it’s in a production environment or on LeetCode, where I regularly sharpen my skills through competitive programming. Passionate about system design, data flow optimization, and backend engineering, I’m always looking to grow through meaningful challenges and high-impact tech.
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index)=>(
        <ServiceCard key={service.title} index={index} {...service}/>
      ))}
    </div>

    </>
  )
}

export default SectionWrapper (About, "about")
{/*export default About;*/}