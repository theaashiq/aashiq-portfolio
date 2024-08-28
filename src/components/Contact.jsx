import React from 'react'
import './contact.css'
import { motion } from 'framer-motion'

const Contact = (props) => {

  const { darkMode } = props

  return (
    <>
      <div 
        // initial={{opacity:0}}
        // whileInView={{opacity:1}}
        // transition={{ duration: 1}}
        // viewport={{ once: true, amount: 0.5 }}
        className='contact-container'>
        <div>
          <p className='contact-heading'>Contact<span></span></p>
          <div className='contact-Block'>
            <form>
              <div className='contact-block1'>
                <div style={{backgroundColor: darkMode ? '#3e4042' : '#e6e6e6'}}>
                  <input type='text' style={{color: darkMode ? '#c8c9c9' : '#333'}} required />
                  <p  className='contact-placeHolder' 
                      style={{color: darkMode ? '#7c7f83' : ' #999999'}}>
                    Name
                  </p>
                </div>
                <div style={{ backgroundColor: darkMode ? '#3e4042' : '#e6e6e6'}}>
                  <input type='text' style={{color: darkMode ? '#c8c9c9' : '#333'}} required/>
                  <p  className='contact-placeHolder' 
                      style={{color: darkMode ? '#7c7f83' : '#999999'}}>
                    Phone number
                  </p>
                </div>
              </div>
              <div className='contact-blockEmail' style={{backgroundColor: darkMode ? '#3e4042' : '#e6e6e6'}}>
                <input type='text' style={{color: darkMode ? '#c8c9c9' : '#333'}} required />  
                <p  className='contact-placeHolder' 
                    style={{color: darkMode ? '#7c7f83' : ' #999999'}}>
                  Email
                </p>
              </div>
              <div className='contact-blockMsg' style={{backgroundColor: darkMode ? '#3e4042' : '#e6e6e6'}}>
                <textarea style={{color: darkMode ? '#c8c9c9' : '#333'}} required /> 
                <p  className='contact-placeHoldertext' 
                    style={{color: darkMode ? '#7c7f83' : '#999999'}}>
                  Enter your message
                </p> 
              </div>  
              <div className='contact-blockSubmit'>
                <input type='submit'/>
              </div>  
            </form>    
          </div>  
        </div>
      </div>
    </>
  )
}

export default Contact