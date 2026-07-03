import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll detect karo
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Top pe scroll karo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-rose-700 hover:bg-rose-800 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </>
  );
}

export default ScrollToTopButton;