import React from 'react'
import './../Style/navBar.css'
import { navBarList } from '../../DataList/navBar'
import { useState, useEffect } from 'react'

const NavBar = () => {

  const [scrollNav, setScrollNav] = useState('Home') //처음에는 'Home'

  const controlDirection = () => {
    if (window.scrollY < 700) {
      setScrollNav('Home');
    } else if (window.scrollY >= 701 && window.scrollY < 1400) {
      setScrollNav('About');
    } else if (window.scrollY >= 1500 && window.scrollY < 2300) {
      setScrollNav('Skills');
    } else if (window.scrollY >= 2310 && window.scrollY < 3100) {
      setScrollNav('Projects');
    } else if (window.scrollY >= 3130 && window.scroll < 3560) {
      setScrollNav('Contact')
    }
  }


  return (
    <div>
      <div className='navBarCon'>
        {navBarList.map((navBar,index) => {
          return (
            <div className='navBarParentCon' style={{}} key={navBar}>

              <a className='navBarEachChildCon' style={{}} href={`#${navBar}`} alt='navBarList'>
                {navBar}
              </a>
              
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default NavBar