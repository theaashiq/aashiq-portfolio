import React from 'react'
import './about.css'
import { motion } from 'framer-motion'

const About = (props) => {

  const { darkMode } = props

  const mySkills = [
    { skill: "React",
      loaction: 'logo/react-js.png' },
    { skill: 'JavaScript',
      loaction: 'logo/javascript.png' },
    { skill: 'HTML',
      loaction: 'logo/html.png' },
    { skill: 'CSS',
      loaction: 'logo/css.png' },
    { skill: 'Bootstrap',
      loaction: 'logo/bootstrap.png' },
    { skill: 'Tailwind CSS',
      loaction: 'logo/tailwind.png' },
    { skill: 'Git & GitHub',
      loaction: 'logo/github.png' }
]

  return (
    <>
      <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{ duration: 1}}
        // viewport={{amout:'all'}}
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
          <button 
            className='about-mySkill' 
            style={{backgroundColor: darkMode ? '#3e4042' : '#f2f2f2',
                    color: darkMode ? '#c8c9c9' : '#333'}}>
            <img src={obj.loaction} />
            <p>{obj.skill}</p>
          </button>
        ))}
      </div>
    </>
  )
}

export default About
