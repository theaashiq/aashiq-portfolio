import React from 'react'
import './about.css'

const About = (props) => {
  const { darkMode } = props

  return (
    <>
      <div className='about-container'>
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
      </div>
    </>
  )
}

export default About
