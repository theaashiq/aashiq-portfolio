import React from 'react'
import { motion } from 'framer-motion'
import './footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = (props) => {

const { darkMode } = props
  
  return (
    <>
      <div className='footer-container'>
          <div className='footer-designBy' style={{color: darkMode ? '#000' : '#fff'}}>
            Design and Developed By Mohammed Aashiq
          </div>
          <div className='footer-thankYou' style={{color: darkMode ? '#000' : '#fff'}}>
            Thank for scrolling
          </div>
          <div className='footer-gmail' style={{color: darkMode ? '#000' : '#fff'}}>
              <div>mdaashiqin2000@gmail.com</div>
              <div style={{marginTop:'10px'}}>
                <InstagramIcon/>
                <LinkedInIcon/>
                <GitHubIcon/>
              </div>
          </div>
      </div>
    </>
  )
}

export default Footer
