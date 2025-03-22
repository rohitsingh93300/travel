import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Destinations from './components/Destinations'
import Trip from './components/Trip'
import Company from './components/Company'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className=''>
      {/* <Navbar/> */}
      <Hero/>
      <Services/>
      <Destinations/>
      <Trip/>
      <Company/>
      <Subscribe/>
      <Footer/>
    </div>
  )
}

export default App
