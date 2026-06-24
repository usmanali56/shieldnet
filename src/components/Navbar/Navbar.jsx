import React, { useState } from 'react'
import logo from '../../assets/logo.svg'
import { useTheme } from '../../context/ThemContext';
import { RxCross2 } from "react-icons/rx";
import { IoReorderThreeSharp } from "react-icons/io5";

const Navbar = () => {
    const { isDark, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <header className='fixed top-0 left-0 w-full z-50 border-b border-gray-200 bg-white backdrop-blur-lg transition-all dark:border-gray-800 dark:bg-[#0a0a0f]'>
        <div className='container mx-auto flex h-16 items-center justify-between px-4 lg:h-20 lg:px-8'>

          {/* Logo */}
          <div className="logo">
            <a href="" className='flex items-center gap-2'>
              <img src="https://shieldnet-colorlib.pages.dev/assets/img/logo.svg" className='h-8 w-auto lg:h-10 dark:hidden' />
              <img src="https://shieldnet-colorlib.pages.dev/assets/img/logo-light.svg" className='hidden h-8 w-auto lg:h-10 dark:block' />
            </a>
          </div>

          {/* Nav Links - sirf desktop par */}
          <nav className='hidden lg:flex lg:items-center lg:gap-8'>
            <a href="" className='text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'>Solutions</a>
            <a href="" className='text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'>Pricing</a>
            <a href="" className='text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'>About</a>
            <a href="" className='text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'>Blog</a>
            <a href="" className='text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'>Contact</a>
          </nav>

          {/* Right Side Buttons */}
          <div className='flex items-center gap-4'>
            <button onClick={toggleTheme} className='rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white'>
              {isDark ? '☀️' : '🌙'}
            </button>
            <a href="" className='hidden lg:inline-flex rounded-xl bg-[#E11D48] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700'>
              Get Protected
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='lg:hidden rounded-lg p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'
            >
              {isOpen ? (
                <RxCross2 className="h-6 w-6" />
              ) : (
                <IoReorderThreeSharp className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className='lg:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0a0f] px-4 py-4 flex flex-col gap-4'>
            <a href="" className='text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'>Solutions</a>
            <a href="" className='text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'>Pricing</a>
            <a href="" className='text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'>About</a>
            <a href="" className='text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'>Blog</a>
            <a href="" className='text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'>Contact</a>
            <a href="" className='w-full text-center rounded-xl bg-[#E11D48] px-4 py-2 text-sm font-medium text-white hover:bg-red-700'>
              Get Protected
            </a>
          </div>
        )}

      </header>

      {/* Spacer - menu open hone par hero neeche jaye */}
      <div className={`transition-all duration-300 lg:hidden ${isOpen ? 'h-72' : 'h-0'}`}></div>

    </div>
  )
}

export default Navbar