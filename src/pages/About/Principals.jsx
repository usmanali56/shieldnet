import React from 'react'
import { IoShieldCheckmarkSharp } from "react-icons/io5";

const cards=[
    {
id:1,
icon:<IoShieldCheckmarkSharp />,
title:"Zero Trust Mindset",
desc:"We assume breach in everything we build. Every connection is verified, every action is monitored, and nothing is implicitly trusted."
    },
     {
id:2,
icon:<IoShieldCheckmarkSharp />,
title:"Radical Transparency",
desc:"We publish our detection methodologies, share threat research openly, and never hide behind security through obscurity."
    },
     {
id:3,
icon:<IoShieldCheckmarkSharp />,
title:"Relentless Innovation",
desc:"Our research team continuously develops new detection models, staying ahead of adversaries through AI-driven analysis and proactive threat hunting."
    },
]
const Principals = () => {
  return (
    <div className='bg-gray-50 py-20 lg:py-28 dark:bg-gray-900'>
      <div className='container mx-auto px-4 lg:px-8'>
<div className='mx-auto max-w-3xl text-center'>
<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white'>Our Principles</h2>
<p className='mt-4 text-lg text-gray-600 dark:text-gray-400'>
The core beliefs that drive our mission to protect the digital world.
</p>
</div>
<div className='mt-16 grid gap-8 sm:grid-cols-3'>
{
    cards.map((item,index)=>(
        <div key={index} className='rounded-2xl bg-white p-8 shadow-sm dark:bg-gray-800'>
<div className='mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFE4E6] text-[#E11D48] dark:bg-primary-[#88133750] dark:text-FB7185'>
{item.icon}
</div>
<h3 className='text-lg font-semibold text-gray-900 dark:text-white'>{item.title}</h3>
<p className='mt-2 text-gray-600 dark:text-gray-400'>{item.desc}</p>
        </div>
    ))
}
</div>
      </div>
    </div>
  )
}

export default Principals
