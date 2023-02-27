import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from "@fortawesome/free-solid-svg-icons";
import "../styles/Navbar.css";




const NavBar = () => {

    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);


    
    useEffect(() => {
       
        const onScroll = () => {

            if(window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);
        
        const removeScroll = () => {
            window.removeEventListener("scroll", onScroll);
        }

        return removeScroll;

    },[]);


    const onUpdateActiveLink = (value) => {
      
        setActiveLink(value);
    };

  return (

    <Navbar id="nav-menu" expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container className='Navbar-conatiner'>
        <Navbar.Brand href="#home"> 
         {/* <img src={logo} alt="Name" /> */}
         <h1>Abhishek Singh</h1>
          </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" > 
            {/* <span className='"navbar-toggle-icon'></span>    */}
            <FontAwesomeIcon icon={ faBars } className='"navbar-toggle-icon' />
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("home")} >Home</Nav.Link>
            <Nav.Link  href="#about" className={activeLink === "about" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("about")}>About Me</Nav.Link>
            <Nav.Link  href="#skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("skills")} >Skills</Nav.Link>
            <Nav.Link  href="#projects" className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("projects")} >Projects</Nav.Link>
            <Nav.Link  href="#contact">  
               <span className='navbar-text'>
                  <button className='"vvd' onClick={() => console.log("connect")}> Let's Connect </button>
                </span> 
          </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export  { NavBar };
