import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import './mainpage.css'
import Home from './Home'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Footer from './Footer'
import Experience from './Experience'

const MainPage = () => {

const [ showMenu, setShowMenu ] = useState(false)
const [ darkMode, setDarkMode ] = useState(() => {
  const savedMode = localStorage.getItem('darkMode')
  return savedMode ? JSON.parse(savedMode) : false
})
const [renderBubbles, setRenderBubbles] = useState(false);
const [trackNav, setTrackNav] = useState(null)
const homeRef = useRef(null);
const aboutRef = useRef(null);
const portfolioRef = useRef(null);
const contactRef = useRef(null);
const [visibleSection, setVisibleSection] = useState('');

useEffect(() => {
  const sections = [
    { ref: homeRef, name: 'Home' },
    { ref: aboutRef, name: 'About' },
    { ref: portfolioRef, name: 'Portfolio' },
    { ref: contactRef, name: 'Contact' },
  ];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSection(entry.target.getAttribute('data-section'));
        }
      });
    },
    { threshold: 0.4 } // Adjust this to control when a section is considered "visible"
  );

  sections.forEach(({ ref, name }) => {
    if (ref.current) {
      ref.current.setAttribute('data-section', name);
      observer.observe(ref.current);
    }
  });

  return () => {
    sections.forEach(({ ref }) => {
      if (ref.current) observer.unobserve(ref.current);
    });
  };
});

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

console.log(visibleSection, 'VS')

// const scrollToSection = (sectionRef) => {
//   if (sectionRef.current) {
//     sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'top' });
//   }
// };

const scrollToSection = (sectionRef) => {
  if (sectionRef.current) {
    const offsetTop = sectionRef.current.offsetTop;
    const viewportHeight = window.innerHeight;
    const scrollToPosition = offsetTop - viewportHeight / 8;

    window.scrollTo({
      top: scrollToPosition,
      behavior: 'smooth',
    });
  }
};
  return (
    <>
        <motion.div
          ref={navBarRef}
          className='navbar-block'
          initial={{ opacity: 0, y: -140 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6, }}
          style={{margin:'10px 14px 0px 14px', backgroundColor: darkMode && '#3e4042', 
                  boxShadow: trackNav === 0 && 'rgba(90, 70, 47, 0.4) 0px 8px 24px -8px',
                  marginLeft: trackNav === 0 ? '0px' : '10px',
                  marginRight: trackNav === 0 ? '0px' : '10px',
                  borderRadius: trackNav === 0 ? '0px' : '12px',
                  width: trackNav === 0 && '100%'}}>
          {/* Logo and name */}
          <div className='navbar-logo'>
              <img src='mav4.png' />
              {/* <p>Mohammed <span>Aashiq</span></p> */}
          </div>
          {/* Menu list */}
          <div 
            style={{backgroundColor: darkMode && showMenu && '#3e4042'}}
            className={`  ${showMenu ? 'navbar-menuList navbar-menuList-mobile' : 'navbar-menuList'} 
                          ${darkMode ? 'navbar-menuList-darkMode' : ''}` }>
            {/* <div  
              onClick={() => {scrollToSection(homeRef), setShowMenu(!showMenu)}} 
              style={{color: visibleSection === 'Home' && '#f0a422'}}>
              Home
            </div> */}
            <div
              onClick={() => {scrollToSection(aboutRef), setShowMenu(!showMenu)}} 
              style={{color: visibleSection === 'About' && '#f0a422'}}>
              About
            </div>
            <div 
              onClick={() => {scrollToSection(portfolioRef), setShowMenu(!showMenu)}}
              style={{color: visibleSection === 'Portfolio' && '#f0a422'}}
              >Projects
            </div>
            <div 
              onClick={() => {scrollToSection(contactRef), setShowMenu(!showMenu)}}
              style={{color: visibleSection === 'Contact' && '#f0a422'}}>
              Contact
            </div>
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
          <div ref={homeRef} style={{position:'absolute',zIndex:'1', width:'100%',left:'0', top:'0'}}>
              <Home darkMode={darkMode} />
          </div>
        </div>
      </div> 
      
      <button
        className='mainPage-scrollBtn'
        onClick={() => scrollToSection(aboutRef)}
        style={{color: darkMode ? '#c8c9c9' : '#333',
                backgroundColor: darkMode ? '#272829' : '#fff'}}>
        Swipe down <img src='scroll-down2.png'/>
      </button>

      <div 
        ref={aboutRef} 
        style={{backgroundColor: darkMode && '#272829', 
                transition:'background-color 0.5s',
                padding:'10px'}}>
          <About darkMode={darkMode}/>
          
      </div>
      {/* <div>
      <Experience darkMode={darkMode}/>
      </div> */}
      <div ref={portfolioRef} style={{ backgroundColor: darkMode ? '#3e4042' : '#f2f2f2',
                    color: darkMode ? '#c8c9c9' : '#333',
                    transition:'background-color 0.5s',
                    padding:'10px'}}>
        <Portfolio darkMode={darkMode}/>
      </div>
      <div ref={contactRef} style={{ backgroundColor: darkMode && '#272829', 
                    transition:'background-color 0.5s',
                    padding:'10px'}}>
          <Contact darkMode={darkMode}/>
      </div>
      <div>
          <Footer darkMode={darkMode} />
      </div>


      {/* {visibleSection === 'About' || visibleSection === 'Portfolio' || visibleSection === 'Contact'
        &&  <div style={{position:'absolute', bottom:'20px'}}>
              Up
            </div>} */}
            {(visibleSection === 'About' || visibleSection === 'Portfolio' || visibleSection === 'Contact') && (
              <div className='mainPage-up' onClick={() => scrollToSection(homeRef)}>
                <img src='up.png' />
              </div>
            )}
    </>
  )
}

export default MainPage