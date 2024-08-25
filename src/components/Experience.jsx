import React from 'react'
import { motion } from 'framer-motion'
import { myExp } from './db/data'
import './experience.css'

const Experience = (props) => {

const { darkMode } = props 

console.log(darkMode, 'DarkMode')

return (
        <>
            <motion.div
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{ duration: 1}}
                viewport={{ once: true, amount: 0.5 }}>
                <p className='about-experience-Heading'>Experience</p>
                <div className='about-experienceBlock'>
                    {myExp.map((obj) => (
                        <div className='about-experienceContainer'>
                            <div 
                                className='experience-From' 
                                style={{backgroundColor: darkMode && "#3e4042",
                                        color: darkMode && '#c8c9c9'
                                }}>
                                    {obj.from}
                            </div>
                            <div className='experience-div'>
                                <span></span>
                                <span></span>
                            </div>
                            <div className='experience-jb-block' style={{color: darkMode ? '#c8c9c9' : '#333'}}>
                                <div className='experience-role'>{obj.role}</div>
                                <div style={{fontWeight:'300'}} className='experience-company'>{obj.company}, {obj.loaction}</div>
                                <div className='experience-duration' style={{fontWeight:'300'}}>{obj.duration}</div>
                                <div className='experience-roles' style={{fontWeight:'300'}}>
                                    {obj.res}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </>
    )
}

export default Experience