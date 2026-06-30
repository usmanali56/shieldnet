import React from 'react'
import { FiCheckCircle } from 'react-icons/fi'

const Lists = () => {
  const unorderedItems = [
    'Responsive design patterns',
    'Cross-browser compatibility',
    'Accessibility best practices',
    'Performance optimization',
    'SEO-friendly markup',
  ]

  const orderedItems = [
    'Plan your content strategy',
    'Design the user interface',
    'Develop and implement',
    'Test across devices',
    'Deploy and monitor',
  ]

  const checkListItems = [
    'Tailwind CSS 4.x ready',
    'Dark mode support',
    'Fully responsive',
    'Vanilla JavaScript',
    'WCAG accessible',
  ]

  return (
    <div className='bg-white pb-20 lg:pb-28 dark:bg-gray-950'>
      <div className='container mt-15 mx-auto max-w-5xl px-4 lg:px-8'>

        <div className='bg-white pb-20 lg:pb-28 dark:bg-gray-950'>
          <div className='container mt-[-130px] mx-auto max-w-5xl px-4 lg:px-8'>

            {/* Heading */}
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>Lists</h2>
            <p className='mt-2 text-gray-600 dark:text-gray-400'>
              Unordered, ordered, and icon-based list styles.
            </p>

            {/* 3 Columns */}
            <div className='mt-8 grid gap-10 sm:grid-cols-3'>

              {/* Unordered List */}
              <div>
                <h3 className='mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400'>
                  Unordered
                </h3>
                <ul className='space-y-3 list-disc list-inside text-gray-700 dark:text-gray-300'>
                  {unorderedItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Ordered List */}
              <div>
                <h3 className='mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400'>
                  Ordered
                </h3>
                <ol className='space-y-3 list-decimal list-inside text-gray-700 dark:text-gray-300'>
                  {orderedItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
              </div>

              {/* Check List */}
              <div>
                <h3 className='mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400'>
                  Check List
                </h3>
                <ul className='space-y-3'>
                  {checkListItems.map((item, index) => (
                    <li key={index} className='flex items-center gap-2 text-gray-700 dark:text-gray-300'>
                      <FiCheckCircle className='h-5 w-5 flex-shrink-0 text-green-500' />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </div>
<hr  className='my-16 border-gray-200 dark:border-gray-800'/>
      </div>
    </div>
  )
}

export default Lists