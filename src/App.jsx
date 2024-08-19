import React, { useState } from 'react'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import './app.css'
import { motion } from 'framer-motion'

const App = () => {

const [ showMenuList, setShowMenuList ] = useState(false)

console.log(showMenuList, 'List')

  return (
    <>
        <div style={{fontFamily:'Lexend'}}>
          <motion.div
            // initial={{opacity:0}}
            // animate={{opacity:1}}
            // transition={{ duration: 0.1, delay: 1}}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "anticipate" }}
            // direction='vertical'
            className='app-nav'>
            <div className='app-nav-logoBlock' style={{color:' #f09d0f'}}>
              <img src='logo1.jpg' />
              Mohammed Aashiq
            </div>
            <div className='app-menu-icon'>
              <img 
                src='menu-icon-light.png' 
                style={{margin:'0px'}}
                onClick={() => {setShowMenuList(!showMenuList)}}/>
            </div>
            <motion.div
                          // initial={{ opacity: 0, y: -50 }}
                          // animate={{ opacity: 1, y: 0 }}
                          // transition={{ duration: 0.5, ease: "anticipate" }}
              className={showMenuList ? `app-nav-List-mobile ${showMenuList ? 'open-menu' : ''}`:'app-nav-List'}>
                <div>Home</div>
                <div>About</div>
                <div>Portfolio</div>
                <div>Contact</div>
            </motion.div>
          </motion.div>

          <div>
            Mohammed Aashiq
          </div>
        </div>
    </>
  )
}

export default App
