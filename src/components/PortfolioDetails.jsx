import React from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const PortfolioDetails = (prop) => {

    const {obj, darkMode} = prop
  return (
    <>
    <div className='portfolio-propName'>{obj.proName}</div>
    <div className='portfolio-propDetails'>{obj.details}</div>
    <div className='portfolio-propTech'>
      Tech
      {obj.tech.map((tech, idx) => (
        <div 
          key={idx} 
          className='portfolio-propTechList' 
          style={{ backgroundColor: darkMode ? '#272829' : '#fff' }}>
          {tech}
        </div>
      ))}
    </div>
    <div className='portfolio-propBtn'>
      <button 
        onClick={() => window.open(obj.codeLink, '_blank')}
        style={{ 
          backgroundColor: darkMode ? '#272829' : '#fff',
          color: darkMode ? '#c8c9c9' : '#333'
        }}>
        <img src='logo/github.png' alt='GitHub Logo' />
        Code
      </button>
      <button 
        onClick={() => window.open(obj.link, '_blank')}
        style={{ 
          backgroundColor: darkMode ? '#272829' : '#fff',
          color: darkMode ? '#c8c9c9' : '#333'
        }}>
        Link
        <ArrowOutwardIcon />
      </button>
    </div>

</>
  )
}

export default PortfolioDetails
