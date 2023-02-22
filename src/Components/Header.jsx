import React from "react";
import pic from "../assets/images/pic.jpg";
import "../styles/Header.css";
import Typewriter from "typewriter-effect";
// import Particles from "react-tsparticles";

const Header = () => {
  return (
    <div id="intro_container">
      <div id="intro_text_container">
            <p id="intro_heading"> Hi! <span> I am,</span></p>
            <p id="intro_name">Abhishek Singh</p>
            <p id="typewriter"><Typewriter
                options={{
                  strings: ["A Full Stack Developer", "Problem Solver", "Front-End Enthusatic", "Web Developer"],
                  autoStart: true,
                  loop: true,
                }}/>
            </p>
             
             <div id="Info_btns">
              <button id="Contact_btn"><a href="#contact">Contact</a></button>
              <button id="Resume_btn"><a href="https://drive.google.com/file/d/1sDOnlaTapJ8dZyh2Y5-l54sGB52u1pHG/view?usp=share_link" targert= {"_blank"} download> Resume </a></button>
             </div>
            
        </div>

      <div id="pic_container">
        <img id="my_pic" src={pic} alt="Abhishek Singh" />
      </div>
    </div>
  );
};

export { Header };

