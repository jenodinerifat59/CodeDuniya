import React from 'react'
import ListItems from './components/ListItems.jsx'
import NavItem from './layouts/navItem.jsx'
import Hero from './layouts/Hero.jsx'
import Catagory from './layouts/Catagory.jsx'
import Courses from './layouts/Courses.jsx'
import Reviewe from './layouts/reviewe.jsx'
import Specialty from './layouts/Specialty.jsx'
import Success from './layouts/Success.jsx'
import Addmission from './layouts/Addmission.jsx'

const App = () => {
  return (
  <header>
   <NavItem/>
   <Hero/>
   <div className='relative'>
       <Catagory />
   </div>
   <Courses/>
   <Reviewe/>
   <Specialty/>
   <Success/>
   <Addmission/>
  </header>
  )
}

export default App

