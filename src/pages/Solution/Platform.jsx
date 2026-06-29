import React from "react";
import { FiCloud, FiUser, FiGlobe, FiSearch, FiBell } from "react-icons/fi";
import { IoShieldCheckmark } from "react-icons/io5";

const solutions = [
  {
    icon: <IoShieldCheckmark />,
    title: "Endpoint Detection & Response",
    desc: "Next-gen EDR with AI behavioral analysis that stops ransomware, fileless malware, and zero-day exploits in real time.",
    features: [
      "Real-time behavioral AI detection",
      "Automated threat containment",
      "Full forensic timeline & root cause analysis",
    ],
  },
  {
    icon: <FiCloud />,
    title: "Cloud Security Posture",
    desc: "Continuous visibility and protection for your multi-cloud environments, containers, and serverless workloads.",
    features: [
      "Multi-cloud asset discovery",
      "Misconfiguration detection",
      "Runtime workload protection",
    ],
  },
  {
    icon: <FiUser />,
    title: "Identity Threat Detection",
    desc: "Protect the identity layer against credential theft, privilege escalation, and lateral movement attacks.",
    features: [
      "Behavioral identity analytics",
      "Compromised credential detection",
      "Privileged access monitoring",
    ],
  },
  {
    icon: <FiGlobe />,
    title: "Threat Intelligence Platform",
    desc: "Actionable threat intelligence from global sources, enriched by AI and delivered directly into your security workflows.",
    features: [
      "Real-time threat feeds",
      " Adversary tracking & attribution",
      "MITRE ATT&CK mapping",
    ],
  },
  {
    icon: <FiSearch />,
    title: "Vulnerability Management",
    desc: "Continuous vulnerability assessment with risk-based prioritization and guided remediation workflows.",
    features: [
      "Agent-based & agentless scanning",
      "Risk-based prioritization",
      "Patch management integration",
    ],
  },
  {
    icon: <FiBell />,
    title: "Managed Detection & Response",
    desc: "24/7 expert-led threat monitoring, investigation, and response for organizations that need dedicated security coverage.",
    features: [
      "24/7/365 SOC monitoring",
      " Expert threat investigation",
      "Guaranteed response SLAs",
    ],
  },
];
const Platform = () => {
  return (
    <div className="py-20 lg:py-28  bg-white dark:bg-[#0a0a0f]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl dark:text-white">
            Our Security Platform
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            A unified platform that covers every layer of your digital
            infrastructure with AI-powered detection and automated response.
          </p>
        </div>
        <div className="min-h-screen py-20 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 dark:border-gray-800 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:hover:bg-gray-900 "
                >
                  {/* Icon */}
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-xl flex items-center justify-center text-[#E11D48] text-xl mb-4">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {item.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                      >
                        <span className="text-[#E11D48]">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
