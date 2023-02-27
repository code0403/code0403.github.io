import React, { useEffect } from 'react';
import "../styles/Contact.css";
import { IoCallOutline } from "react-icons/io5";
import { BsLinkedin } from "react-icons/bs";
import { VscGithub } from "react-icons/vsc";
import { MdEmail } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
 
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div id='contact'>
      <p id='Contact_heading'>Let's Connect</p>

      <div id='contact_container' data-aos="fade-left"  data-aos-duration="3000" data-aos-delay="700"  data-aos-easing="linear">
    
        <div id='contact_socials_container'>
          <p id='contact_socials_container_heading'>Contact Me</p>
          <div id='socials'>
          <a id="contact-github" href="https://github.com/code0403" target={"_blank"} rel="noreferrer"><p className='social_text'><VscGithub /> <span> GitHub</span></p></a>
          <a  id="contact-linkedin" href="https://www.linkedin.com/in/abhishek-singh04/" target={"_blank"} rel="noreferrer"><p  className='social_text'><BsLinkedin /> <span> Linkedin</span></p></a>
          <p  id="contact-phone" className='social_text'><IoCallOutline /> <span> +91 9897673739</span></p>
          <p id="contact-email" className='social_text'><MdEmail /> <span> sabhishek900@gmail.com</span></p>
          </div>
        </div>
        <div id='contact_message_conatiner' data-aos="fade-right"  data-aos-duration="3000" data-aos-delay="700"  data-aos-easing="linear">
          <p id='contact_message_conatiner_heading'>Message Me</p>
          <div id='message_text_container'>
            <input type="text"  name="" placeholder='Name'  className='message_text' required />
            <input type="email" name="" placeholder='Email' className='message_text' required />
          </div>
          <textarea  placeholder='Message...' cols={40} rows={5} required />
          <button className='send_message' onClick={() => {console.log("hello")}}>Send</button>
        </div>
      </div>
    </div>
  )
}

export {Contact};
