import React from "react";
import Animate from "./Animate";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdOutlinePlayCircle } from "react-icons/md";
import hero from "../../assets/hero.png";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaExclamationTriangle } from "react-icons/fa";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { IoIosCheckmark } from "react-icons/io";

const HeroSection = () => {
  return (
    <section>
    <div className="container mx-auto px-4 py-24 lg:px-8 lg:py-32 bg-white dark:bg-[#030712] dark:bg-[radial-gradient(circle_at_bottom_left,_rgba(220,38,38,0.18),transparent_45%),radial-gradient(circle_at_top_right,_rgba(29,78,216,0.12),transparent_40%)]">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* left section */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-[#fff1f2] px-4 py-1.5 text-sm font-medium text-[#be123c] dark:border-primary-500/30 dark:bg-primary-500/10 dark:text-primary-300">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
            </span>
            Trusted by 2,000+ Security Teams Worldwide
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
            Stop Threats Before{" "}
            <span className="inline-flex items-center gap-2">
              They <Animate />
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-gray-600 dark:text-gray-200/80">
            ShieldNet delivers AI-powered threat detection, automated response,
            and continuous monitoring to protect your endpoints, cloud
            workloads, and identities — all from a single unified platform.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href=""
              className="inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-medium text-white shadow-lg transition-all hover:shadow-xl bg-[#E11b48] hover:bg-[#be123c]"
            >
              Start Free Trial <FaLongArrowAltRight />
            </a>
            <a
              href=""
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gray-300 px-8 py-4 text-base font-medium text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50 dark:border-white/20 dark:text-white dark:hover:border-white/40 dark:hover:bg-white/5"
            >
              <MdOutlinePlayCircle /> Watch Demo
            </a>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-2 gap-8 border-t border-gray-200 pt-10 sm:grid-cols-4 dark:border-white/10">
            <div>
              <div className="text-2xl font-bold text-[#e11d48] lg:text-3xl">
                10M+
              </div>
              <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Endpoints Protected
              </div>
              <div className="text-2xl font-bold text-[#e11d48] lg:text-3xl">
                10M+
              </div>
            </div>

            <div>
              <div className="text-2xl font-bold text-[#e11d48] lg:text-3xl">
                500B+
              </div>
              <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Events Analyzed
              </div>
            </div>

            <div>
              <div className="text-2xl font-bold text-[#e11d48] lg:text-3xl">
                0.001%
              </div>
              <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                False Positive Rate
              </div>
            </div>

            <div>
              <div className="text-2xl font-bold text-[#e11d48] lg:text-3xl">
                24/7
              </div>
              <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                SOC Coverage
              </div>
            </div>
          </div>
        </div>

        {/* right section */}
        <div className="relative hidden lg:block">
          <div className="rounded-2xl  border border-gray-200 bg-gray-900 p-6 shadow-2xl shadow-primary-900/10 dark:border-gray-800 dark:bg-gray-900/80 dark:shadow-primary-900/20 dark:backdrop-blur-sm">
            {/* dashboard */}
            <div className="flex items-center justify-between border-b border-gray-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600/20">
                  <HiOutlineShieldCheck className="text-[#fb7185] font-bold rounded-md bg-[#d38490]" />
                </div>
                <span className='class="text-sm font-semibold text-white'>
                  Threat Dashboard
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                <span className="text-xs text-green-400">
                  All Systems Protected
                </span>
              </div>
            </div>
            {/* threat */}
            <div className="mt-4 grid grid-cols-3 gap-4">
              <div className="rounded-lg bg-gray-800/50 p-3">
                <div className="text-xs text-gray-500">Threats Blocked</div>
                <div className="mt-1 text-xl font-bold text-white">2, 847</div>
                <div className="mt-1 flex items-center gap-1 text-xs text-green-400">
                  <FaLongArrowAltUp />
                  12% today
                </div>
              </div>
              <div className="rounded-lg bg-gray-800/50 p-3">
                <div className="text-xs text-gray-500">Active Endpoints</div>
                <div className="mt-1 text-xl font-bold text-white">14,329</div>
                <div className="mt-1 flex items-center gap-1 text-xs text-[#fb7185]">
                  <span className="flex h-1.5 w-1.5 rounded-full bg-[#fb7185]"></span>
                  All healthy
                </div>
              </div>

              <div className="rounded-lg bg-gray-800/50 p-3">
                <div className="text-xs text-gray-500">Risk Score</div>
                <div className="mt-1 text-xl font-bold text-green-400">Low</div>
                <div className="mt-1 text-xl  text-gray-500">Score: 12/100</div>
              </div>
            </div>
            {/* recents threats */}
            <div className="mt-4">
              <div className="text-xs font-medium text-gray-500">
                Recent Detections
              </div>
              <div className="mt-2 space-y-2">
                <div className="flex items-center justify-between rounded-lg bg-gray-800/50 px-3 py-2">
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded bg-red-500/20 text-xs text-red-400">
                      <FaExclamationTriangle />
                    </span>
                    <div>
                      <div className="text-xs font-medium text-white">
                        Ransomware attempt blocked
                      </div>
                      <div className="text-[10px] text-gray-500">
                        endpoint-ws042 · 2 min ago
                      </div>
                    </div>
                  </div>
                  <span className="rounded bg-red-500/20 px-1.5 py-0.5 text-[10px] font-medium text-red-400">
                    Critical
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-lg bg-gray-800/50 px-3 py-2">
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded bg-amber-500/20 text-xs text-amber-400">
                      <HiOutlineInformationCircle />
                    </span>
                    <div>
                      <div className="text-xs font-medium text-white">
                        Suspicious login from new location
                      </div>
                      <div className="text-[10px] text-gray-500">
                        user: j.smith · 8 min ago
                      </div>
                    </div>
                  </div>
                  <span className="rounded bg-amber-500/20 px-1.5 py-0.5 text-[10px] font-medium text-amber-400">
                    Medium
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-lg bg-gray-800/50 px-3 py-2">
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded bg-green-500/20 text-xs text-green-400">
                      <IoIosCheckmark />
                    </span>
                    <div>
                      <div className="text-xs font-medium text-white">
                        Vulnerability patched automatically
                      </div>
                      <div className="text-[10px] text-gray-500">
                        CVE-2026-1847 · 23 min ago
                      </div>
                    </div>
                  </div>
                  <span className="rounded bg-green-500/20 px-1.5 py-0.5 text-[10px] font-medium text-green-400">
                    Resolved
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default HeroSection;
