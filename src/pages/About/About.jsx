import React from 'react'
import { Link } from 'react-router-dom'
import Defending from './Defending'
import Principals from './Principals'
import Team from './Team'
import Mission from './Mission'

const About = () => {
  return (
     <>
    <div className='bg-[#E11D48] py-16 lg:py-24 dark:bg-[#881337]'>
        <div className='container mt-20 mx-auto text-center px-4 lg:px-8'>
      <h1 className='text-3xl font-bold text-white sm:text-4xl lg:text-5xl'>
        About ShieldNet
</h1>
      <p className='mx-auto text-lg mt-4 max-w-2xl text-[#FFE4E6] '>
      Founded by ex-NSA and military cyber operators, ShieldNet builds the next generation of threat protection for modern enterprises.
        </p>
      <nav className='mt-6 flex items-center justify-center gap-2 text-sm text-[#FECDD3]'>
         <Link to="/" className='transition-colors hover:text-white'>Home</Link>
         <span>/</span>
         <span className='text-white'>About</span>
      </nav>
      </div>
    </div>
    <Defending />
    <Principals />
    <Team />
    <Mission />
    </>
  )
}

export default About
