// import React, { useRef, useState } from 'react'
// import './contact.css'
// import { motion } from 'framer-motion'

// const Contact = (props) => {

//   const formRef = useRef(null);

//   const [loading, setLoading] = useState(false) 

//   const { darkMode } = props

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true)
//     const formData = new FormData(event.target);

//     formData.append("access_key", "7c6e8a0f-f358-4422-9f2e-09955ddbd1bc");

//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     const res = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//       },
//       body: json
//     }).then((res) => res.json());

//     if (res.success) {
//       formRef.current.reset();
//       setLoading(false)
//       setNotification("Form submitted successfully!")
//     } else {
//       setLoading(false)
//       setNotification("Failed to submit the form. Please try again.")
//     }
//   };

//   return (
//     <>
//        {notification && <div className='contact-notification'>{notification}</div>}
//       <motion.div 
//         initial={{opacity:0}}
//         whileInView={{opacity:1}}
//         transition={{ duration: 1}}
//         viewport={{ once: true, amount: 0.5 }}
//         className='contact-container'>
//         <div>
//           <p className='contact-heading'>Contact<span></span></p>
//           <div className='contact-Block'>
//             <form autocomplete="off" onSubmit={onSubmit} ref={formRef}>
//               {loading && 
//                 <div className='contact-loadingBlock'>
//                   <img 
//                     src='loading-img.svg'  
//                     style={{ animation: 'salesModule-ChannelLoaderSpin 1s linear infinite'}}
//                     alt='Loading' /> 
//                 </div> }
//               <div className='contact-block1'>
//                 <div style={{backgroundColor: darkMode ? '#3e4042' : '#e6e6e6'}}>
//                   <input type='text' style={{color: darkMode ? '#c8c9c9' : '#333'}} required name='Name' autocomplete="off" />
//                   <p  className='contact-placeHolder' 
//                       style={{color: darkMode ? '#7c7f83' : ' #999999'}}>
//                     Name
//                   </p>
//                 </div>
//                 <div style={{ backgroundColor: darkMode ? '#3e4042' : '#e6e6e6'}}>
//                   <input type='number' style={{color: darkMode ? '#c8c9c9' : '#333'}} required name='Phone number' autocomplete="off"/>
//                   <p  className='contact-placeHolder' 
//                       style={{color: darkMode ? '#7c7f83' : '#999999'}}>
//                     Phone number
//                   </p>
//                 </div>
//               </div>
//               <div className='contact-blockEmail' style={{backgroundColor: darkMode ? '#3e4042' : '#e6e6e6'}}>
//                 <input type='text' style={{color: darkMode ? '#c8c9c9' : '#333'}} required  name='Email' autocomplete="off"/>  
//                 <p  className='contact-placeHolder' 
//                     style={{color: darkMode ? '#7c7f83' : ' #999999'}}>
//                   Email
//                 </p>
//               </div>
//               <div className='contact-blockMsg' style={{backgroundColor: darkMode ? '#3e4042' : '#e6e6e6'}}>
//                 <textarea style={{color: darkMode ? '#c8c9c9' : '#333'}} name='Message' required /> 
//                 <p  className='contact-placeHoldertext' 
//                     style={{color: darkMode ? '#7c7f83' : '#999999'}}>
//                   Enter your message
//                 </p> 
//               </div>  
//               <div className='contact-blockSubmit'>
//                 <input type='submit'  value='Send'/>
//               </div>  
//             </form>    
//           </div>  
//         </div>
//       </motion.div>
//     </>
//   )
// }

// export default Contact

import React, { useRef, useState } from 'react'
import './contact.css'
import { motion } from 'framer-motion'

const Contact = (props) => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(null); // State for notification

  const { darkMode } = props;

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target);

    formData.append("access_key", "7c6e8a0f-f358-4422-9f2e-09955ddbd1bc");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        formRef.current.reset();
        setNotification("Message sent successfully!"); // Set success notification
      } else {
        setNotification("Failed to send the message. Please try again."); // Set failure notification
      }
    } catch (error) {
      setNotification("An error occurred. Please try again."); // Set error notification
    } finally {
      setLoading(false);
      // Clear the notification after 5 seconds
      setTimeout(() => setNotification(null), 5000);
    }
  };

  return (
    <>
      <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{ duration: 1}}
        viewport={{ once: true, amount: 0.5 }}
        className='contact-container'>
        <div>
          <p className='contact-heading'>Contact<span></span></p>
          <div className='contact-Block'>
            {notification 
              && <div className='contact-notification'>
                  {notification}
                  </div>} 
                  {/* Notification block */}
            <form autoComplete="off" onSubmit={onSubmit} ref={formRef}>
              {loading && 
                <div className='contact-loadingBlock'>
                  <img 
                    src='loading-img.svg'  
                    style={{ animation: 'salesModule-ChannelLoaderSpin 1s linear infinite'}}
                    alt='Loading' /> 
                </div> }
              <div className='contact-block1'>
                <div style={{backgroundColor: darkMode ? '#3e4042' : '#e6e6e6'}}>
                  <input type='text' style={{color: darkMode ? '#c8c9c9' : '#333'}} required name='Name' autoComplete="off" />
                  <p className='contact-placeHolder' style={{color: darkMode ? '#7c7f83' : ' #999999'}}>Name</p>
                </div>
                <div style={{ backgroundColor: darkMode ? '#3e4042' : '#e6e6e6'}}>
                  <input type='number' style={{color: darkMode ? '#c8c9c9' : '#333'}} required name='Phone number' autoComplete="off"/>
                  <p className='contact-placeHolder' style={{color: darkMode ? '#7c7f83' : '#999999'}}>Phone number</p>
                </div>
              </div>
              <div className='contact-blockEmail' style={{backgroundColor: darkMode ? '#3e4042' : '#e6e6e6'}}>
                <input type='text' style={{color: darkMode ? '#c8c9c9' : '#333'}} required name='Email' autoComplete="off"/>  
                <p className='contact-placeHolder' style={{color: darkMode ? '#7c7f83' : ' #999999'}}>Email</p>
              </div>
              <div className='contact-blockMsg' style={{backgroundColor: darkMode ? '#3e4042' : '#e6e6e6'}}>
                <textarea style={{color: darkMode ? '#c8c9c9' : '#333'}} name='Message' required /> 
                <p className='contact-placeHoldertext' style={{color: darkMode ? '#7c7f83' : '#999999'}}>Enter your message</p> 
              </div>  
              <div className='contact-blockSubmit'>
                <input type='submit' value='Send'/>
              </div>  
            </form>    
          </div>  
        </div>
      </motion.div>
    </>
  );
}

export default Contact;
