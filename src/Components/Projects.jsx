import React, { useEffect } from 'react';
import "../styles/Project.css";
import Intern_Theory from "../assets/images/Intern_Theory.png";
import Mars_Pharmacy from "../assets/images/Mars_Pharmacy.png"
import Shoppers_Mall from "../assets/images/Shoppers_Mall.png"
import Voyage from "../assets/images/Voyage.png"
import { VscGithub } from "react-icons/vsc";
import { MdOutlineLiveTv } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Projects = () => {

  useEffect(() => {

    AOS.init();

  },[]);

  return (
    <div id='projects'>
    <p id="project_heading">Projects</p>

    <div id='project_1' className='project-card' data-aos="fade-up"  data-aos-easing="ease-in-sine" data-aos-duration="3000">
       <div className='project_image'>
        <img className='project_pic' src={Intern_Theory} alt="Intern Theory" />
       </div>
       <div className='project_info'>
        <p className='project-title'>Intern Theory</p>
        <p className='project-description'>It is a platform connecting Companies and potential employees in various sectors.</p>
        <p className='project-tech-stack'> <span className='techs'>HTML</span> <span className='techs'>CSS</span> <span className='techs'>JavaScript</span> </p>
        <p className='project-features'> Signup | Login | Logout | Job Display | Course Display | Course Purchase </p>
        <a className='project-github-link' href="https://github.com/code0403/-capricious-box-4447" target={'_blank'} rel="noreferrer"> <VscGithub /> <span>GitHub</span> </a>
        <a className='project-deployed-link' href="https://spontaneous-genie-2b775b.netlify.app/" target={'_blank'} rel="noreferrer"> <MdOutlineLiveTv /> <span>Depolyed</span> </a>
       </div>
    </div>


    <div id='project_2' className='project-card' data-aos="fade-up"  data-aos-easing="ease-in-sine" data-aos-duration="3000">
       <div className='project_image'>
        <img className='project_pic' src={Mars_Pharmacy} alt="Mars Pharmacy" />
       </div>
       <div className='project_info'>
        <p className='project-title'>MARS Pharmacy</p>
        <p className='project-description'>Pharmeasy is an online pharmacy  drug store which caters for the need of everyone with a wide variety of Products such as Medicines, HealthCare Products along with provide Lab Test Services.</p>
        <p className='project-tech-stack'> <span className='techs'>HTML</span> <span className='techs'>CSS</span> <span className='techs'>JavaScript</span> </p>
        <p className='project-features'> Signup | Login | Logout | Product Display on Carousel | User can add products to cart | Purchase the the product | Admin can control the store by adding removing, and updating products. </p>
        <a className='project-github-link' href="https://github.com/rohithanss/Pharmeasy-Clone" target={'_blank'} rel="noreferrer"> <VscGithub /> <span>GitHub</span> </a>
        <a className='project-deployed-link' href="https://marspharmacy.netlify.app/" target={'_blank'} rel="noreferrer"> <MdOutlineLiveTv /> <span>Depolyed</span> </a>
       </div>
    </div>


    <div id='project_3' className='project-card' data-aos="fade-up"  data-aos-easing="ease-in-sine" data-aos-duration="3000">
       <div className='project_image'>
        <img className='project_pic' src={Voyage} alt="Voyage" />
       </div>
       <div className='project_info'>
        <p className='project-title'>Voyage</p>
        <p className='project-description'>Voyage.com is a booking website for hotels, flights, taxis. Helps you plan your vacation smoothly. It is truly a one stop Destination for your all Vacations need.</p>
        <p className='project-tech-stack'> <span className='techs'>HTML</span> <span className='techs'>CSS</span> <span className='techs'>JavaScript</span> </p>
        <p className='project-features'> Signup | Login | Logout | Destionation on Carousel | Display flights | Book Filghts & Hotels | Add filghts & hotels in Cart | Payment with various O </p>
        <a className='project-github-link' href="https://github.com/code0403/offbeat-pin-6298" target={'_blank'} rel="noreferrer"> <VscGithub /> <span>GitHub</span> </a>
        <a className='project-deployed-link' href="https://gentle-marzipan-9be81d.netlify.app/" target={'_blank'} rel="noreferrer"> <MdOutlineLiveTv /> <span>Depolyed</span> </a>
       </div>
    </div>


    <div id='project_4' className='project-card' data-aos="fade-up"  data-aos-easing="ease-in-sine" data-aos-duration="3000">
       <div className='project_image'>
        <img className='project_pic' src={Shoppers_Mall} alt="Shoppers_Mall" />
       </div>
       <div className='project_info'>
        <p className='project-title'>Shoppers Mall</p>
        <p className='project-description'>Shoppers Mall is one stop destination to shop for various brand. The website is build on react with Chakra UI.</p>
        <p className='project-tech-stack'> <span className='techs'>HTML</span> <span className='techs'>CSS</span> <span className='techs'>JavaScript</span> <span className='techs'>React</span> <span className='techs'>Chakra UI</span> <span className='techs'>Json-Server</span> </p>
        <p className='project-features'> Signup | Login | Product Display Carousel | Coupons Display | Coupons Puschase | Checkout </p>
        <a className='project-github-link' href="https://github.com/code0403/-foolish-meat-7669" target={'_blank'} rel="noreferrer"> <VscGithub /> <span>GitHub</span> </a>
        <a className='project-deployed-link' href="https://classy-croquembouche-c063ee.netlify.app/" target={'_blank'} rel="noreferrer"> <MdOutlineLiveTv /> <span>Depolyed</span> </a>
       </div>
    </div>

   
  </div>
  )
}

export  { Projects };
