import React from 'react'

const Newsletter = () => {
  return (
    <div className='bg-gray-50 py-20 lg:py-28 dark:bg-gray-950'>
      <div className='container mx-auto px-4 lg:px-8'>
<div className='mx-auto max-w-3xl rounded-2xl bg-gray-900 px-8 py-16 text-center shadow-xl dark:bg-gray-800'>
<span className='inline-flex items-center rounded-full bg-[#E11D48] px-4 py-1.5 text-sm font-medium text-[#FB7185]'>Newsletter</span>
<h2 className='mt-4 text-3xl font-bold text-white sm:text-4xl'>Stay in the Loop</h2>
<p className='mt-4 text-lg text-gray-400'>
    Subscribe to our newsletter for the latest articles, tips, and updates delivered straight to your inbox.
</p>
<form action="" className='mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row'>
<input type="email"className='w-full max-w-sm rounded-full border border-gray-700 bg-gray-800 px-6 py-3 text-white shadow-lg placeholder:text-gray-500 focus:border-primary-500
 focus:outline-none focus:ring-2 focus:ring-primary-500/20 sm:w-auto' placeholder='Enter your email' />
 <button className='w-full rounded-full bg-[#E11D48] px-8 py-3 font-semibold text-white shadow-lg transition-all hover:bg-[#BE123C] sm:w-auto'>
    Subscribe
 </button>
</form>
</div>
      </div>
    </div>
  )
}

export default Newsletter
