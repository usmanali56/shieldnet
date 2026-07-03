import React, { useState } from 'react'
import { useTheme } from '../../context/ThemContext';
import { RxCross2 } from "react-icons/rx";
import { IoReorderThreeSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg.svg'
import logoLight from '../../assets/logo.light-svg.svg'

const Navbar = () => {
    const { isDark, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    // Mobile menu link par click hote hi menu band ho jayega
    const closeMenu = () => setIsOpen(false);

  return (
    <div>
      <header className='fixed top-0 left-0 w-full z-50 border-b border-gray-200 bg-white backdrop-blur-lg transition-all dark:border-gray-800 dark:bg-[#0a0a0f]'>
        <div className='container mx-auto flex h-16 items-center justify-between px-4 lg:h-20 lg:px-8'>

        <Link to='/' className='flex items-center gap-2'>
          <img 
            src={logo} 
            alt="ShieldNet"  loading="lazy"
            className='h-8 w-auto lg:h-10 dark:hidden'
          />
          <img 
            src={logoLight} loading="lazy"
            alt="ShieldNet" 
            className='hidden h-8 w-auto lg:h-10 dark:block'
          />
        </Link>

          {/* Nav Links - sirf desktop par */}
          <nav className='hidden lg:flex lg:items-center lg:gap-8'>
            <Link to="/solutions" className='text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'>Solutions</Link>
            <Link to="/pricing" className='text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'>Pricing</Link>
            <Link to="/about" className='text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'>About</Link>
            <Link to="/blog" className='text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'>Blog</Link>
            <Link to="/contact" className='text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'>Contact</Link>
          </nav>

          {/* Right Side Buttons */}
          <div className='flex items-center gap-4'>
            <button onClick={toggleTheme} className='rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white'>
              {isDark ? '☀️' : '🌙'}
            </button>
            <Link to="/pricing" className='hidden lg:inline-flex rounded-xl bg-[#E11D48] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700'>
              Get Protected
            </Link>
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
            <Link onClick={closeMenu} to="/solutions" className='text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'>Solutions</Link>
            <Link onClick={closeMenu} to="/pricing" className='text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'>Pricing</Link>
            <Link onClick={closeMenu} to="/about" className='text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'>About</Link>
            <Link onClick={closeMenu} to="/blog" className='text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'>Blog</Link>
            <Link onClick={closeMenu} to="/contact" className='text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'>Contact</Link>
            <Link onClick={closeMenu} to="/pricing" className='w-full text-center rounded-xl bg-[#E11D48] px-4 py-2 text-sm font-medium text-white hover:bg-red-700'>
              Get Protected
            </Link>
          </div>
        )}

      </header>

      {/* Spacer - menu open hone par hero neeche jaye */}
      <div className={`transition-all duration-300 lg:hidden ${isOpen ? 'h-72' : 'h-0'}`}></div>

    </div>
  )
}

export default Navbar