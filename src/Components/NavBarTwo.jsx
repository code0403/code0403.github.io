import React from 'react';
import { useState } from 'react';
import "../styles/NavBarTwo.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Abhishek_Singh_Resume from "../assets/files/Abhishek_Singh_Resume.pdf";

const NavBarTwo = () => {
   
    const [toggleMenu, setToggleMenu] = useState(true);
    

    const handleToggle = () => {
       setToggleMenu(!toggleMenu)
       console.log(toggleMenu)
    }
    
  return (
    <div className='navbar'>
       
       <div id='name'>
         <a href="#home"><p>ABHISHEK <span>SINGH</span></p></a>
       </div>

       
       <div id={toggleMenu ? "nav-menu" : "nav-menu-toggled"} >
       {/* <div id="toggle-icon"  onClick={handleToggle} > <FontAwesomeIcon icon={ faBars }  /> </div> */}
         <ul>
            <li> <a className='nav-link home' href='#home'>HOME</a> </li>
            <li> <a className='nav-link about' href='#about'>ABOUT</a>  </li>
            <li> <a className='nav-link skills' href='#skills'>SKILLS</a>  </li>
            <li><a className='nav-link projects' href='#projects'>PROJECTS</a>  </li>
            <li> <a className='nav-link contact' href='#contact'>CONTACTS</a> </li>  
            {/* <li id="resume-button-1"> <a className='nav-link resume' id='resume-link-1' href={Abhishek_Singh_Resume}   onClick={() => window.open(Abhishek_Singh_Resume)} download={"Abhishek_Singh_Resume.pdf"}>RESUME</a> </li> */}
            <li> <a className='nav-link resume' id="resume-button-1"  href="https://drive.google.com/u/0/uc?id=1sDOnlaTapJ8dZyh2Y5-l54sGB52u1pHG&export=download" target="_blank" rel="noreferrer" download="Abhishek_Singh_Resume.pdf">RESUME</a> </li>

            {/* <div  onClick={handleToggle} > <FontAwesomeIcon icon={ faBars }  id="toggle-icon"/> </div> */}
         </ul>
         <div id="toggle-menu-icon" onClick={handleToggle} > <FontAwesomeIcon icon={ faBars }  id="toggle-icon"/> </div>
       </div>

    </div>
  )
}

export  { NavBarTwo };
