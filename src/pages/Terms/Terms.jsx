import React from 'react'
import { Link } from 'react-router-dom'
import TermsSection from './TermsSection'

const Terms = () => {
  return (
    <>
    <div className="bg-[#E11D48] py-16 lg:py-24 dark:bg-[#4C0519]">
        <div className="container mt-20 mx-auto text-center px-4 lg:px-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
           Terms of Service
          </h1>
          <p className="mx-auto text-lg mt-4 max-w-2xl text-[#FFE4E6] ">
            Please read these terms carefully before using our services.
          </p>
          <nav className="mt-6 flex items-center justify-center gap-2 text-sm text-[#FECDD3]">
            <Link to="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Terms of Service</span>
          </nav>
        </div>
      </div>
      <TermsSection />
    </>
  )
}

export default Terms
