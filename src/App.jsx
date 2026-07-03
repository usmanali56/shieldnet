import React, { useEffect } from 'react'
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
import Privacy from './pages/Privacy/Privacy'
import Terms from './pages/Terms/Terms'
import Style from './pages/Style/Style'
import Blog1 from './pages/blogcard/Blog1/Blog1'
import Blog2 from './pages/blogcard/Blog2/Blog2'
import Blog3 from './pages/blogcard/Blog3/Blog3'
import Blog4 from './pages/blogcard/Blog4/Blog4'
import Blog5 from './pages/blogcard/Blog5/Blog5'
import Articles from './pages/Blog/Articles'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton'
const App = () => {
  useEffect(() => {
    AOS.init({
      duration:700,
      easing: "ease-in-sine",
      delay:300,
      offset: 50,
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <BrowserRouter>
    <ScrollToTop />
    <ScrollToTopButton />
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
<Route path='/privacy' element={<Privacy />} />
<Route path='/terms' element={<Terms />} />
<Route path='/style' element={<Style />} />
 <Route path="/articles" element={<Articles />} />
<Route path='/blog1' element={<Blog1 />} />
<Route path='/blog2' element={<Blog2 />} />
<Route path='/blog3' element={<Blog3 />} />
<Route path='/blog4' element={<Blog4 />} />
<Route path='/blog5' element={<Blog5 />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App