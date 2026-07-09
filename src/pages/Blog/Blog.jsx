import React from 'react'
import { Link } from 'react-router-dom'
import Articles from './Articles'
import Newsletter from './Newsletter'

const Blog = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-[#E11D48] to-[#BE123C] py-20 dark:from-[#881337] dark:to-gray-950">
        <div className="container mt-20 mx-auto text-center px-4 lg:px-8">
          <span className='inline-flex  items-center rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white'>Our Blog</span>
          <h1 className="text-3xl pt-10 font-bold text-white sm:text-4xl lg:text-5xl">
           Insights & Updates
          </h1>
          <p className="mx-auto text-lg mt-4 max-w-2xl text-[#FFE4E6] ">
          Stay up to date with the latest tips, trends, and insights from our team.
          </p>
          <nav className="mt-6 flex items-center justify-center gap-2 text-sm text-[#FECDD3]">
            <Link to="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Blog</span>
          </nav>
        </div>
      </div>
      <Articles />
      <Newsletter />
      </>
  )
}

export default Blog
