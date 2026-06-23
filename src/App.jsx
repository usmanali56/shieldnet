import React from 'react'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/Hero-section/HeroSection'

const App = () => {
  return (
    <div>
      <Navbar />
      <main className="pt-20 lg:pt-20">
  <HeroSection />
</main>
    </div>
  )
}

export default App

