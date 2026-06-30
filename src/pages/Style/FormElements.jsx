import React, { useState } from 'react'

const FormElements = () => {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className='bg-white pb-20 lg:pb-28 dark:bg-gray-950'>
      <div className='container mt-[-130px] mx-auto max-w-5xl px-4 lg:px-8'>

        {/* Heading */}
        <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>Form Elements</h2>
        <p className='mt-2 text-gray-600 dark:text-gray-400'>
          Input fields, selects, textareas, and other form controls.
        </p>

        <div className='mt-8 space-y-6 max-w-xl'>

          {/* Full Name */}
          <div>
            <label className='block text-sm font-medium text-gray-900 dark:text-white mb-2'>
              Full Name
            </label>
            <input
              type="text"
              placeholder='Enter your full name'
              className='w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-[#E11D48] focus:outline-none focus:ring-1 focus:ring-[#E11D48] dark:border-gray-700 dark:bg-gray-900 dark:text-white'
            />
          </div>

          {/* Email */}
          <div>
            <label className='block text-sm font-medium text-gray-900 dark:text-white mb-2'>
              Email Address
            </label>
            <input
              type="email"
              placeholder='you@example.com'
              className='w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-[#E11D48] focus:outline-none focus:ring-1 focus:ring-[#E11D48] dark:border-gray-700 dark:bg-gray-900 dark:text-white'
            />
          </div>

          {/* Subject - Select */}
          <div>
            <label className='block text-sm font-medium text-gray-900 dark:text-white mb-2'>
              Subject
            </label>
            <select className='w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#E11D48] focus:outline-none focus:ring-1 focus:ring-[#E11D48] dark:border-gray-700 dark:bg-gray-900 dark:text-white'>
              <option>Select a subject...</option>
              <option>General Inquiry</option>
              <option>Support</option>
              <option>Sales</option>
            </select>
          </div>

          {/* Message - Textarea */}
          <div>
            <label className='block text-sm font-medium text-gray-900 dark:text-white mb-2'>
              Message
            </label>
            <textarea
              rows="5"
              placeholder='Write your message here...'
              className='w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-[#E11D48] focus:outline-none focus:ring-1 focus:ring-[#E11D48] dark:border-gray-700 dark:bg-gray-900 dark:text-white'
            ></textarea>
          </div>

          {/* Preferences - Checkboxes */}
          <div>
            <label className='block text-sm font-medium text-gray-900 dark:text-white mb-3'>
              Preferences
            </label>
            <div className='space-y-3'>
              <label className='flex items-center gap-3 cursor-pointer'>
                <input type="checkbox" className='h-4 w-4 rounded border-gray-300 text-[#E11D48] focus:ring-[#E11D48]' />
                <span className='text-gray-700 dark:text-gray-300'>Email notifications</span>
              </label>
              <label className='flex items-center gap-3 cursor-pointer'>
                <input type="checkbox" defaultChecked className='h-4 w-4 rounded border-gray-300 text-[#E11D48] focus:ring-[#E11D48]' />
                <span className='text-gray-700 dark:text-gray-300'>SMS notifications</span>
              </label>
              <label className='flex items-center gap-3 cursor-pointer'>
                <input type="checkbox" defaultChecked className='h-4 w-4 rounded border-gray-300 text-[#E11D48] focus:ring-[#E11D48]' />
                <span className='text-gray-700 dark:text-gray-300'>Marketing updates</span>
              </label>
            </div>
          </div>

          {/* Contact Method - Radio */}
          <div>
            <label className='block text-sm font-medium text-gray-900 dark:text-white mb-3'>
              Contact Method
            </label>
            <div className='space-y-3'>
              <label className='flex items-center gap-3 cursor-pointer'>
                <input type="radio" name="contact" className='h-4 w-4 border-gray-300 text-[#E11D48] focus:ring-[#E11D48]' />
                <span className='text-gray-700 dark:text-gray-300'>Email</span>
              </label>
              <label className='flex items-center gap-3 cursor-pointer'>
                <input type="radio" name="contact" defaultChecked className='h-4 w-4 border-gray-300 text-[#E11D48] focus:ring-[#E11D48]' />
                <span className='text-gray-700 dark:text-gray-300'>Phone</span>
              </label>
              <label className='flex items-center gap-3 cursor-pointer'>
                <input type="radio" name="contact" className='h-4 w-4 border-gray-300 text-[#E11D48] focus:ring-[#E11D48]' />
                <span className='text-gray-700 dark:text-gray-300'>In Person</span>
              </label>
            </div>
          </div>

          {/* Toggle Switch */}
          <div>
            <label className='block text-sm font-medium text-gray-900 dark:text-white mb-3'>
              Toggle Switch
            </label>
            <label className='flex items-center gap-3 cursor-pointer'>
              <button
                type="button"
                onClick={() => setDarkMode(!darkMode)}
                className={`relative h-6 w-11 rounded-full transition-colors duration-300 ${
                  darkMode ? 'bg-[#E11D48]' : 'bg-red-100'
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform duration-300 ${
                    darkMode ? 'translate-x-5' : 'translate-x-0'
                  }`}
                ></span>
              </button>
              <span className='text-gray-700 dark:text-gray-300'>Enable dark mode</span>
            </label>
          </div>

        </div>
<hr  className='my-16 border-gray-200 dark:border-gray-800'/>
      </div>
    </div>
  )
}

export default FormElements