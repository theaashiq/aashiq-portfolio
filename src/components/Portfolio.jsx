import React from 'react'
import { motion } from 'framer-motion'
import './portfolio.css'
import { myProject } from './db/data'

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
                <img src={obj.pic}/>
              </div>
              <div>

              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  )
}

export default Portfolio