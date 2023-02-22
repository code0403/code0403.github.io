import React from 'react'
import "../styles/AboutMe.css"

const AboutMe = () => {
  return (
    <div id='about' className="nav-link about" >
      <p id='About_heading'>About Me</p>
      <section id='description'>
        Highly motivated and enthusiastic Full Stack Web Developer with a strong foundation in HTML, CSS, JavaScript, and React. Possessing excellent problem-solving skills and a passion for delivering innovative and user-friendly web applications. A quick learner who adapts well to new technologies and thrives in a fast-paced environment. Committed to delivering quality work and providing a seamless user experience. Seeking a challenging role as a Full Stack Web Developer to utilize my skills and knowledge to contribute to the growth of the company.
      </section>

      <div id='About_links'>
      <button id="Github_btn"><a href="https://github.com/code0403" target={"_blank"} rel="noreferrer">GitHub</a></button>
      <button id="Resume_btn"><a href="https://drive.google.com/file/d/1sDOnlaTapJ8dZyh2Y5-l54sGB52u1pHG/view?usp=share_link" target={"_blank"} rel="noreferrer" download> Resume </a></button>
      </div>
    </div>
  )
}

export { AboutMe };
