import React from "react";

const Plan = () => {
  return (
    <div className="bg-[#E11D48] py-16 lg:py-24 dark:bg-[#4C0519]">
      <div className="container mx-auto px-4 text-center lg:px-8">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Not Sure Which Plan?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100">
          Our security consultants can assess your needs and recommend the right
          level of protection. Schedule a free consultation today.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href=""
            className="inline-flex items-center rounded-full bg-white px-8 py-3 font-medium text-[#E11D48] shadow-lg transition-colors hover:bg-gray-100"
          >
            Talk to Sales
          </a>
          <a
            href=""
            className="inline-flex items-center rounded-full border-2 border-white/30 px-8 py-3 font-medium text-white transition-colors hover:bg-white/10"
          >
            Call (555) 567-8901
          </a>
        </div>
      </div>
    </div>
  );
};

export default Plan;
