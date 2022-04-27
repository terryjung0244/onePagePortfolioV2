import React from 'react'
import Home from './screens/component/Home'
import About from './screens/component/About'
import Skill from './screens/component/Skill'
import Project from './screens/component/Project'
import Contact from './screens/component/Contact'
import NavBar from './screens/component/NavBar'
import './../src/App.css'

const App = () => {
  return (
    <div>
      <div id='Home'>
        <Home/>
      </div>
      <div id='About'>
        <About/>
      </div>
      <div id='Skill'>
        <Skill/>
      </div>
      <div id='Project'>
        <Project/>
      </div>
      <div id='Contact'>
        <Contact/>
      </div>
      <div>
        <NavBar/>
      </div>
    </div>
  )
}

export default App
