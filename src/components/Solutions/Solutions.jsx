import React from "react";
import { GoShieldCheck } from "react-icons/go";
import { MdCloudQueue } from "react-icons/md";
import { IoFingerPrint } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import { CiGlobe } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

const Solutions = () => {
  return (
    <div className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div  className="mx-auto max-w-3xl text-center">
          <div data-aos="fade-up" className="mb-4 inline-flex items-center rounded-full bg-[#f3cfcf] px-3 py-1 text-sm font-medium text-[#ff9898] dark:bg-[#ebabab] dark:text-[#f16363]">
            Solutions
          </div>
          <h2 data-aos="fade-up" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Complete Cyber Defense{" "}
          </h2>
          <p data-aos="fade-up" className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            From endpoint to cloud, our integrated security platform protects
            every layer of your digital infrastructure against advanced threats.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Endpoint Detection & Response */}
          <div data-aos="fade-up" className="group relative rounded-2xl bg-white p-8 shadow-md hover:shadow-xl transition-all dark:bg-gray-800 dark:shadow-gray-900/50">
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#dd9f9f] text-[#f13737] transition-colors group-hover:bg-[#fb4848] group-hover:text-white dark:bg-[#f88585] dark:text-[#e8b8b8]">
              <GoShieldCheck />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Endpoint Detection & Response
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              AI-powered EDR that detects and neutralizes threats on every
              endpoint in real time, with automated containment and forensic
              analysis.
            </p>
          </div>
          {/*   Cloud Security */}
          <div data-aos="fade-up" className="group relative rounded-2xl bg-white p-8 shadow-md hover:shadow-xl transition-all dark:bg-gray-800 dark:shadow-gray-900/50">
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#dd9f9f] text-[#f13737] transition-colors group-hover:bg-[#fb4848] group-hover:text-white dark:bg-[#f88585] dark:text-[#e8b8b8]">
              <MdCloudQueue />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Cloud Security
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Comprehensive cloud workload protection across AWS, Azure, and GCP
              with runtime visibility, misconfiguration detection, and
              compliance monitoring.
            </p>
          </div>

          {/*   Identity Protection   */}
          <div data-aos="fade-up" className="group relative rounded-2xl bg-white p-8 shadow-md hover:shadow-xl transition-all dark:bg-gray-800 dark:shadow-gray-900/50">
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#dd9f9f] text-[#f13737] transition-colors group-hover:bg-[#fb4848] group-hover:text-white dark:bg-[#f88585] dark:text-[#e8b8b8]">
              <IoFingerPrint />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Identity Protection
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Protect against identity-based attacks with behavioral analytics,
              MFA enforcement, and real-time detection of credential compromise.
            </p>
          </div>
          {/* Threat Intelligence */}
          <div data-aos="fade-up" className="group relative rounded-2xl bg-white p-8 shadow-md hover:shadow-xl transition-all dark:bg-gray-800 dark:shadow-gray-900/50">
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#dd9f9f] text-[#f13737] transition-colors group-hover:bg-[#fb4848] group-hover:text-white dark:bg-[#f88585] dark:text-[#e8b8b8]">
              <CiGlobe />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Threat Intelligence
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Curated threat intelligence from global sources, enriched with AI
              analysis to provide actionable insights and proactive defense
              strategies.
            </p>
          </div>
          {/*Vulnerability Management   */}
          <div data-aos="fade-up" className="group relative rounded-2xl bg-white p-8 shadow-md hover:shadow-xl transition-all dark:bg-gray-800 dark:shadow-gray-900/50">
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#dd9f9f] text-[#f13737] transition-colors group-hover:bg-[#fb4848] group-hover:text-white dark:bg-[#f88585] dark:text-[#e8b8b8]">
              <CiSearch />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Vulnerability Management
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Continuous vulnerability scanning and prioritized remediation
              across your entire attack surface, from code to cloud
              infrastructure
            </p>
          </div>

          {/* Incident Response
           */}
          <div data-aos="fade-up" className="group relative rounded-2xl bg-white p-8 shadow-md hover:shadow-xl transition-all dark:bg-gray-800 dark:shadow-gray-900/50">
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#dd9f9f] text-[#f13737] transition-colors group-hover:bg-[#fb4848] group-hover:text-white dark:bg-[#f88585] dark:text-[#e8b8b8]">
              <GoBell />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Incident Response
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              24/7 expert incident response team with automated playbooks,
              forensic investigation, and rapid containment capabilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
