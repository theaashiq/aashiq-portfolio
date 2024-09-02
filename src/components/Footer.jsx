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
              <div onClick={() => window.location.href = 'mailto:mdaashiqin2000@gmail.com'} style={{cursor:'pointer'}}>
                mdaashiqin2000@gmail.com
              </div>
              <div style={{marginTop:'10px'}}>
                <GitHubIcon
                  style={{cursor:'pointer'}}
                  onClick={() => window.open('https://github.com/theaashiq', '_blank')}/>
                <LinkedInIcon
                  style={{margin: '0px 14px', cursor:'pointer'}}
                  onClick={() => window.open('https://www.linkedin.com/in/mohammed-aashiq-445569247/', '_blank')}/>
                <InstagramIcon
                  style={{cursor:'pointer'}}
                  onClick={() => window.open('https://www.instagram.com/_the_aashiq?igsh=MW5zejlpbXZxcDgxdg==', '_blank')}/>
              </div>
          </div>
      </div>
    </>
  )
}

export default Footer
