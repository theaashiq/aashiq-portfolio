import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './mainpage.css'

const MainPage = () => {

const [ showMenu, setShowMenu ] = useState(false)
const [ darkMode, setDarkMode ] = useState(false)

// useEffect(() => {
//   if(window.innerWidth){
//     setShowMenu(false)
//   }
// },)



console.log(showMenu, 'Show Meu')
// console.log(window.innerWidth, 'Inner width')

  return (
    <>
        <div>
          <motion.div
            className='navbar-block'
            initial={{ opacity: 0, y: -140 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .5, }}>
            {/* Logo and name */}
            <div className='navbar-logo'>
                <img src='ma-dark.png' />
                <p>Mohammed <span>Aashiq</span></p>
            </div>
            {/* Menu list */}
            <div className={showMenu ? 'navbar-menuList navbar-menuList-mobile':'navbar-menuList'}>
                <div>Home</div>
                <div>About</div>
                <div>Portfolio</div>
                <div>Contact</div>
            </div>
            {/* Nav icons */}
            <div className='navbar-menuIcons'>
              <div>
                <img src='dark-mode.png' />
              </div>
              {/* <div>
                <img src='light-mode.png' />
              </div> */}
              <div className='navbar-menuBtn' onClick={() => setShowMenu(!showMenu)}>
                {/* <img src='menu-icon-dark.png' /> */}
                <img src='menu-icon-light.png' />
              </div>
            </div>
          </motion.div> 
        </div>
    
    
    </>
  )
}

export default MainPage