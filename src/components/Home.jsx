import React from 'react'
// import { motion } from 'framer-motion'
import './home.css'

const Home = (props) => {

  const { darkMode } = props

  return (
    <>
      <div className='home-container'>
          <div className='home-details'>
            <p style={{color: darkMode && '#c8c9c9'}}>
              <span style={{display:'block'}}>
                I'm <span className='home-details-name'>Mohammed Aashiq</span></span> 
                a front-end developer who enjoys building user-friendly and 
                visually appealing websites. My goal is to create smooth, interactive 
                experiences that make the web more enjoyable for everyone.
            </p>
          </div>
          <div className='home-btns'>
            <button>Contact Me</button>
            <button>Download CV</button>
          </div>
          <div>

          </div>
      </div>
    </>
  )
}

export default Home
