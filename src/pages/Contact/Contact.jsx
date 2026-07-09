import React from 'react'
import { Link } from 'react-router-dom'
import Operations from './Operations'
import Location from './Location'
const Contact = () => {
  return (
     <>
    <div className='bg-[#E11D48] py-16 mt-20 lg:py-24 dark:bg-[#881337]'>
        <div className='container mx-auto text-center px-4 lg:px-8'>
      <h1 className='text-3xl font-bold text-white sm:text-4xl lg:text-5xl'>
        Contact Us
</h1>
      <p className='mx-auto text-lg mt-4 max-w-2xl text-[#FFE4E6] '>
     Talk to our security experts. Available 24/7 for security incidents and consultations.
        </p>
      <nav className='mt-6 flex items-center justify-center gap-2 text-sm text-[#FECDD3]'>
         <Link to="/" className='transition-colors hover:text-white'>Home</Link>
         <span>/</span>
         <span className='text-white'>Contact</span>
      </nav>
      </div>
    </div>
    <Operations />
   <Location />
    </>
  )
}

export default Contact
