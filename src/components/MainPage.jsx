import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './mainpage.css'

const MainPage = () => {

const [ showMenu, setShowMenu ] = useState(false)
const [ darkMode, setDarkMode ] = useState(() => {
  const savedMode = localStorage.getItem('darkMode')
  return savedMode ? JSON.parse(savedMode) : false
})

useEffect(() => {
  localStorage.setItem('darkMode', JSON.stringify(darkMode))
},[darkMode])

const handleMode = () => {
  setDarkMode(!darkMode)
}

  return (
    <>
        <div 
          className='mainpage-block' 
          style={{backgroundColor: darkMode && '#272829'}}>
          <motion.div
            className='navbar-block'
            initial={{ opacity: 0, y: -140 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .5, }}
            style={{backgroundColor: darkMode && '#3e4042'}}>
            {/* Logo and name */}
            <div className='navbar-logo'>
                <img src='ma-dark.png' />
                <p>Mohammed <span>Aashiq</span></p>
            </div>
            {/* Menu list */}
            <div 
              style={{backgroundColor: darkMode && showMenu && '#3e4042'}}
              className={`  ${showMenu ? 'navbar-menuList navbar-menuList-mobile' : 'navbar-menuList'} 
                            ${darkMode ? 'navbar-menuList-darkMode' : ''}` }>
              <div>Home</div>
              <div>About</div>
              <div>Portfolio</div>
              <div>Contact</div>
            </div>
            {/* Nav icons */}
            <div className='navbar-menuIcons'>
              <div onClick={() => handleMode()}>
                <img src={darkMode ? 'light-mode.png' : 'dark-mode.png'} />
              </div>
              <div className='navbar-menuBtn' onClick={() => setShowMenu(!showMenu)}>
                {/* <img src='menu-icon-dark.png' /> */}
                <img src={darkMode ? 'menu-icon-dark.png': 'menu-icon-light.png'} />
              </div>
            </div>
          </motion.div> 
        </div>
    
    
    </>
  )
}

export default MainPage