import React from 'react'

const Typography = () => {
  return (
    <div className=' bg-white py-20 lg:py-28 dark:bg-gray-950'>
      <div className='container mx-auto max-w-5xl px-4 lg:px-8'>
<h2 className='text-2xl font-bold text-gray-900 dark:text-white'>Typography</h2>
<p className='mt-2 text-gray-600 dark:text-gray-400'>
    Heading levels, paragraph styles, and text treatments.
</p>
<div className='mt-8 space-y-6'>
<h1 className='text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white'>Heading 1 — The quick brown fox</h1>
<h2 className='text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white'>Heading 2 — The quick brown fox</h2>
<h3 className='text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white'>Heading 3 — The quick brown fox</h3>
<h4 className='text-xl font-bold text-gray-900 sm:text-2xl dark:text-white'>Heading 4 — The quick brown fox</h4>
<h5 className='text-lg font-bold text-gray-900 sm:text-xl dark:text-white'>Heading 5 — The quick brown fox</h5>
<h6 className='text-base font-bold text-gray-900 sm:text-lg dark:text-white'>Heading 6 — The quick brown fox</h6>
<hr className='border-gray-200 dark:border-gray-800' />
<p className='text-lg leading-relaxed text-gray-700 dark:text-gray-300'>
    <strong>Lead text.</strong>
     This is a lead paragraph with a larger font size, suitable for introductions and important callouts.
      It draws the reader's attention and sets the tone for the content that follows.
</p>
<p className='text-base leading-relaxed text-gray-600 dark:text-gray-400'>
    <strong>Body text.</strong>
     This is a standard paragraph used for body copy throughout the template
     . It uses the default font size and a comfortable line height for readability. 
     Good typography is the foundation of any well-designed interface,
      ensuring that users can easily consume and understand the content presented to them.
</p>
<p className='text-base leading-relaxed text-gray-600 dark:text-gray-400'>
    <strong>Small text.</strong>
     This is smaller text, useful for captions, footnotes, meta information,
      and secondary details that support the main content.
</p>
<blockquote className='border-l-4 border-[#E11D48] py-2 pl-6 italic text-gray-700 dark:border-[#FB7185] dark:text-gray-300'>

"Design is not just what it looks like and feels like. Design is how it works."
<span className='mt-2 block text-sm font-medium not-italic text-gray-500 dark:text-gray-400'>— Steve Jobs</span>
</blockquote>
</div>
<hr  className='my-16 border-gray-200 dark:border-gray-800'/>
      </div>
    </div>
  )
}

export default Typography
