import React from 'react'
import img from '../../assets/img2.jpeg'
const Defending = () => {
  return (
    <div className=' bg-white py-20 lg:py-28  dark:bg-gray-950'>
      <div className='container mx-auto px-4 lg:px-8'>
<div className='grid items-center gap-12 lg:grid-cols-2'>
<div>
    <div className='mb-4 inline-flex items-center rounded-full bg-[#ffe4e6] px-3 py-1 text-sm font-medium text-[#be123c] dark:bg-[#881337] dark:text-[#FDA4AF]'>
     Our Mission 
    </div>
    <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white'>
         Defending the Digital Frontier 
    </h2>
    <p className='mt-4 text-lg font-medium italic text-[#E11D48] dark:text-[#FB7185]'>

“To empower every organization with military-grade cybersecurity, making advanced threat protection accessible, intelligent, and autonomous.”
    </p>
    <p className='mt-4 text-gray-600 dark:text-gray-400'>
Founded in 2019 by a team of former NSA analysts and military cyber operations specialists, ShieldNet was born from a simple observation: enterprise security tools were too complex, too slow, and generated too much noise. We set out to build something fundamentally better.
    </p>
    <p className='mt-4 text-gray-600 dark:text-gray-400'>
Today, ShieldNet protects over 10 million endpoints across 40 countries. Our AI-powered platform processes 500 billion security events daily, detecting and neutralizing threats that legacy tools miss. We are headquartered in Washington, DC, with research labs in Tel Aviv and engineering offices in Austin and London.
    </p>
</div>
<div className='overflow-hidden rounded-2xl'>
<img src={img} alt="" className='h-full w-full object-cover' />
</div>
</div>
      </div>
    </div>
  )
}

export default Defending
