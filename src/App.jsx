import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ScrollProgress from './components/ScrollProgress/ScrollProgress'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

// Components (main page)
import HeroSection from './components/Hero-section/HeroSection'
import CountSection from './components/Countsection/CountSection'
import Solutions from './components/Solutions/Solutions'
import Testimonials from './components/Testimonials/Testimonials'
import Security from './components/Security/Security'
import ShieldNetFAQ from './components/ShieldNetFAQ/ShieldNetFAQ'
import Secure from './components/Secure/Secure'

// Pages
import SolutionsPage from './pages/Solution/Solutions'
import PricingPage from './pages/Pricing/Pricing'
import AboutPage from './pages/About/About'
import BlogPage from './pages/Blog/Blog'
import ContactPage from './pages/Contact/Contact'

const App = () => {
  return (
    <BrowserRouter>
      <ScrollProgress />
      <Navbar />

      <Routes>

        {/* Main single page */}
        <Route path='/' element={
          <div>
            <HeroSection />
            <CountSection />
            <Solutions />
            <Testimonials />
            <Security />
            <ShieldNetFAQ />
            <Secure />
          </div>
        }/>

        {/* Alag Pages */}
        <Route path='/solutions' element={<SolutionsPage />} />
        <Route path='/pricing' element={<PricingPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/contact' element={<ContactPage />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App