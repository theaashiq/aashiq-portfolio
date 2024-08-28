import React from 'react'
import './contact.css'
import { motion } from 'framer-motion'

const Contact = (props) => {

  const { darkMode } = props

  return (
    <>
      <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{ duration: 1}}
        viewport={{ once: true, amount: 0.5 }}
        className='contact-container'>
        <div>
          Contact<span></span>
          <div className='contact-Block'>
            <form>
              <div className='contact-block1'>
                <div style={{backgroundColor: darkMode ? '#3e4042' : '#f2f2f2'}}>
                  <input type='text' />
                </div>
                <div style={{backgroundColor: darkMode ? '#3e4042' : '#f2f2f2'}}>
                  <input type='text' />
                </div>
              </div>
              <div className='contact-blockEmail' style={{backgroundColor: darkMode ? '#3e4042' : '#f2f2f2'}}>
                <input type='text' />  
              </div>
              <div className='contact-blockMsg' style={{backgroundColor: darkMode ? '#3e4042' : '#f2f2f2'}}>
                <textarea />  
              </div>  
              <div className='contact-blockSubmit'>
                <input type='submit'/>
              </div>  
            </form>    
          </div>  
        </div>
      </motion.div>
    </>
  )
}

export default Contact