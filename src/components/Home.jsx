import React from 'react'
// import { motion } from 'framer-motion'
import './home.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import resume from '../files/resume.pdf';

const Home = (props) => {

  const { darkMode } = props

  return (
    <>
      <div className='home-container' style={{width:'100%'}}>
        {/* <div className='home-ProfilePic'>
          <img src='profilePic2.jpg'/>
        </div> */}
          <div className='home-details'>
            <p style={{color: darkMode && '#c8c9c9'}}>
              <span style={{display:'block'}}>
                I'm <span className='home-details-name'>Mohammed Aashiq</span></span> 
                a front-end developer who enjoys building user-friendly and 
                visually appealing websites. 
                {/* My goal is to create smooth, interactive 
                experiences that make the web more enjoyable for everyone. */}
            </p>
          </div>
          <div className='home-btns'>
            
              <a href='mailto:mdaashiqin2000@gmail.com'>Contact Me</a>
            {/* </button> */}
            {/* <button> */}
              <a href='resume/CV.pdf' download='Moahammed Aashiq CV.pdf'>Download CV</a>
            {/* </button> */}
          </div>
          <div className='home-links'>
              <div></div>
              <div className='home-linksIcons'>
                  <GitHubIcon 
                    onClick={() => window.open('https://github.com/theaashiq', '_blank')}
                    className='home-linksIcon'   
                    style={{color: darkMode ? '#c8c9c9' : '#333'}}/>
                  <LinkedInIcon
                  onClick={() => window.open('https://www.linkedin.com/in/mohammed-aashiq-445569247/', '_blank')}
                    className='home-linksIcon'   
                    style={{color: darkMode ? '#c8c9c9' : '#333'}}/>
                  <InstagramIcon 
                    onClick={() => window.open('https://www.instagram.com/_the_aashiq?igsh=MW5zejlpbXZxcDgxdg==', '_blank')} 
                    className='home-linksIcon'
                    style={{color: darkMode ? '#c8c9c9' : '#333'}}/>  
              </div>
          </div>
      </div>
    </>
  )
}

export default Home
