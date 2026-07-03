import React, { useState, useEffect, useRef } from 'react'

const useCounter = (target, duration = 2000, decimals = 0) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const steps = duration / 16;
          const increment = target / steps;
          const factor = Math.pow(10, decimals);
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start * factor) / factor);
            }
          }, 16);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration, decimals]);

  return { count, ref };
};

const CountSection = () => {
  const endpoints = useCounter(10);
  const events = useCounter(50);
  const falsePositive = useCounter(0.001, 2000, 3); // 3 decimal places
  const soc = useCounter(24);

  return (
    <div className='border-y border-gray-200 bg-gray-50 py-16 lg:py-20 dark:border-gray-800 dark:bg-gray-900'>
      <div className='container mx-auto px-4 lg:px-8'>
        <div className='grid grid-cols-2 gap-8 sm:grid-cols-4  text-center'>

          <div data-aos="fade-up" ref={endpoints.ref}>
            <div className='text-5xl font-bold text-[#E11D48] lg:text-5xl dark:text-[#fb7185]'>
              <span>{endpoints.count}M+</span>
            </div>
            <div className='mt-2 text-sm font-medium text-gray-600 dark:text-gray-400'>Endpoints Protected</div>
          </div>

          <div ref={events.ref}>
            <div data-aos="fade-up" className='text-5xl font-bold text-[#E11D48] lg:text-5xl dark:text-[#fb7185]'>
              <span>{events.count}M+</span>
            </div>
            <div className='mt-2 text-sm font-medium text-gray-600 dark:text-gray-400'>Events Analyzed Daily</div>
          </div>

          <div ref={falsePositive.ref}>
            <div data-aos="fade-up" className='text-5xl font-bold text-[#E11D48] lg:text-5xl dark:text-[#fb7185]'>
              <span>{falsePositive.count}%</span>
            </div>
            <div className='mt-2 text-sm font-medium text-gray-600 dark:text-gray-400'>False Positive Rate</div>
          </div>

          <div ref={soc.ref}>
            <div data-aos="fade-up" className='text-5xl font-bold text-[#E11D48] lg:text-5xl dark:text-[#fb7185]'>
              <span>{soc.count}/7</span>
            </div>
            <div className='mt-2 text-sm font-medium text-gray-600 dark:text-gray-400'>SOC Coverage</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CountSection