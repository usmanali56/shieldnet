import React from 'react'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/Hero-section/HeroSection'
import CountSection from './components/Countsection/CountSection'
import Solutions from './components/Solutions/Solutions'
import Testimonials from './components/Testimonials/Testimonials'
import Security from './components/Security/Security'

const App = () => {
  return (
    <div>
      <Navbar />
      
  <HeroSection />
  <CountSection />
  <Solutions />
  <Testimonials />
  <Security />
    </div>
  )
}

export default App

