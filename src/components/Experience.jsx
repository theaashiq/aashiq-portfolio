import React from 'react'
import { motion } from 'framer-motion'
import { myExp } from './db/data'
import './experience.css'

const Experience = () => {
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
                            <div className='experience-From'>{obj.from}</div>
                            <div>
                                <span></span>
                                <span></span>
                            </div>
                            <div>
                                <p>{obj.role}</p>
                                <p>{obj.company}, {obj.loaction}</p>
                                <p>{obj.role}</p>
                                <p>{obj.company}</p>
                                <p>{obj.duration}</p>
                                <div>
                                    {obj.res.map((list) => (
                                        <p>{list}</p>
                                    ))}
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