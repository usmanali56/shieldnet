import React from 'react'
import { FiZap, FiChevronRight } from 'react-icons/fi'

const Cards = () => {
  return (
    <div className='bg-white pb-20 lg:pb-28 dark:bg-gray-950'>
      <div className='container mt-[-130px] mx-auto max-w-5xl px-4 lg:px-8'>

        {/* Heading */}
        <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>Cards</h2>
        <p className='mt-2 text-gray-600 dark:text-gray-400'>
          Flexible content containers with various styles and layouts.
        </p>

        {/* Top 3 cards */}
        <div className='mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>

          {/* Basic Card */}
          <div className='rounded-2xl border border-gray-200 p-6 dark:border-gray-800'>
            <h3 className='font-bold text-gray-900 dark:text-white'>Basic Card</h3>
            <p className='mt-3 text-gray-600 dark:text-gray-400'>
              A simple card with a border, padding, and rounded corners. Ideal for displaying grouped information.
            </p>
          </div>

          {/* Hover Shadow Card */}
          <div className='rounded-2xl border border-gray-200 p-6 shadow-sm transition-shadow hover:shadow-xl dark:border-gray-800'>
            <h3 className='font-bold text-gray-900 dark:text-white'>Hover Shadow</h3>
            <p className='mt-3 text-gray-600 dark:text-gray-400'>
              This card elevates on hover with a larger shadow, providing visual feedback and encouraging interaction.
            </p>
          </div>

          {/* Icon Card */}
          <div className='rounded-2xl border border-gray-200 p-6 dark:border-gray-800'>
            <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-[#E11D48] dark:bg-red-900/20'>
              <FiZap className='h-6 w-6' />
            </div>
            <h3 className='mt-4 font-bold text-gray-900 dark:text-white'>Icon Card</h3>
            <p className='mt-3 text-gray-600 dark:text-gray-400'>
              Features a prominent icon above the content, useful for services, features, and benefit highlights.
            </p>
          </div>

        </div>

        {/* Card with Image */}
        <div className='mt-8 max-w-sm overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800'>
          <div className='h-44 w-full bg-gradient-to-br from-[#FB7185] to-[#E11D48]'></div>
          <div className='p-6'>
            <h3 className='font-bold text-gray-900 dark:text-white'>Card with Image</h3>
            <p className='mt-3 text-gray-600 dark:text-gray-400'>
              A card featuring an image area at the top with content below. The gradient placeholder represents the image area.
            </p>
            <a href="" className='mt-4 inline-flex items-center gap-1 font-semibold text-[#E11D48] hover:text-[#BE123C]'>
              Learn more
              <FiChevronRight className='h-4 w-4' />
            </a>
          </div>
        </div>
<hr  className='my-16 border-gray-200 dark:border-gray-800'/>
      </div>
    </div>
  )
}

export default Cards