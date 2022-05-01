import React from 'react'
import './../Style/about.css'
import bgImage from './../../resources/image/aboutMe.jpg'
import Grid from '@mui/material/Grid';

const About = () => {
  return (
    <Grid container className='aboutMainCon'>
      
      <Grid xs={12} md={6} item className='aboutLeftSubCon'>
        <img className='backGroundPictureCon' src={bgImage} alt='bgImageError.jpg'/>
      </Grid>
      <Grid xs={12} md={6} item className='aboutSecondSubCon'>
        <div className='aboutTitleCon'>
          About Me
        </div>
        <div className='aboutDescCon'>
          Experience with all phases of the software life-cyle. Passion for learning new technologies. Capable of working within a team envirnment and independently. Ability to plan and time schedule, work under strict time pressure and adapt quickly when needed.
        </div>
        <div className='aboutTalkCon'>
          Let's Talk
        </div>
      </Grid>
      
    </Grid>
  )
}

export default About
