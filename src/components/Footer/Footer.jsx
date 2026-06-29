import React from "react";
import { MdOutlinePhone } from "react-icons/md";
import { TiMessage } from "react-icons/ti";
import { CiLocationOn } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-900 pt-16 text-gray-300 lg:pt-24">
      <div className='class="container mx-auto px-4 lg:px-8"'>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand colums */}
          <div className="lg:col-span-4">
            <a href="" className="inline-block">
              <img
                src="https://shieldnet-colorlib.pages.dev/assets/img/logo-light.svg"
                alt=""
                className="h-10 w-auto"
              />
            </a>
            <p className="mt-4 max-w-xs text-gray-400">
              Advanced threat protection platform for modern teams. Detect,
              prevent, and respond to cyber threats in real time.
            </p>
            {/* contact info */}
            <div className="mt-6 space-y-3">
              <a
                href=""
                className="flex items-center gap-3 text-gray-400 transition-colors hover:text-white"
              >
                <MdOutlinePhone />
                (555) 567-8901
              </a>
              <a
                href=""
                className="flex items-center gap-3 text-gray-400 transition-colors hover:text-white"
              >
                <TiMessage />
                security@shieldnet.io
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <CiLocationOn />
                1200 Cyber Defense Blvd, Washington, DC 20001
              </div>
            </div>

            <div className="mt-6 flex gap-4">
              <Link
                to="/contact"
                className="rounded-lg bg-gray-800 p-2.5 text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
              >
                <FaXTwitter />
              </Link>
              <Link
                to="/contact"
                className="rounded-lg bg-gray-800 p-2.5 text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
              >
                <FaLinkedin />
              </Link>
              <Link
                to="/contact"
                className="rounded-lg bg-gray-800 p-2.5 text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
              >
                <FaGithub />
              </Link>
            </div>
          </div>

          {/* link colums */}
          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Resources
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    to="/solutions"
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    {" "}
                    Documentation{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/solutions"
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    {" "}
                    Security Blog{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/solutions"
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    {" "}
                    Threat Reports{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/solutions"
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    {" "}
                    Webinars{" "}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Resources
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    to="/blog"
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    Documentation{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    Security Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    Threat Reports
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    Webinars{" "}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Company
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    to="/about"
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    {" "}
                    About{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    {" "}
                    Careers{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    {" "}
                    Contact{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    {" "}
                    Partners{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* botttom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-800 py-8 sm:flex-row">
          <p className="text-sm text-gray-500">
            © 2026 ShieldNet. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href=""
              className="text-sm text-gray-500 transition-colors hover:text-gray-300"
            >
              Privacy Policy
            </a>
            <a
              href=""
              className="text-sm text-gray-500 transition-colors hover:text-gray-300"
            >
              Terms of Service
            </a>
            <a
              href=""
              className="text-sm text-gray-500 transition-colors hover:text-gray-300"
            >
              Style Guide
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
