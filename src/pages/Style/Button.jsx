import React from "react";

const Button = () => {
  return (
    <div className="bg-white pb-20 lg:pb-28 dark:bg-gray-950">
      <div className="container mt-[-130px] mx-auto max-w-5xl px-4 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Buttons
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Primary, secondary, and outline button styles in various sizes.
        </p>
        <div className="mt-8 space-y-8">
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Variants
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <button className="rounded-lg bg-[#E11D48] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#BE123C] focus:outline-none focus:ring-2 focus:ring-[#E11D48] focus:ring-offset-2">
                Primary
              </button>
              <button className="rounded-lg bg-gray-200 px-6 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
                Scondary
              </button>
              <button className="rounded-lg border border-[#E11D48] px-6 py-3 text-sm font-semibold text-[#E11D48] transition-colors hover:bg-[#FFF1F2] dark:border-primary-400 dark:text-[#FB7185] dark:hover:bg-[#4C0519]">
                OUTLINE
              </button>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              SIZE
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <button className="rounded-lg bg-[#E11D48] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#BE123C]">
                Small
              </button>
              <button className="rounded-lg bg-[#E11D48] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#BE123C]">
                Default
              </button>
              <button className="rounded-lg bg-[#E11D48] px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-[#BE123C]">
                Large
              </button>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              DISABLED
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <button className="cursor-not-allowed rounded-lg bg-[#E11D48] px-6 py-3 text-sm font-semibold text-white opacity-50">
                Primary Disabled
              </button>
              <button className="cursor-not-allowed rounded-lg bg-gray-200 px-6 py-3 text-sm font-semibold text-gray-900 opacity-50 dark:bg-gray-700 dark:text-white">
                Secondary Disabled
              </button>
              <button className="cursor-not-allowed rounded-lg border border-[#E11D48] px-6 py-3 text-sm font-semibold text-[#E11D48] opacity-50 dark:border-[#FB7185] dark:text-[#FB7185]">
                Outline Disabled
              </button>
            </div>
          </div>
        </div>
        <hr className="my-16 border-gray-200 dark:border-gray-800" />

        {/* Bades */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Badges & Tags
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Colored labels for statuses, categories, and metadata.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-[#FFE4E6] px-3 py-1 text-sm font-medium text-[#BE123C] dark:bg-[#4C0519] dark:text-[#FDA4AF]">
            Primary
          </span>
          <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700 dark:bg-green-900/50 dark:text-green-300">
            Success
          </span>
          <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-700 dark:bg-amber-900/50 dark:text-amber-300">
            Warning
          </span>
          <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700 dark:bg-red-900/50 dark:text-red-300">
            Error
          </span>
          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
            Info
          </span>
          <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
            Neutral
          </span>
        </div>
        <hr className="my-16 border-gray-200 dark:border-gray-800" />
      </div>
    </div>
  );
};

export default Button;
