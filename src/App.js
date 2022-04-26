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
      <div>
        <Home/>
      </div>
      <div>
        <About/>
      </div>
      <div>
        <Skill/>
      </div>
      <div>
        <Project/>
      </div>
      <div>
        <Contact/>
      </div>
      <div>
        <NavBar/>
      </div>
    </div>
  )
}

export default App
