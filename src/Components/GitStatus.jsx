import React from 'react';
import "../styles/GitStatus.css";
import GitHubCalendar from 'react-github-calendar';

const GitStatus = () => {
  return (
    <div id='status_container'>

        <p className='gitStat_heading'>GitHub Status</p>

        <div id='github-streak-stats'>
            <img className='github_status' src="https://github-readme-streak-stats.herokuapp.com?user=code0403&theme=tokyonight&border_radius=5&type=png&hide_border=true&card_width=600" alt="" />
        </div>

        <div id='github-stats-card'>
            <img className='github_status' src="https://github-readme-stats.vercel.app/api?username=code0403&show_icons=true&theme=tokyonight&hide_border=true&card_width=500" alt="" />
        </div>

        <div id='github-top-langs'>
            <img className='github_status' src="https://github-readme-stats.vercel.app/api/top-langs/?username=anuraghazra&theme=tokyonight&card_width=500&hide_border=true" alt="" />
        </div>

        

        <div id='git_calender' >

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
