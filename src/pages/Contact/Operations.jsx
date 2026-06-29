import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { TiMessage } from "react-icons/ti";
import { CiLocationOn } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";

const Operations = () => {
  return (
    <div className='py-20 lg:py-28  bg-white dark:bg-gray-950'>
      <div className='container mx-auto px-4 lg:px-8'>
        <div className='grid gap-12 lg:grid-cols-5'>

          {/* Form - Left Side */}
          <div className='lg:col-span-3'>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>
              Request a Security Assessment
            </h2>
            <p className='mt-2 text-gray-600 dark:text-gray-400'>
              Tell us about your security needs and our team will respond within 4 hours with a tailored recommendation.
            </p>

            <form className='mt-6 space-y-6'>
              {/* Name & Email */}
              <div className='grid gap-6 sm:grid-cols-2'>
                <div>
                  <label htmlFor="name" className='block text-sm font-medium text-gray-700 dark:text-gray-300'>
                    Full name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className='mt-2 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400'
                    placeholder='Usman'
                  />
                </div>
                <div>
                  <label htmlFor="email" className='block text-sm font-medium text-gray-700 dark:text-gray-300'>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className='mt-2 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400'
                    placeholder='usman@gmail.com'
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className='block text-sm font-medium text-gray-700 dark:text-gray-300'>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className='mt-2 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400'
                  placeholder='Security assessment, demo request, incident response...'
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className='block text-sm font-medium text-gray-700 dark:text-gray-300'>
                  Project Details
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className='mt-2 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400'
                  placeholder='Tell us about your project...'
                ></textarea>
              </div>

              {/* Button */}
              <button className='inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#e11d48] px-8 py-4 text-base font-medium text-white shadow-lg transition-all hover:bg-[#be123c] hover:shadow-xl sm:w-auto'>
                Send Request
                <FaArrowRightLong />
              </button>
            </form>
          </div>

          {/* Right Side - Security Operations */}
          <div className='lg:col-span-2'>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>
              Security Operations
            </h2>
            <p className='mt-2 text-gray-600 dark:text-gray-400'>
              Our SOC team is available 24/7 for security incidents and emergency response.
            </p>

            <div className='mt-8 space-y-8'>

              {/* Email */}
              <div className='flex gap-4'>
                <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-100 text-[#e11d48] dark:bg-red-900/20 dark:text-red-400'>
                  <TiMessage className='h-6 w-6' />
                </div>
                <div>
                  <h3 className='font-semibold text-gray-900 dark:text-white'>Email</h3>
                  <a href="tel:+923256349106" className='mt-1 block text-gray-600 transition-colors hover:text-[#e11d48] dark:text-gray-400'>
                    Security@shieldnet.io
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className='flex gap-4'>
                <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-100 text-[#e11d48] dark:bg-red-900/20 dark:text-red-400'>
                  <MdOutlinePhone className='h-6 w-6' />
                </div>
                <div>
                  <h3 className='font-semibold text-gray-900 dark:text-white'>Email</h3>
                  <a href="mailto:usman@gmail.com" className='mt-1 block text-gray-600 transition-colors hover:text-[#e11d48] dark:text-gray-400'>
                    (555) 893-8976
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className='flex gap-4'>
                <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-100 text-[#e11d48] dark:bg-red-900/20 dark:text-red-400'>
                  <CiLocationOn className='h-6 w-6' />
                </div>
                <div>
                  <h3 className='font-semibold text-gray-900 dark:text-white'>Headquarters</h3>
                  <p className='mt-1 text-gray-600 dark:text-gray-400'>
                  1200 Cyber Defense Blvd, Washington, DC 20001
                  </p>
                </div>
              </div>

              {/* Office Hours */}
              <div className='flex gap-4'>
                <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-100 text-[#e11d48] dark:bg-red-900/20 dark:text-red-400'>
                  <CiClock2 className='h-6 w-6' />
                </div>
                <div>
                  <h3 className='font-semibold text-gray-900 dark:text-white'>SOC Hours</h3>
                  <p className='mt-1 text-gray-600 dark:text-gray-400'>
                    Security Operations: 24/7/365<br />
                    Sales & Support: Mon-Fri 8AM-8PM ET
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Operations