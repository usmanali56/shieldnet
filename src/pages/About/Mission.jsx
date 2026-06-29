import React from 'react'
import { Link } from 'react-router-dom'

const Mission = () => {
  return (
    <div className='bg-[#E11D48] py-16 lg:py-24 dark:bg-[#4C0519]'>
      <div className='container mx-auto px-4 text-center lg:px-8'>
<h2 className='text-3xl font-bold text-white sm:text-4xl'>
Join the Mission
</h2>
<p className='mx-auto mt-4 max-w-2xl text-lg text-[#FFE4E6]'>
Help us build the future of cybersecurity. We're always looking for talented security researchers, engineers, and analysts.
</p>
<Link to="/contact" className='mt-8 inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-medium text-[#E11D48] shadow-lg transition-all hover:bg-gray-100'>
 View Careers 
</Link>
      </div>
    </div>
  )
}

export default Mission
