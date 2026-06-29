import React from "react";
const protection = [
  {
    id: 1,
    num: 1,
    title: "Deploy",
    desc: "Install our lightweight agent or connect via API. No reboots, no downtime, full coverage in under 24 hours.",
  },
  {
    id: 2,
    num: 2,
    title: "Discover",
    desc: "Automatic asset discovery maps your entire attack surface across endpoints, cloud, and identity systems.",
  },
  {
    id: 3,
    num: 3,
    title: "Detect",
    desc: "AI behavioral models analyze billions of events in real time, identifying threats with industry-leading accuracy.",
  },
  {
    id: 4,
    num: 4,
    title: "Defend",
    desc: "Automated response playbooks contain threats instantly while our SOC team investigates and remediates.",
  },
];
const Protection = () => {
  return (
    <div className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            From deployment to protection in four straightforward steps.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {protection.map((item, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#E11D48] text-lg font-bold text-white">
                {item.num}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Protection;
