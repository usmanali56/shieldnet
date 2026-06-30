import React from 'react'
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaRegCircleCheck } from "react-icons/fa6";
import { CiWarning } from "react-icons/ci";
import { VscError } from "react-icons/vsc";

const Alert = () => {
  return (
    <div className='bg-white pb-20 lg:pb-28 dark:bg-gray-950'>
      <div className='container mt-[-130px] mx-auto max-w-5xl px-4 lg:px-8'>
<h2 className='text-2xl font-bold text-gray-900 dark:text-white'>Alerts / Notices</h2>
<p className='mt-2 text-gray-600 dark:text-gray-400'>
    Contextual feedback messages for user actions and system states.
</p>
<div className='mt-8 space-y-4'>
{/* info alert */}
<div className='flex gap-4 rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20'>
<div className='shrink-0'>
<IoMdInformationCircleOutline className='h-5 w-5 text-blue-600 dark:text-blue-400' />

</div>
<div>
    <h4 className='text-sm font-semibold text-blue-800 dark:text-blue-300'>Information</h4>
    <p className='mt-1 text-sm text-blue-700 dark:text-blue-400'>
This is an informational alert. Use it to highlight neutral tips or contextual information for the user.
    </p>
</div>
</div>
{/* success alert */}
<div className='flex gap-4 rounded-lg border-l-4 border-green-500 bg-green-50 p-4 dark:bg-green-900/20'>
<div className='shrink-0'>
<FaRegCircleCheck className='h-5 w-5 text-green-600 dark:text-green-400' />

</div>
<div>
    <h4 className='text-sm font-semibold text-green-800 dark:text-green-300'>Success</h4>
    <p className='mt-1 text-sm text-green-700 dark:text-green-400'>
Your action has been completed successfully. Everything is working as expected.
    </p>
</div>
</div>
{/* warning alert */}
<div className='flex gap-4 rounded-lg border-l-4 border-orange-500 bg-orange-50 p-4 dark:bg-orange-900/20'>
<div className='shrink-0'>
<CiWarning className='h-5 w-5 text-orange-600 dark:text-orange-400' />

</div>
<div>
    <h4 className='text-sm font-semibold text-orange-800 dark:text-orange-300'>Warning</h4>
    <p className='mt-1 text-sm text-orange-700 dark:text-orange-400'>
Please review the details carefully. This action may have unintended consequences if not properly configured.
    </p>
</div>
</div>

{/* error alert */}
<div className='flex gap-4 rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-blue-900/20'>
<div className='shrink-0'>
<VscError className='h-5 w-5 text-red-600 dark:text-red-400' />

</div>
<div>
    <h4 className='text-sm font-semibold text-red-800 dark:text-blue-300'>Error</h4>
    <p className='mt-1 text-sm text-red-700 dark:text-red-400'>
Something went wrong. Please check the form fields and try again, or contact support if the issue persists.
    </p>
</div>
</div>
</div>

<hr  className='my-16 border-gray-200 dark:border-gray-800'/>
      </div>
    </div>
  )
}

export default Alert
