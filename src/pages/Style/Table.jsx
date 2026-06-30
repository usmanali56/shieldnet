import React from 'react'

const plansData = [
  {
    plan: 'Starter',
    price: '$9/mo',
    features: '5 pages, basic support',
    status: 'Active',
  },
  {
    plan: 'Professional',
    price: '$29/mo',
    features: '25 pages, priority support',
    status: 'Active',
  },
  {
    plan: 'Enterprise',
    price: '$99/mo',
    features: 'Unlimited pages, 24/7 support',
    status: 'Pending',
  },
]

const Table = () => {
  return (
    <div className='bg-white pb-20 lg:pb-28 dark:bg-gray-950'>
      <div className='container mt-[-130px] mx-auto max-w-5xl px-4 lg:px-8'>

        {/* Heading */}
        <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>Tables</h2>
        <p className='mt-2 text-gray-600 dark:text-gray-400'>
          Structured data display with striped rows and responsive layout.
        </p>

        {/* Table */}
        <div className='mt-8 overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800'>
          <table className='w-full text-left'>
            <thead className='bg-gray-50 dark:bg-gray-900'>
              <tr>
                <th className='px-6 py-4 text-sm font-bold text-gray-900 dark:text-white'>Plan</th>
                <th className='px-6 py-4 text-sm font-bold text-gray-900 dark:text-white'>Price</th>
                <th className='px-6 py-4 text-sm font-bold text-gray-900 dark:text-white'>Features</th>
                <th className='px-6 py-4 text-sm font-bold text-gray-900 dark:text-white'>Status</th>
              </tr>
            </thead>
            <tbody>
              {plansData.map((item, index) => (
                <tr
                  key={index}
                  className={`border-t border-gray-100 dark:border-gray-800 ${
                    index % 2 === 1 ? 'bg-gray-50 dark:bg-gray-900/50' : 'bg-white dark:bg-gray-950'
                  }`}
                >
                  <td className='px-6 py-4 text-sm font-medium text-gray-900 dark:text-white'>{item.plan}</td>
                  <td className='px-6 py-4 text-sm text-gray-600 dark:text-gray-400'>{item.price}</td>
                  <td className='px-6 py-4 text-sm text-gray-600 dark:text-gray-400'>{item.features}</td>
                  <td className='px-6 py-4'>
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                        item.status === 'Active'
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                          : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
<hr  className='my-16 border-gray-200 dark:border-gray-800'/>
      </div>
    </div>
  )
}

export default Table