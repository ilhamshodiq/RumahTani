import React from 'react'

const ShowProduct = () => {
  return (
    <div>
      <div className='p-4'>
        <div className='flex justify-between items-center'>
          <h1 className='text-3xl my-8'>Product Details</h1>
        </div>
        <div className='w-full max-w-2xl mx-auto'>
          <div className='bg-white shadow-md rounded my-6'>
            <table className='w-full'>
              <tbody>
                <tr>
                  <td className='border px-4 py-2'>Name</td>
                  <td className='border px-4 py-2'>Product 1</td>
                </tr>
                <tr>
                  <td className='border px-4 py-2'>Price</td>
                  <td className='border px-4 py-2'>100</td>
                </tr>
                <tr>
                  <td className='border px-4 py-2'>Description</td>
                  <td className='border px-4 py-2'>Product 1 description</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    </div>
  </div>
  )
}

export default ShowProduct
