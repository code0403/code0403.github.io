import React, { useEffect } from 'react';
import "../styles/Skills.css";
import {FaHtml5} from "react-icons/fa";
import {FaCss3Alt} from "react-icons/fa";
import {SiJavascript} from "react-icons/si";
import {SiTypescript} from "react-icons/si";
import {FaReact} from "react-icons/fa";
import {SiRedux} from "react-icons/si";
import {TbBrandNextjs} from "react-icons/tb";
import {SiChakraui} from "react-icons/si";
import {FaNodeJs} from "react-icons/fa";
import {SiMongodb} from "react-icons/si";
import {SiExpress} from "react-icons/si";
import {FaGitAlt} from "react-icons/fa";
import {VscGithub} from "react-icons/vsc";
import {SiVisualstudiocode} from "react-icons/si";
import AOS from 'aos';
import 'aos/dist/aos.css';






const Skillls = () => {
 
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div id="skills" className='nav-link skills'>
      <h2 id='skills_heading'> Skills </h2>

      <div id="skills_container" data-aos="fade-up" data-aos-delay="500" data-aos-easing="ease-in-sine" >
        <div className='Skill_item'>   <FaHtml5 className="skills-card-img" /> <p className="skills-card-name">HTML5</p> </div>
        <div className='Skill_item'> <FaCss3Alt className="skills-card-img" /> <p className="skills-card-name">CSS3</p> </div>
        <div className='Skill_item'> <SiJavascript className="skills-card-img" /><p className="skills-card-name">JavaScript</p> </div>
        <div className='Skill_item'> <SiTypescript className="skills-card-img" /><p className="skills-card-name">TypeScript</p> </div>
        <div className='Skill_item'> <FaReact className="skills-card-img" /><p className="skills-card-name">React</p> </div>
        <div className='Skill_item'> <SiRedux className="skills-card-img" /><p className="skills-card-name">Redux</p> </div>
        <div className='Skill_item'> <TbBrandNextjs className="skills-card-img" /><p className="skills-card-name">Next.JS</p> </div>
        <div className='Skill_item'> <SiChakraui className="skills-card-img" /><p className="skills-card-name">Chakra UI</p> </div>
        <div className='Skill_item'> <FaNodeJs className="skills-card-img" /><p className="skills-card-name">Node JS</p> </div>
        <div className='Skill_item'> <SiMongodb className="skills-card-img" /><p className="skills-card-name">Mongo Db</p> </div>
        <div className='Skill_item'> <SiExpress className="skills-card-img" /><p className="skills-card-name">Express JS</p> </div>
        <div className='Skill_item'> <FaGitAlt className="skills-card-img" /><p className="skills-card-name">Git</p> </div>
        <div className='Skill_item'> <VscGithub className="skills-card-img" /><p className="skills-card-name">GitHub</p> </div>
        <div className='Skill_item'> <SiVisualstudiocode className="skills-card-img" /><p className="skills-card-name">VS Code</p> </div> 
      </div>
    </div>
  )
}

export { Skillls };




















































// import React from 'react';
// import "../styles/Skills.css";
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import html from "../assets/images/html.png";
// import css from "../assets/images/css.png";
// import js from "../assets/images/js.png";
// import typescript from "../assets/images/typescript.png";
// import atom from "../assets/images/atom.png";
// import redux_logo from "../assets/images/redux_logo.png";
// import mongodb from "../assets/images/mongodb.png";
// import express from "../assets/images/express.png"
// import nodejs from "../assets/images/nodejs.png"
// import NextJS from "../assets/images/NextJS.png";
// import Git from "../assets/images/Git.png";
// import github from "../assets/images/github.png";
// import VSCode from "../assets/images/VSCode.png"


// const Skillls = () => {

//   const responsive = {
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 1,
//       slidesToSlide: 3 // optional, default to 1.
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 1,
//       slidesToSlide: 2 // optional, default to 1.
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//       slidesToSlide: 1 // optional, default to 1.
//     }
//   };

//   return (
//     <div id="skills">
//     <h2 id='skills_heading'> Skills </h2>
//     <div id='carousel_container'>
//     <Carousel responsive={responsive}>
//       <div className='carousel_item'>
//          <img className='items_logo' src={html} alt="html" />
//          <img className='items_logo' src={css} alt='css' />
//          <img className='items_logo' src={js} alt='JavaScript' />
//          <img className='items_logo' src={typescript} alt='typescript' />
//          <img className='items_logo' src={atom} alt='react' />
//          <img className='items_logo' src={redux_logo} alt='redux' />
//          <img className='items_logo' src={mongodb} alt='MongoDb' />
//          <img className='items_logo' src={express} alt='expressJS' />
//          <img className='items_logo' src={nodejs} alt='nodeJS' />
//          <img className='items_logo' src={NextJS} alt='NextJS' />
//       </div>
//       <div className='carousel_item'>
//          <img className='items_logo' src={Git} alt="Git" />
//          <img className='items_logo' src={github} alt='css' />
//          <img className='items_logo' src={VSCode} alt='JavaScript' />   
//       </div>
//     </Carousel>
//     </div>
//   </div>
//   )
// }

// export { Skillls };
