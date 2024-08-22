import React from 'react'
// import { motion } from 'framer-motion'
import './home.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Home = (props) => {

  const { darkMode } = props

  return (
    <>
      <div className='home-container' style={{width:'100%'}}>
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
            <button>Contact Me</button>
            <button>Download CV</button>
          </div>
          <div className='home-links'>
              <div></div>
              <div className='home-linksIcons'>
                  <InstagramIcon  
                    className='home-linksIcon'
                    style={{color: darkMode ? '#c8c9c9' : '#333'}}/>
                  <LinkedInIcon
                    className='home-linksIcon'   
                    style={{color: darkMode ? '#c8c9c9' : '#333'}}/>
              </div>
          </div>
      </div>
    </>
  )
}

export default Home
