import React from "react";
import pic from "../assets/images/pic.jpg";
import "../styles/Header.css";
import Typewriter from "typewriter-effect";
// import { FiDownload }  from 'react-icons/fi';
import { VscGithub } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
// import Abhishek_Singh_Resume from "../assets/files/Abhishek_Singh_Resume.pdf";

const Header = () => {
  return (
    <div id="home">
      <div id="intro_text_container">
            <p id="intro_heading"> Hi! <span> I am,</span></p>
            <p id="user-detail-name">Abhishek Singh</p>
            <p id="typewriter"><Typewriter
                options={{
                  strings: ["A Full Stack Developer", "Problem Solver", "Front-End Enthusatic", "Web Developer"],
                  autoStart: true,
                  loop: true,
                }}/>
            </p>
             
             <div id="Info_btns">
              <button id="contactGithub"><a href="https://github.com/code0403" target={'_blank'} rel="noreferrer">GitHub <VscGithub /> </a></button>
              <button id="contactLinkedin"><a href="https://www.linkedin.com/in/abhishek-singh04/" target={'_blank'} rel="noreferrer">Linkedin <FaLinkedin /> </a></button>
              {/* <button id="resume-button-2" className="nav-link resume"><a  id="resume-link-2" className="nav-link resume" href="https://drive.google.com/file/d/1sDOnlaTapJ8dZyh2Y5-l54sGB52u1pHG/view?usp=share_link" targert= {"_blank"} rel="noreferrer" download = "https://drive.google.com/file/d/1sDOnlaTapJ8dZyh2Y5-l54sGB52u1pHG/view?usp=share_link"> Resume <FiDownload /> </a></button> */}
             </div>
            
        </div>

      <div id="pic_container">
        <img id="my_pic" className="home-img" src={pic} alt="Abhishek Singh" />
      </div>
    </div>
  );
};

export { Header };

