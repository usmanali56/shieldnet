import React from 'react'
import { Link } from 'react-router-dom'

const TermsSection = () => {
  return (
    <div>
      <div className=" bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="container mx-auto max-w-4xl px-4 lg:px-8">
        <div className="prose max-w-none dark:prose-invert">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Last updated: February 24, 2026
          </p>
          <h2 className="mt-12 text-2xl font-bold text-gray-900 dark:text-white">
           1. Acceptance of Terms
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
           By accessing and using the ShieldNet platform and services, you accept and agree to be bound by these Terms of Service and our Privacy Policy.
            If you do not agree to these terms, please do not use our services.
          </p>
          

          {/* services section */}
          <h2 className="mt-12 text-2xl font-bold text-gray-900 dark:text-white">
           2. Description of Services
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
           ShieldNet provides cybersecurity services including but not limited to endpoint detection and response, 
           cloud security posture management, identity threat detection, 
           and managed detection and response services as described on our website.
          </p>
          {/* agreement section */}
          <h2 className="mt-12 text-2xl font-bold text-gray-900 dark:text-white">
           3. Service Level Agreement
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            ShieldNet commits to 99.99% platform uptime. Specific SLA terms, including response time guarantees and remediation commitments, are detailed in your individual service agreement.
          </p>

          {/* information section */}
          <h2 className="mt-12 text-2xl font-bold text-gray-900 dark:text-white">
           4. Contact Information
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            For questions about these Terms of Service, please contact us:
          </p>

          <div className="mt-4 w-full max-w-2xl rounded-xl border border-gray-200 bg-gray-50 p-15 dark:border-gray-800 dark:bg-gray-900">
            <p className="font-semibold  text-gray-900 dark:text-white">
              ShieldNet Legal
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
    </div>
  )
}

export default TermsSection
