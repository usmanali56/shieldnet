import React from 'react'
import { Link } from 'react-router-dom'
import Typography from './Typography'
import Button from './Button'
import Alert from './Alert'
import Cards from  './Cards'
import FormElements from './FormElements'
import Lists from './Lists'
import Table from './Table'
import Tabs from './Tabs'
import Accordion from './Accordion'
const Style = () => {
  return (
    <>
    <div className="bg-[#E11D48] py-16 lg:py-24 dark:bg-[#881337]">
        <div className="container mt-20 mx-auto text-center px-4 lg:px-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
           Elements
          </h1>
          <p className="mx-auto text-lg mt-4 max-w-2xl text-[#FFE4E6] ">
           UI components and design system elements available in this template.
          </p>
          <nav className="mt-6 flex items-center justify-center gap-2 text-sm text-[#FECDD3]">
            <Link to="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Elements</span>
          </nav>
        </div>
      </div>
      <Typography />
      <Button />
      <Alert />
      <Cards />
      <FormElements />
      <Lists />
      <Table />
      <Tabs />
      <Accordion />
    </>
  )
}

export default Style
