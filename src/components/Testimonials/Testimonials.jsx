import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const testimonials = [
  {
    initial: 'M',
    name: 'Marcus Chen',
    role: 'CISO, Meridian Financial Group',
    text: 'ShieldNet reduced our mean time to detect from hours to seconds. The AI-powered threat detection is genuinely game-changing for our security posture.',
  },
  {
    initial: 'S',
    name: 'Sarah Blackwell',
    role: 'VP of Security, HealthCore Systems',
    text: 'After deploying ShieldNet, we stopped a ransomware attack within 30 seconds of initial execution. The automated response saved us millions in potential damages.',
  },
  {
    initial: 'J',
    name: 'James Okafor',
    role: 'Head of InfoSec, NovaTech Industries',
    text: 'The unified platform approach eliminated our tool sprawl. One console for endpoints, cloud, and identity — it is exactly what our lean security team needed.',
  },
  {
    initial: 'E',
    name: 'Elena Petrova',
    role: 'SOC Manager, Global Logistics Corp',
    text: "ShieldNet's threat intelligence feed is the most actionable we have ever used. It integrates seamlessly with our SIEM and accelerates our investigations tenfold.",
  },
  {
    initial: 'D',
    name: 'David Kim',
    role: 'CISO, Pacific Retail Holdings',
    text: 'We evaluated five EDR platforms. ShieldNet won on detection accuracy, false positive rates, and the quality of their 24/7 managed detection service.',
  },
  {
    initial: 'R',
    name: 'Rachel Torres',
    role: 'Director of IT Security, Apex Manufacturing',
    text: "The onboarding was remarkably smooth. ShieldNet's team had us fully deployed across 15,000 endpoints in under a week with zero production impact.",
  },
];

const Stars = () => (
  <div className='flex gap-1 mb-4'>
    {[...Array(5)].map((_, i) => (
      <svg key={i} className='w-5 h-5 text-[#e11d48]' fill='currentColor' viewBox='0 0 20 20'>
        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <div className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className='container mx-auto px-4 lg:px-8'>

        <div className='mx-auto max-w-3xl text-center'>
          <div className='mb-4 inline-flex items-center rounded-full bg-[#ffe4e6] px-3 py-1 text-sm font-medium text-[#e11d48] dark:bg-pink-900/30 dark:text-[#fb7185]'>
            Testimonials
          </div>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white'>
            Trusted by Security Leaders
          </h2>
          <p className='mt-4 text-lg text-gray-600 dark:text-gray-400'>
            See why CISOs and security teams across industries choose ShieldNet to protect their organizations.
          </p>
        </div>

        {/* slider */}
        <div className='testimonial-slider relative mt-16 px-10 testimonial-slider '>
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className='pb-10'
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i} className='h-auto'>
                <div className='rounded-2xl bg-white p-8 shadow-md hover:shadow-xl transition-all h-full flex flex-col dark:bg-gray-800'>
                  <Stars />
                  <p className='text-gray-600 dark:text-gray-300 leading-relaxed flex-1'>
                    "{t.text}"
                  </p>
                  <div className='mt-6 flex items-center gap-3'>
                    <div className='flex h-10 w-10 items-center justify-center rounded-full bg-[#e11d48] text-white font-semibold text-sm'>
                      {t.initial}
                    </div>
                    <div>
                      <div className='font-semibold text-gray-900 dark:text-white'>{t.name}</div>
                      <div className='text-sm text-gray-500 dark:text-gray-400'>{t.role}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </div>
  );
};

export default Testimonials;