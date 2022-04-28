import React from 'react'
import './../Style/home.css'


const Home = () => {
  return (
    <div className='homeMainCon'>
      <div className='homeSubCon'>
        <div className='homeMyNameCon'>
          I'm Terry
        </div>
        <div className='homeJobTitleCon'>
          A Front-end Developer
        </div>
        <div className='homeProjectCon'>
          View Project
        </div>
      </div> 
      <div className='homeBgPictureMainCon'>
        <img className='homeBgSubCon' src='img/homeBg.jpg' alt='homeBgError.jpg'/>
      </div>
    </div>
  )
}

export default Home
