import { FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function StickyCTA() {
  return (
    <div
      id="mobile-cta"
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-gray-200 bg-white p-3 shadow-lg lg:hidden dark:border-gray-800 dark:bg-gray-900"
    >
      <div className="flex gap-3">
        
         <Link to="tel:5555678901"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gray-100 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
        >
          <FiPhone className="h-4 w-4" />
          Talk to Expert
        </Link>

        
         <Link to="/pricing"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#e11d48] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#be123c]"
        >
          Get Protected
        </Link>
      </div>
    </div>
  );
}