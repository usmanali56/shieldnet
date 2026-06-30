import React from "react";
import { FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";

const Information = () => {
  return (
    <div className=" bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="container mx-auto max-w-4xl px-4 lg:px-8">
        <div className="prose max-w-none dark:prose-invert">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Last updated: February 24, 2026
          </p>
          <h2 className="mt-12 text-2xl font-bold text-gray-900 dark:text-white">
            1. Information We Collect
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            We collect information you provide directly to us, such as when you
            create an account, request a demo, or communicate with our security
            team. This may include:
          </p>
          <div className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
            <p className="flex items-start gap-2">
              <FiCheck className="mt-1.5 h-4 w-4 flex-shrink-0 text-[#E11D48]" />
              Name, email address, phone number, and company information
            </p>

            <p className="flex items-start gap-2">
              <FiCheck className="mt-1.5 h-4 w-4 flex-shrink-0 text-[#E11D48]" />
              Payment information and billing details
            </p>

            <p className="flex items-start gap-2">
              <FiCheck className="mt-1.5 h-4 w-4 flex-shrink-0 text-[#E11D48]" />
              Security telemetry data from protected endpoints
            </p>

            <p className="flex items-start gap-2">
              <FiCheck className="mt-1.5 h-4 w-4 flex-shrink-0 text-[#E11D48]" />
              Account preferences and communication choices
            </p>
          </div>

          {/* info section */}
          <h2 className="mt-12 text-2xl font-bold text-gray-900 dark:text-white">
            2. How We Use Your Information
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            We use the information we collect to provide, maintain, and improve
            our cybersecurity services, process transactions, and communicate
            with you about security events and product updates.
          </p>
          {/* security section */}
          <h2 className="mt-12 text-2xl font-bold text-gray-900 dark:text-white">
            3. Data Security
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            As a cybersecurity company, data security is at our core. We
            implement enterprise-grade encryption, strict access controls, and
            continuous monitoring to protect your information . All data is
            encrypted at rest and in transit using AES-256 and TLS 1.3.
          </p>

          {/* contact section */}
          <h2 className="mt-12 text-2xl font-bold text-gray-900 dark:text-white">
            4. Contact Us
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            For privacy-related questions, contact us:
          </p>

          <div className="mt-4 w-full max-w-2xl rounded-xl border border-gray-200 bg-gray-50 p-15 dark:border-gray-800 dark:bg-gray-900">
            <p className="font-semibold  text-gray-900 dark:text-white">
              ShieldNet Privacy Team
            </p>
            <p className="mt-1 text-gray-600 dark:text-gray-400 pt-4">
              Email:
              <Link
                to="/contact"
                className=" text-[#E11D48] hover:text-[#BE123C] dark:text-[#FB7185] dark:hover:text-[#FDA4AF]"
              >
                Contact us here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
