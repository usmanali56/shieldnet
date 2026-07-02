import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlinePhone } from "react-icons/md";

const Secure = () => {
  return (
    <div className='relative overflow-hidden bg-gradient-to-br from-[#c1193a] via-[#d01f42] to-[#a8152f] py-14 lg:py-16'>
      <div className='absolute inset-0 z-0 overflow-hidden'>
        <div className='absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl'></div>
        <div className='absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl'></div>

        {/* + pattern */}
        <div
          className='absolute inset-0 opacity-10'
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Crect x='19' y='10' width='2' height='20'/%3E%3Crect x='10' y='19' width='20' height='2'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      <div className='container relative z-10 mx-auto px-4 lg:px-8'>
        <div className='mx-auto max-w-3xl text-center'>
          <h2 data-aos="fade-up"  className='text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl'>
            Ready to Secure Your Organization?
          </h2>
          <p data-aos="fade-up"  className='mx-auto mt-4 max-w-xl text-lg text-white/80'>
            Join thousands of security teams who trust ShieldNet to protect their most critical assets. Start your free trial today.
          </p>
          <div className='mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row'>
            <a  data-aos="fade-up" href="#Security" className='inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-3 text-base font-medium text-[#c1193a] shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl'>
              Start Free Trial
              <FaArrowRightLong className='h-5 w-5' />
            </a>
            <a  data-aos="fade-up" href="" className='inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-8 py-3 text-base font-medium text-white transition-all hover:border-white hover:bg-white/10'>
              Talk to Expert
              <MdOutlinePhone className='h-5 w-5' />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Secure