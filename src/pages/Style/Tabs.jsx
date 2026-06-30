import React from 'react'

const Tabs = () => {
  return (
    <div className='bg-white pb-20 lg:pb-28 dark:bg-gray-950'>
      <div className='container mt-[-90px] mx-auto max-w-5xl px-4 lg:px-8'>

        {/* Heading */}
        <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>Tabs</h2>
        <p className='mt-2 text-gray-600 dark:text-gray-400'>
          Tabbed navigation for organizing content into panels.
        </p>

        {/* Tab Buttons */}
        <div className='mt-8 flex gap-8 border-b border-gray-200 dark:border-gray-800'>
          <button className='pb-3 text-sm font-medium border-b-2 border-[#E11D48] text-[#E11D48] -mb-px'>
            Overview
          </button>
          <button className='pb-3 text-sm font-medium border-b-2 border-transparent text-gray-500 dark:text-gray-400'>
            Features
          </button>
          <button className='pb-3 text-sm font-medium border-b-2 border-transparent text-gray-500 dark:text-gray-400'>
            Pricing
          </button>
        </div>

        {/* Tab Content */}
        <div className='rounded-b-xl border border-t-0 border-gray-200 p-8 dark:border-gray-800'>
          <h3 className='text-lg font-bold text-gray-900 dark:text-white'>
            Overview
          </h3>
          <p className='mt-3 text-gray-600 dark:text-gray-400'>
            This is the content for the Overview tab. Each tab panel contains its own content, and only the active panel is visible at a time. Tabs are a great way to organize large amounts of information into digestible sections without overwhelming the user.
          </p>
        </div>
<hr  className='my-16 border-gray-200 dark:border-gray-800'/>
      </div>
    </div>
  )
}

export default Tabs