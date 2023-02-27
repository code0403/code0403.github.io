import React, { useEffect } from 'react';
import "../styles/GitStatus.css";
import GitHubCalendar from 'react-github-calendar';
import AOS from 'aos';
import 'aos/dist/aos.css';

const GitStatus = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id='status_container'>

        <p className='gitStat_heading'>GitHub Status</p>

        <div  data-aos="fade-right" data-aos-delay="500" data-aos-offset="200" data-aos-once="false">
            <img id='github-streak-stats' className='github_status' src="https://github-readme-streak-stats.herokuapp.com?user=code0403&theme=tokyonight&border_radius=5&type=png&hide_border=true&card_width=600" alt="" />
        </div>

        
        <div  data-aos="fade-left" data-aos-delay="600">
            <img id='github-stats-card' className='github_status' src="https://github-readme-stats.vercel.app/api?username=code0403&show_icons=true&theme=tokyonight&hide_border=true&card_width=500" alt="" />
        </div>

        <div  data-aos="fade-right" data-aos-delay="700">
            <img  id="github-top-langs" className='github_status' src="https://github-readme-stats.vercel.app/api/top-langs/?username=anuraghazra&theme=tokyonight&card_width=500&hide_border=true" alt="" />
        </div>

        

        <div id='git_calender' data-aos="zoom-in" data-aos-delay="900" data-aos-offset="200">

        <p className='gitStat_heading'>GitHub Calender</p>

        <GitHubCalendar 
         className="react-activity-calendar"
          username="code0403" 
          blockSize={17} 
          hideTotalCount
          fontSize={16}
          color="skyblue"
          blockRadius={3}
           />
        </div>
    </div>
  )
}

export { GitStatus };
