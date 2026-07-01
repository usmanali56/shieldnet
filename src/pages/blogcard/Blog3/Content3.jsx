import React from 'react'
import { FaXTwitter, FaFacebookF, FaLinkedinIn, FaLink } from "react-icons/fa6"
const Content3 = () => {
  return (
   <div className='bg-white pt-8 pb-20 dark:bg-gray-950'>
           <div className=' bg-white max-w-3xl mx-auto px-4 dark:bg-gray-950'>
       
             {/* Blog Content */}
             <div className=' text-gray-600 dark:text-gray-400 leading-relaxed mt-15'>
       
               <p className='mb-6'>
                Cloud misconfigurations remain the leading cause of cloud data breaches, 
                responsible for over 65% of incidents in 2025. As organizations accelerate their cloud adoption across AWS, Azure, and GCP,
                 the attack surface grows exponentially — and so does the risk of human error in configuration management.
               </p>
       
               <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-4 pt-6'>
                What is CSPM?
               </h2>
       <p className='mb-6'>
   Cloud Security Posture Management (CSPM) tools continuously monitor your cloud environments
    for misconfigurations, compliance violations, and security risks. They provide automated detection and remediation guidance,
    helping security teams maintain a strong security posture across complex multi-cloud deployments.
       </p>

       <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-4 pt-6'>
               Common Misconfigurations That Lead to Breaches
               </h2>
               <ul className='list-disc pl-5 mb-6 space-y-3'>
                 <li>
                   <span className='font-bold text-gray-900 dark:text-white'>Overly permissive IAM policies</span> 
                  
                  — Service accounts with admin-level access that violate least-privilege principles
                 </li>
                 <li>
                   <span className='font-bold text-gray-900 dark:text-white'>Public storage buckets </span> 
                  — S3 buckets, Azure Blob containers, or GCS buckets accidentally exposed to the internet
                 </li>
                 <li>
                   <span className='font-bold text-gray-900 dark:text-white'>Unencrypted data stores </span>
                   — Databases and storage volumes without encryption at rest or in transit
                 </li>
                 <li>
                   <span className='font-bold text-gray-900 dark:text-white'>Open security groups</span>
                  — Network rules that allow unrestricted inbound access on sensitive ports
                 </li>
                  <li>
                   <span className='font-bold text-gray-900 dark:text-white'>Missing logging and monitoring</span>
                   — CloudTrail, Azure Monitor, or GCP Audit Logs not enabled on critical resources
                 </li>
                 
               </ul>
       
               <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
                Implementing CSPM Effectively
               </h2>
       <p className='mb-6'>
          The key to successful CSPM implementation is treating it as a continuous process, 
          not a one-time audit. Start by establishing a baseline of your current cloud posture,
           prioritizing findings by risk severity, and integrating remediation into your existing DevOps workflows.
       </p>
       <p className='mb-6'>
Shift-left by embedding security checks into your infrastructure-as-code pipelines. 
Tools like Terraform plan scanning and CloudFormation template validation can catch misconfigurations before they ever reach production
. This preventive approach is far more effective than detecting and remediating issues after deployment.
       </p>
              
              
       <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-4 pt-6'>
                Compliance and Governance
               </h2>
       <p className='mb-6'>
   CSPM tools should map findings to relevant compliance frameworks automatically — whether that is SOC 2,
    HIPAA, PCI DSS, or CIS Benchmarks. This continuous compliance monitoring replaces painful
     point-in-time audits with real-time visibility into your compliance posture,
    making audit preparation straightforward and reducing the risk of compliance gaps.
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

export default Content3
