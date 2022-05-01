import React from 'react'
import './../Style/about.css'
import bgImage from './../../resources/image/aboutMe.jpg'

const About = () => {
  return (
    <div className='aboutMainCon'>
      <div className='aboutLeftSubCon'>
        <img className='backGroundPictureCon' src={bgImage} alt='bgImageError.jpg'/>
      </div>
      <div className='aboutSecondSubCon'>
        <div className='aboutTitleCon'>
          About Me
        </div>
        <div className='aboutDescCon'>
          Experience with all phases of the software life-cyle. Passion for learning new technologies. Capable of working within a team envirnment and independently. Ability to plan and time schedule, work under strict time pressure and adapt quickly when needed.
        </div>
        <div className='aboutTalkCon'>
          Let's Talk
        </div>
      </div>
    </div>
  )
}

export default About
