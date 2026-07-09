import React from "react";
import { FiCheck, FiX } from "react-icons/fi";

const plans = [
  {
    name: "Essentials",
    desc: "Core endpoint protection",
    price: "$12",
    period: "per endpoint/mo",
    btn: "Start Free Trial",
    popular: false,
    features: [
      { text: "Next-gen antivirus (NGAV)", included: true },
      { text: "Endpoint detection & response", included: true },
      { text: "USB device control", included: true },
      { text: "Threat intelligence feeds", included: true },
      { text: "7-day data retention", included: true },
      { text: "24/7 managed detection", included: false },
    ],
  },
  {
    name: "Advanced",
    desc: "Full platform protection",
    price: "$25",
    period: "per endpoint/mo",
    btn: "Start Free Trial",
    popular: true,
    features: [
      { text: "Everything in Essentials", included: true },
      { text: "Cloud security posture management", included: true },
      { text: "Identity threat detection", included: true },
      { text: "Vulnerability management", included: true },
      { text: "30-day data retention", included: true },
      { text: "24/7 managed detection & response", included: true },
    ],
  },
  {
    name: "Enterprise",
    desc: "Complete cyber defense",
    price: "Custom",
    period: "Tailored pricing",
    btn: "Contact Sales",
    popular: false,
    features: [
      { text: "Everything in Advanced", included: true },
      { text: "Dedicated threat hunting team", included: true },
      { text: "Custom detection rules", included: true },
      { text: "SIEM & SOAR integration", included: true },
      { text: "Unlimited data retention", included: true },
      { text: "Dedicated customer success manager", included: true },
    ],
  },
];

const PricingCard = () => {
  return (
    <div className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="mb-4 inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-[#E11D48] dark:bg-red-900/20 dark:text-red-400">
            Pricing
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Protection That Scales
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Choose the plan that matches your security needs. All plans include
            our core detection engine with AI-powered behavioral analysis.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 items-center max-w-9xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 flex flex-col gap-6
                ${
                  plan.popular
                    ? "bg-white dark:bg-gray-800 border-2 border-[#E11D48] scale-105 shadow-xl"
                    : "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm"
                }`}
            >
              {/* Most Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[#E11D48] text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {plan.desc}
                </p>
              </div>

              {/* Price */}
              <div className="text-center">
                <span className="text-5xl font-bold text-gray-900 dark:text-white">
                  {plan.price}
                </span>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {plan.period}
                </p>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    {feature.included ? (
                      <FiCheck className="text-[#E11D48] flex-shrink-0" />
                    ) : (
                      <FiX className="text-gray-400 dark:text-gray-600 flex-shrink-0" />
                    )}
                    <span
                      className={`text-sm ${
                        feature.included
                          ? "text-gray-700 dark:text-gray-300"
                          : "text-gray-400 dark:text-gray-600"
                      }`}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                className={`w-full py-3 rounded-xl font-medium text-sm transition-all
                  ${
                    plan.popular
                      ? "bg-[#E11D48] text-white hover:bg-[#be123c]"
                      : "bg-gray-100 dark:bg-[#1e1e2e] text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-[#2a2a3e] border border-gray-300 dark:border-gray-700"
                  }`}
              >
                {plan.btn}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="text-center text-sm text-gray-500 dark:text-gray-500 mt-16">
          All prices are per endpoint per month, billed annually. Volume
          discounts available for 1,000+ endpoints. Contact us for a custom
          quote.
        </p>
      </div>
    </div>
  );
};

export default PricingCard;
