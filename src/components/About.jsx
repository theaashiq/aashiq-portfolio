import React from 'react'
import './about.css'
import { motion } from 'framer-motion'
import { mySkills, myExp } from './db/data'
import Experience from './Experience'

const About = (props) => {

  const { darkMode } = props

  const fadeInAnimationVariants = {
    initial : {
      opacity: 0,
      y: 50,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * index
      }
    })
  }

  return (
    <>
      <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{ duration: 1}}
        viewport={{ once: true, amount: 0.5 }}
        className='about-container'>
        <p className='about-heading'>About</p><span></span>
        <p className='about-details' style={{color: darkMode ? '#c8c9c9' : '#333'}}>
          I’m a Junior Frontend Developer with a solid understanding of HTML, CSS, 
          and React JS. I enjoy building clean and user-friendly websites, focusing 
          on writing good code. I’m always eager to learn new things and keep up 
          with the latest trends in web development. I’m ready to bring my skills to 
          team projects, helping to create smooth and effective web experiences. 
          I have strong problem-solving skills, and I’m committed to finding the best 
          solutions for any challenges that come my way. My attention to detail ensures 
          that every project I work on is polished and professional.
        </p>
      </motion.div>
      <p className='about-mySkill-heading'>My Skills</p>
      <div className='about-mySkill-container'>
        {mySkills.map((obj, index) => (
          <motion.div 
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView="animate"
            viewport={{
              once: true,
              amount: 0.05
            }}
            custom={index}
            className='about-mySkill' 
            style={{backgroundColor: darkMode ? '#3e4042' : '#f2f2f2',
                    color: darkMode ? '#c8c9c9' : '#333'}}>
            <img src={obj.loaction} />
            <p>{obj.skill}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{ duration: 1}}
                viewport={{ once: true, amount: 0.5 }}>
                <p className='about-experience-Heading'>Experience</p>
                <div className='about-experienceBlock'>
                    {myExp.map((obj) => (
                        <div className='about-experienceContainer'>
                            <div 
                                className='experience-From' 
                                style={{backgroundColor: darkMode && "#3e4042",
                                        color: darkMode && '#c8c9c9'
                                }}>
                                    {obj.from}
                            </div>
                            <div className='experience-div'>
                                <span></span>
                                <span></span>
                            </div>
                            <div className='experience-jb-block' style={{color: darkMode ? '#c8c9c9' : '#333'}}>
                                <div className='experience-role'>{obj.role}</div>
                                <div style={{fontWeight:'300'}} className='experience-company'>{obj.company}, {obj.loaction}</div>
                                <div className='experience-duration' style={{fontWeight:'300'}}>{obj.duration}</div>
                                <div className='experience-roles' style={{fontWeight:'300'}}>
                                    {obj.res}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

    </>
  )
}

export default About
