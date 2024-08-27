import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import './mainpage.css'
import Home from './Home'
import About from './About'
import Portfolio from './Portfolio'

const MainPage = () => {

const [ showMenu, setShowMenu ] = useState(false)
const [ darkMode, setDarkMode ] = useState(() => {
  const savedMode = localStorage.getItem('darkMode')
  return savedMode ? JSON.parse(savedMode) : false
})
const [renderBubbles, setRenderBubbles] = useState(false);
const [trackNav, setTrackNav] = useState(null)

useEffect(() => {
  localStorage.setItem('darkMode', JSON.stringify(darkMode))
},[darkMode])

const handleMode = () => {
  setDarkMode(!darkMode)
  setRenderBubbles(false)
}

useEffect(() => {
  const timer = setTimeout(() => {
    setRenderBubbles(true);
  }, 4000); // 3 seconds

  return () => clearTimeout(timer);
}, [darkMode]);

const getRandomValue = () => Math.floor(Math.random() * 21) + 10;

const navBarRef = useRef(null)

useEffect(() => {
  const handleScroll = () => {
    if(navBarRef.current) {
      const distanceFromTop = navBarRef.current.getBoundingClientRect().top
      console.log("Distance from top:", distanceFromTop)
      setTrackNav(distanceFromTop)
    }
  }
  window.addEventListener('scroll', handleScroll)
  handleScroll()
  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
},[])

  return (
    <>
        <motion.div
          ref={navBarRef}
          className='navbar-block'
          initial={{ opacity: 0, y: -140 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6, }}
          style={{ margin:'10px 14px 0px 14px', backgroundColor: darkMode && '#3e4042', 
                  boxShadow: trackNav === 0 && 'rgba(90, 70, 47, 0.4) 0px 8px 24px -8px'}}>
          {/* Logo and name */}
          <div className='navbar-logo'>
              <img src='ma-dark.png' />
              {/* <p>Mohammed <span>Aashiq</span></p> */}
          </div>
          {/* Menu list */}
          <div 
            style={{backgroundColor: darkMode && showMenu && '#3e4042'}}
            className={`  ${showMenu ? 'navbar-menuList navbar-menuList-mobile' : 'navbar-menuList'} 
                          ${darkMode ? 'navbar-menuList-darkMode' : ''}` }>
            <div>Home</div>
            <div>About</div>
            <div>Projects</div>
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
      <div 
        className='mainpage-block' 
        style={{backgroundColor: darkMode && '#272829'}}>
        <div>   
          <div  className='menuPgae-bubbles' 
                style={{backgroundColor: darkMode ? '#272829' : '#fff', }}>
            {Array.from({ length: 50 }).map((_, index) => (
              <span
                key={index}
                style={{'--i': getRandomValue(), 
                        borderBottom: 
                          darkMode 
                            ? !renderBubbles 
                              ? '20px solid #3e4042' : '20px solid #272829' 
                            : !renderBubbles
                              ? '20px solid #fae2b7' : '20px solid #fff'}}>
              </span>))}
          </div>
          <div style={{position:'absolute',zIndex:'1', width:'100%',left:'0', top:'0'}}>
              <Home darkMode={darkMode} />
          </div>
        </div>
      </div> 
      
      <button
        className='mainPage-scrollBtn' 
        style={{color: darkMode ? '#c8c9c9' : '#333',
                backgroundColor: darkMode ? '#272829' : '#fff'}}>
        Swipe down <img src='scroll-down2.png'/>
      </button>

      <div style={{ backgroundColor: darkMode && '#272829', 
                    transition:'background-color 0.5s',
                    padding:'10px'}}>
          <About darkMode={darkMode}/>
      </div>
      <div style={{ backgroundColor: darkMode ? '#3e4042' : '#f2f2f2',
                    color: darkMode ? '#c8c9c9' : '#333',
                    transition:'background-color 0.5s',
                    padding:'10px'}}>
        <Portfolio darkMode={darkMode}/>
      </div>
    </>
  )
}

export default MainPage