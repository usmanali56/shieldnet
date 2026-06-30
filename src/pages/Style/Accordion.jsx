import React from 'react'
import { FiChevronUp, FiChevronDown } from 'react-icons/fi'

const Accordion = () => {
  return (
    <div className='bg-white pb-20 lg:pb-28 dark:bg-gray-950'>
      <div className='container mt-[-90px] mx-auto max-w-5xl px-4 lg:px-8'>

        {/* Heading */}
        <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>Accordion</h2>
        <p className='mt-2 text-gray-600 dark:text-gray-400'>
          Expandable content sections for FAQs and collapsible information.
        </p>

        {/* Accordion Items */}
        <div className='mt-8 space-y-4'>

          {/* Item 1 - Open */}
          <div className='rounded-xl border border-gray-200 dark:border-gray-800'>
            <button className='flex w-full items-center justify-between px-6 py-5 text-left'>
              <span className='font-semibold text-gray-900 dark:text-white'>
                What technologies does this template use?
              </span>
              <FiChevronUp className='h-5 w-5 flex-shrink-0 text-[#E11D48]' />
            </button>
            <div className='border-t border-gray-200 px-6 py-5 dark:border-gray-800'>
              <p className='text-gray-600 dark:text-gray-400'>
                This template is built with Astro 5.x for static site generation, Tailwind CSS 4.x for utility-first styling, and vanilla TypeScript for client-side interactivity. No jQuery or heavy JavaScript frameworks are used, resulting in excellent performance scores.
              </p>
            </div>
          </div>

          {/* Item 2 - Closed */}
          <div className='rounded-xl border border-gray-200 dark:border-gray-800'>
            <button className='flex w-full items-center justify-between px-6 py-5 text-left'>
              <span className='font-semibold text-gray-900 dark:text-white'>
                Is the template responsive and mobile-friendly?
              </span>
              <FiChevronDown className='h-5 w-5 flex-shrink-0 text-gray-400' />
            </button>
          </div>

          {/* Item 3 - Closed */}
          <div className='rounded-xl border border-gray-200 dark:border-gray-800'>
            <button className='flex w-full items-center justify-between px-6 py-5 text-left'>
              <span className='font-semibold text-gray-900 dark:text-white'>
                How do I customize the colors and design?
              </span>
              <FiChevronDown className='h-5 w-5 flex-shrink-0 text-gray-400' />
            </button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Accordion