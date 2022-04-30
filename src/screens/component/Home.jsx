import React from 'react'
import './../Style/home.css'
import bgImage from './../../resources/image/homeBg.jpg';

const Home = () => {
  return (
    <div className='homeMainCon' style={{ backgroundImage: `url(${bgImage})`}}>
      <div>

        <div className='homeMyNameCon'>
          I'm Terry
        </div>

        <div className='homeTitleCon'>
          A Front-end Developer
        </div>

        <div className='homeProjectCon'>
          View Project
        </div>

      </div>
    </div>
  )
}

export default Home
