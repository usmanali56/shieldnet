import React from "react";
import { Link } from "react-router-dom";

const Secure = () => {
  return (
    <div className="bg-[#E11D48] py-16 lg:py-24 dark:bg-[#881337]">
      <div className="container mx-auto px-4 text-center lg:px-8">
        <h3 className="text-3xl font-bold text-white sm:text-4xl">
          Secure Your Organization Today
        </h3>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-[#FFE4E6]">
          Schedule a personalized demo and see how ShieldNet can protect your
          infrastructure from advanced threats.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-medium text-[#E11D48] shadow-lg transition-all hover:bg-gray-100"
        >
          Request Demo
        </Link>
      </div>
    </div>
  );
};

export default Secure;
