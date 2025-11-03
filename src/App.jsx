import React from 'react'
import ListItems from './components/ListItems.jsx'
import NavItem from './layouts/navItem.jsx'
import Hero from './layouts/Hero.jsx'
import Catagory from './layouts/Catagory.jsx'
import Courses from './layouts/Courses.jsx'

const App = () => {
  return (
  <header>
   <NavItem/>
   <Hero/>
   <div className='relative'>
       <Catagory />
   </div>
   <Courses/>

  </header>
  )
}

export default App

