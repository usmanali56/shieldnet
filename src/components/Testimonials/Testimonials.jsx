import React, { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    rating: 5,
    text: "“ShieldNet reduced our mean time to detect from hours to seconds. The AI-powered threat detection is genuinely game-changing for our security posture.”",
    initial: "M",
    name: "Marcus Chen",
    role: "CISO, Meridian Financial Group",
  },
  {
    id: 2,
    rating: 5,
    text: "“After deploying ShieldNet, we stopped a ransomware attack within 30 seconds of initial execution. The automated response saved us millions in potential damages.”",
    initial: "S",
    name: "Sarah Blackwell",
    role: "VP of Security, HealthCore Systems",
  },
  {
    id: 3,
    rating: 5,
    text: "“The unified platform approach eliminated our tool sprawl. One console for endpoints, cloud, and identity — it is exactly what our lean security team needed.”",
    initial: "J",
    name: "James Okafor",
    role: "Head of InfoSec, NovaTech Industries",
  },
  {
    id: 4,
    rating: 5,
    text: "“ShieldNet's threat intelligence feed is the most actionable we have ever used. It integrates seamlessly with our SIEM and accelerates our investigations tenfold.”",
    initial: "E",
    name: "Elena Petrova",
    role: "SOC Manager, Global Logistics Corp",
  },
  {
    id: 5,
    rating: 5,
    text: "“We evaluated five EDR platforms. ShieldNet won on detection accuracy, false positive rates, and the quality of their 24/7 managed detection service.”",
    initial: "D",
    name: "David Kim",
    role: "CISO, Pacific Retail Holdings",
  },
  {
    id: 6,
    rating: 5,
    text: "“The onboarding was remarkably smooth. ShieldNet's team had us fully deployed across 15,000 endpoints in under a week with zero production impact.”",
    initial: "R",
    name: "Rachel Torres",
    role: "Director of IT Security, Apex Manufacturing",
  },
];

export default function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleCards = isMobile ? 1 : 3;
  const totalPages = testimonials.length - visibleCards + 1;

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentPage, totalPages]);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full bg-[#fcfcfd] dark:bg-[#0f172a] py-16 px-4 select-none font-sans transition-colors duration-300 overflow-hidden">
      {/* Main Wrapper with Left/Right spacing for arrows */}
      <div className="max-w-[1400px] mx-auto relative flex items-center px-12">
        
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-0 z-20 flex items-center justify-center w-10 h-10 bg-white dark:bg-[#1e293b] border border-gray-100 dark:border-gray-800 rounded-full shadow-md text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-all focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Viewport Mask (Yahan padding bilkul zero kar di taake card poora fit ho) */}
        <div className="w-full overflow-hidden">
          {/* Sliding Track */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              width: `${(testimonials.length / visibleCards) * 100}%`,
              transform: `translateX(-${currentPage * (100 / testimonials.length)}%)`,
            }}
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
                style={{ width: `${100 / testimonials.length}%` }}
                className="flex-shrink-0 px-3 h-full"
              >
                <div className="bg-white dark:bg-[#1e293b] border border-[#f0f1f3] dark:border-gray-800 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)] flex flex-col justify-between min-h-[340px] h-full transition-colors duration-300">
                  <div>
                    {/* Stars */}
                    <div className="flex space-x-1 mb-6">
                      {[...Array(item.rating)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="#ff4769"
                          className="w-5 h-5"
                        >
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                        </svg>
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-[#0f172a] dark:text-[#f8fafc] text-[16px] font-normal leading-[1.6] tracking-wide mb-8 min-h-[110px]">
                      {item.text}
                    </p>
                  </div>

                  {/* Profile Block */}
                  <div className="flex items-center space-x-4 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-[#ffebee] dark:bg-[#881337] flex items-center justify-center text-[#ff4769] dark:text-[#fda4af] font-semibold text-lg flex-shrink-0">
                      {item.initial}
                    </div>
                    <div>
                      <h4 className="text-[#0f172a] dark:text-[#f8fafc] font-semibold text-[15px] leading-tight">
                        {item.name}
                      </h4>
                      <p className="text-[#64748b] dark:text-[#94a3b8] text-[13px] mt-0.5 font-normal">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-0 z-10 flex items-center justify-center w-10 h-10 bg-white dark:bg-[#1e293b] border border-gray-100 dark:border-gray-800 rounded-full shadow-md text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-all focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center items-center space-x-2 mt-10">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`transition-all duration-300 focus:outline-none ${
              currentPage === index
                ? "w-7 h-2 bg-[#ff4769] rounded-full"
                : "w-2 h-2 bg-[#cbd5e1] dark:bg-gray-700 rounded-full hover:bg-gray-400 dark:hover:bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}