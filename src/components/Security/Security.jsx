import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { TiMessage } from "react-icons/ti";
import { CiLocationOn } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";

const Security = () => {
  return (
    <div className='py-20 lg:py-28 bg-white dark:bg-gray-950' id='Security'>
      <div className='container mx-auto px-4 lg:px-8'>

        <div className='mx-auto max-w-3xl text-center'>
          <div className='mb-4 inline-flex items-center rounded-full bg-[#dd9f9f] px-3 py-1 text-sm font-medium text-[#fb7070] dark:bg-[#fb6565] dark:text-[#f49a9a]'>
            Get In Touch
          </div>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white'>
            Talk to a Security Expert
          </h2>
          <p className='mt-4 text-lg text-gray-600 dark:text-gray-400'>
            Ready to strengthen your security posture? Our team of cybersecurity experts is available 24/7 to assess your needs and recommend the right protection.
          </p>
        </div>

        <div className='mt-16 grid gap-12 lg:grid-cols-5 lg:gap-16'>

          {/* form section */}
          <div className='lg:col-span-3'>
            <form className='space-y-6'>
              <div className='grid gap-6 sm:grid-cols-2'>
                <div>
                  <label htmlFor="name" className='block text-sm font-medium text-gray-700 dark:text-gray-300'>Full name</label>
                  <input type="text" id="name" className='mt-2 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400' placeholder='Usman' />
                </div>
                <div>
                  <label htmlFor="email" className='block text-sm font-medium text-gray-700 dark:text-gray-300'>Email Address</label>
                  <input type="email" id="email" className='mt-2 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400' placeholder='usman@gmail.com' />
                </div>
              </div>

              <div className='grid gap-6 sm:grid-cols-2'>
                <div>
                  <label htmlFor="number" className='block text-sm font-medium text-gray-700 dark:text-gray-300'>Phone Number</label>
                  <input type="tel" id="number" className='mt-2 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400' placeholder='03256349106' />
                </div>
                <div>
                  <label htmlFor="project-type" className='block text-sm font-medium text-gray-700 dark:text-gray-300'>Project Type</label>
                  <select id="project-type" className='mt-2 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white'>
                    <option value="">Select a project type</option>
                    <option value="residential">Residential Construction</option>
                    <option value="commercial">Commercial Building</option>
                    <option value="renovation">Renovation & Remodeling</option>
                    <option value="interior">Interior Design</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className='block text-sm font-medium text-gray-700 dark:text-gray-300'>Project Details</label>
                <textarea id="message" rows="5" className='mt-2 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400' placeholder='Tell us about your project...'></textarea>
              </div>

              <button className='inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#e11d48] px-8 py-4 text-base font-medium text-white shadow-lg transition-all hover:bg-[#be123c] hover:shadow-xl sm:w-auto'>
                Send Message
                <FaArrowRightLong />
              </button>
            </form>
          </div>

          {/* contact info */}
          <div className='lg:col-span-2'>
            <div className='space-y-8'>

              {/* phone */}
              <div className='flex gap-4'>
                <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e46480] text-[#e11d48] dark:bg-primary-900/50 dark:text-primary-400'>
                  <MdOutlinePhone className='h-6 w-6' />
                </div>
                <div>
                  <h3 className='font-semibold text-gray-900 dark:text-white'>Phone</h3>
                  <a href="" className='mt-1 text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400'>
                    +923256349106
                  </a>
                </div>
              </div>

              {/* email */}
              <div className='flex gap-4'>
                <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e46480] text-[#e11d48] dark:bg-primary-900/50 dark:text-primary-400'>
                  <TiMessage className='h-6 w-6' />
                </div>
                <div>
                  <h3 className='font-semibold text-gray-900 dark:text-white'>Email</h3>
                  <a href="" className='mt-1 text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400'>
                    usman@gmail.com
                  </a>
                </div>
              </div>

              {/* address */}
              <div className='flex gap-4'>
                <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e46480] text-[#e11d48] dark:bg-primary-900/50 dark:text-primary-400'>
                  <CiLocationOn className='h-6 w-6' />
                </div>
                <div>
                  <h3 className='font-semibold text-gray-900 dark:text-white'>Address</h3>
                  <p className='mt-1 text-gray-600 dark:text-gray-400'>
                    1200 Cyber Defense Blvd<br />
                    Washington, DC 20001
                  </p>
                </div>
              </div>

              {/* office hours */}
              <div className='flex gap-4'>
                <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e46480] text-[#e11d48] dark:bg-primary-900/50 dark:text-primary-400'>
                  <CiClock2 className='h-6 w-6' />
                </div>
                <div>
                  <h3 className='font-semibold text-gray-900 dark:text-white'>Office Hours</h3>
                  <p className='mt-1 text-gray-600 dark:text-gray-400'>
                    Mon - Fri: 7:00 AM - 6:00 PM<br />
                    Sat: 8:00 AM - 2:00 PM<br />
                    Sun: Closed
                  </p>
                </div>
              </div>

              {/* Map */}
              <div className='rounded-2xl overflow-hidden h-48'>
                <iframe
                  src="https://www.google.com/maps?q=Washington,DC&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Security