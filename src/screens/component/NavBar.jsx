import React from 'react'
import './../Style/navBar.css'
import { navBarList } from '../../DataList/navBar'

const NavBar = () => {
  return (
    <div>
      <div className='navBarContainer'>
        {navBarList.map((navBar,index) => {
          return (
            <div key={navBar}>
              {navBar}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default NavBar
