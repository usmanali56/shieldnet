import React from 'react'
import { FaXTwitter, FaFacebookF, FaLinkedinIn, FaLink } from "react-icons/fa6"

const Content = () => {
  return (
    <div className='bg-white pt-8 pb-20 dark:bg-gray-950'>
    <div className=' bg-white max-w-3xl mx-auto px-4 dark:bg-gray-950'>

      {/* Blog Content */}
      <div className=' text-gray-600 dark:text-gray-400 leading-relaxed mt-15'>

        <p className='mb-6'>
          Zero trust is no longer a buzzword — it is the foundational security model for every
          modern organization. The principle is simple: never trust, always verify. But
          implementing it correctly requires a strategic approach that goes far beyond deploying
          a single product.
        </p>

        <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-4 pt-6'>
          Core Principles of Zero Trust
        </h2>

        <ul className='list-disc pl-5 mb-6 space-y-3'>
          <li>
            <span className='font-bold text-gray-900 dark:text-white'>Verify Explicitly:</span> Always
            authenticate and authorize based on all available data points, including user identity,
            location, device health, service or workload, data classification, and anomalies.
          </li>
          <li>
            <span className='font-bold text-gray-900 dark:text-white'>Least Privilege Access:</span> Limit
            user access with just-in-time and just-enough-access (JIT/JEA), risk-based adaptive
            policies, and data protection.
          </li>
          <li>
            <span className='font-bold text-gray-900 dark:text-white'>Assume Breach:</span> Minimize
            blast radius and segment access. Verify end-to-end encryption, use analytics to get
            visibility, and drive threat detection and improve defenses.
          </li>
        </ul>

        <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
          Building Your Zero Trust Framework
        </h2>

        <p className='mb-6'>
          The journey to zero trust starts with understanding your protect surface — the critical
          data, applications, assets, and services (DAAS) that matter most. Unlike the attack
          surface, which is vast and constantly expanding, the protect surface is finite and
          knowable.
        </p>

        <p className='mb-6'>
          Start by mapping your transaction flows to understand how traffic moves across your
          network. This visibility is essential for creating micro-segmentation policies that
          enforce least-privilege access at every layer.
        </p>

        <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
          Identity as the New Perimeter
        </h2>

        <p className='mb-6'>
          In a zero trust model, identity replaces the network as the primary security perimeter.
          This means investing in strong identity verification through multi-factor authentication,
          continuous validation, and behavioral analytics that can detect compromised credentials
          even when the attacker has valid passwords.
        </p>

        <p className='mb-6'>
          Modern identity threat detection platforms analyze login patterns, device fingerprints,
          and behavioral baselines to flag anomalous access attempts in real time — often catching
          attacks that traditional perimeter defenses miss entirely.
        </p>

        <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
          Practical Implementation Steps
        </h2>

        <ol className='list-decimal pl-5 mb-6 space-y-2'>
          <li>
            <span className='font-bold text-gray-900 dark:text-white'>Audit your current state</span> — Map
            all users, devices, applications, and data flows
          </li>
          <li>
            <span className='font-bold text-gray-900 dark:text-white'>Define your protect surface</span> — Identify
            your most critical assets
          </li>
          <li>
            <span className='font-bold text-gray-900 dark:text-white'>Map transaction flows</span> — Understand
            how data moves through your environment
          </li>
          <li>
            <span className='font-bold text-gray-900 dark:text-white'>Architect zero trust policies</span> — Create
            micro-segmentation rules
          </li>
          <li>
            <span className='font-bold text-gray-900 dark:text-white'>Monitor and maintain</span> — Continuously
            validate and adapt policies
          </li>
        </ol>

        <p>
          Zero trust is not a destination but a continuous journey. As your organization evolves
          and new threats emerge, your zero trust architecture must adapt. The key is starting
          with a clear strategy and building incrementally, securing your most critical assets
          first.
        </p>

      </div>

      {/* Divider */}
      <hr className='my-10 border-gray-200 dark:border-gray-800' />

      {/* Share this article */}
      <div>
        <p className='text-sm font-medium text-gray-900 dark:text-white mb-4'>
          Share this article
        </p>
        <div className='flex items-center gap-3 m-0 p-0'>
          <button type='button' className='h-9 w-9 m-0 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-[#1DA1F2] hover:text-white dark:bg-gray-800 dark:text-gray-300 transition-colors duration-200'>
            <FaXTwitter className='h-4 w-4' />
          </button>
          <button type='button' className='h-9 w-9 m-0 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-[#1877F2] hover:text-white dark:bg-gray-800 dark:text-gray-300 transition-colors duration-200'>
            <FaFacebookF className='h-4 w-4' />
          </button>
          <button type='button' className='h-9 w-9 m-0 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-[#096ff5] hover:text-white dark:bg-gray-800 dark:text-gray-300 transition-colors duration-200'>
            <FaLinkedinIn className='h-4 w-4' />
          </button>
          <button type='button' className='h-9 w-9 m-0 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors'>
            <FaLink className='h-4 w-4' />
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Content