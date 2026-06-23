import React, { useEffect, useState } from 'react'

const Animate = () => {
    const words = ['Spread', 'Escalate', 'Damage'];
    const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <span className="text-[#E11D48] font-bold transition-all duration-300 animate-pulse">
      {words[currentIndex]}
    </span>
    </div>
  )
}

export default Animate
