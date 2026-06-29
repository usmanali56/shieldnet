import React from 'react'
import img3 from '../../assets/img3.jpeg'
import img4 from '../../assets/img4.jpeg'
import img5 from '../../assets/img5.jpeg'
import img6 from '../../assets/img6.jpeg'

const team = [
  {
    id: 1,
    img: img3,
    name: "Alex Mercer",
    title: "CEO & Co-Founder"
  },
  {
    id: 2,
    img: img4,
    name: "Dr. Priya Sharma",
    title: "CTO & Co-Founder"
  },
  {
    id: 3,
    img: img5,
    name: "Colonel James Wright (Ret.)",
    title: "VP of Threat Intelligence"
  },
  {
    id: 4,
    img: img6,
    name: "Maya Rodriguez",
    title: "VP of Engineering"
  },
]

const Team = () => {
  return (
    <div className=' bg-gray-50 py-20 lg:py-28 dark:bg-gray-900'>
      <div className='container mx-auto px-4 lg:px-8'>

        {/* Heading */}
        <div className='mx-auto max-w-3xl text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white'>
            Leadership Team
          </h2>
          <p className='mt-4 text-lg text-gray-600 dark:text-gray-400'>
            Security veterans building the future of cyber defense.
          </p>
        </div>

        {/* Team Grid */}
        <div className='mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
          {team.map((item, index) => (
            <div key={index} className='text-center'>

              {/* Image */}
              <div className='mx-auto h-40 w-40 overflow-hidden rounded-full'>
                <img
                  src={item.img}
                  alt={item.name}
                  className='h-full w-full object-cover'
                />
              </div>

              {/* Name & Title */}
              <h3 className='mt-4 text-lg font-semibold text-gray-900 dark:text-white'>
                {item.name}
              </h3>
              <p className='text-sm text-gray-600 dark:text-gray-400'>
                {item.title}
              </p>

            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Team