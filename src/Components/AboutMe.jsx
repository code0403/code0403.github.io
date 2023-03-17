import React, { useEffect } from 'react'
import "../styles/AboutMe.css";
import { FiDownload }  from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import Abhishek_Singh_Resume from "../assets/files/Abhishek_Singh_Resume.pdf";
import AOS from 'aos';
import 'aos/dist/aos.css';


const AboutMe = () => {

  useEffect(() => {
    AOS.init();
  },[]);

  return (
    <div id='about' className="about section" >
      <p id='About_heading'>About Me</p>
      <section id='user-detail-intro'>
        Highly motivated and enthusiastic Full Stack Web Developer with a strong foundation in HTML, CSS, JavaScript, and React. Possessing excellent problem-solving skills and a passion for delivering innovative and user-friendly web applications. A quick learner who adapts well to new technologies and thrives in a fast-paced environment. Committed to delivering quality work and providing a seamless user experience. Seeking a challenging role as a Full Stack Web Developer to utilize my skills and knowledge to contribute to the growth of the company.
      </section>

      <div id='About_links'>
      <button id="Github_btn" data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-duration="3000"><a href="https://github.com/code0403" target={"_blank"} rel="noreferrer"> GitHub <FaGithub /> </a></button>
      <button id="resume-button-2" data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="3000"><a  id="resume-link-2" className="nav-link resume" href={Abhishek_Singh_Resume}   onClick={() => window.open(Abhishek_Singh_Resume)} download={"Abhishek-Singh-Resume.pdf"}> Resume <FiDownload /> </a></button>
      </div>
    </div>
  )
}

export { AboutMe };
