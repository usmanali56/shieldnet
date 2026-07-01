import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa6";
import img1 from "../../../assets/img4.jpeg"
import img2 from "../../../assets/art3.jpeg"
import Content4 from './Content4';

const Blog4 = () => {
  return (
    <>
      <div className='bg-white pt-8 dark:bg-gray-950'>
        <div className='container mt-16 mx-auto px-4 lg:px-8'>
          <div className='mx-auto max-w-3xl'>
            <Link to="/blog" className='inline-flex items-center gap-2 text-sm font-medium text-[#E11D48] hover:text-[#BE123C] dark:text-[#FB7185] dark:hover:text-[#FDA4AF]'>
              <FaArrowLeft className='h-4 w-4' />
              Back to Blog
            </Link>

            <nav className='mt-4 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400'>
              <Link to="/" className='transition-colors hover:text-gray-900 dark:hover:text-white'>Home</Link>
              <span>/</span>
              <Link to='/blog' className='transition-colors hover:text-gray-900 dark:hover:text-white'>Blog</Link>
              <span>/</span>
              <span className='text-gray-900 dark:text-white'>Article</span>
            </nav>

            <div className='mt-6'>
              <span className='inline-flex items-center rounded-full bg-[#FFE4E6] px-3 py-1 text-xs font-medium text-[#BE123C] dark:bg-primary-[#4C0519] dark:text-[#FDA4AF]'>
                Technology
              </span>
            </div>

            <h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white'>
              How AI Is Transforming Threat Detection
            </h1>

            <p className='mt-4 text-lg text-gray-600 dark:text-gray-400'>
              Explore how artificial intelligence and machine learning are revolutionizing cybersecurity detection and response capabilities.
            </p>

            <div className='mt-6 flex items-center gap-4 border-b border-gray-200 pb-8 dark:border-gray-800'>
              <img src={img1} className='h-10 w-10 rounded-full object-cover' />
              <div>
                <div className='text-sm font-medium text-gray-900 dark:text-white'>Dr. Priya Sharma</div>
                <div className='text-sm text-gray-500 dark:text-gray-400'>Feb 5, 2026 · 7 min read</div>
              </div>
            </div>
          </div>

          {/* image */}
          <div className='mx-auto max-w-4xl overflow-hidden rounded-2xl mt-8'>
            <img
              src={img2}
              alt="The Complete Guide to Zero Trust Architecture in 2026"
              className='h-auto w-full object-cover'
            />
          </div>
        </div>
      </div>

      <Content4 />
    </>
  )
}

export default Blog4