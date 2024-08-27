import React from 'react'
import { motion } from 'framer-motion'
import './portfolio.css'
import { myProject } from './db/data'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const Portfolio = (props) => {

const { darkMode } = props

  return (
    <>
      <motion.div
        className='portfolio-container'
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:2}}
        viewport={{once:true}}>
        <p className='portfolio-heading' style={{marginTop:'0px'}}>Projects</p><span></span>
        <div className='portfolio-block'>
          {myProject.map((obj, index) => (
            <div className='portfolio'>
              <div className='portfolio-pic'>
                <img src={obj.pic} onClick={() => window.open(obj.codeLink, '_blank')}/>
              </div>
              <div className='portfolio-Details'>
                <div className='portfolio-propName'>{obj.proName}</div>
                <div className='portfolio-propDetails'>{obj.details}</div>
                <div className='portfolio-propTech'>
                  Tech
                  {obj.tech.map((obj) => (
                    <div 
                      className='portfolio-propTechList' 
                      style={{backgroundColor: darkMode ? '#272829' : '#fff'}}>
                      {obj}
                    </div>
                  ))}
                </div>
                <div className='portfolio-propBtn'>
                  <button 
                    onClick={() => window.open(obj.codeLink, '_blank')}
                    style={{backgroundColor: darkMode ? '#272829' : '#fff',
                            color: darkMode ? '#c8c9c9' : '#333'}}>
                    <img src='logo/github.png' />
                    Code
                  </button>
                  <button 
                    onClick={() => window.open(obj.link, '_blank')}
                    style={{backgroundColor: darkMode ? '#272829' : '#fff',
                                  color: darkMode ? '#c8c9c9' : '#333'}}>
                    Link
                    <ArrowOutwardIcon/>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    
    </>
  )
}

export default Portfolio