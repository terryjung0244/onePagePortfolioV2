import React from 'react'
import './../Style/home.css'
import bgImage from './../../resources/image/homeBg.jpg';

const Home = () => {
  return (
    <div className='homeMainCon' style={{ backgroundImage: `url(${bgImage})`}}>
      <div>

        <div>
          I'm Terry
        </div>

        <div>
          A Front-end Developer
        </div>

        <div>
          View Project
        </div>

        <div>
          {/* <img src={bgImage} alt='bgImageError.png' /> */}
        </div>
      </div>
    </div>
  )
}

export default Home
