import React from 'react'
import './../Style/home.css'
import bgImage from './../../resources/image/homeBg.jpg';

const Home = () => {
  return (
    <div className='homeMainCon'>
      {/* <div className='homeSubCon'>
        <div className='homeMyNameCon'>
          I'm Terry
        </div>
        <div className='homeJobTitleCon'>
          A Front-end Developer
        </div>
        <div className='homeProjectSubCon'>
          View Project
        </div>
      </div> */}
      <div style={{width: '100%', height: '100vh', backgroundImage: `url(${bgImage})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column', position: 'relative'}}>
        <div style={{border: '2px solid red', position: 'absolute', top: '40%', left: '50%'}}>
          I'm Terry
        </div>
        <div style={{border: '2px solid red', position: 'absolute', top: '50%', left: '50%'}}>
          A Front-end Developer
        </div>
        <div className='homeProjectSubCon' style={{}}>
          View Project
        </div>

      </div>
      {/* <img className='homeBgCon' src='img/homeBg.jpg' alt='homeBgError.jpg' /> */}
    </div>
  )
}

export default Home
