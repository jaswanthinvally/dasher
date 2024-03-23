import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-start'>

        <ul className='flex  justify-start flex-col'>
            <li className='text-lg font-bold'>dashboard</li>
            <li className='text-lg font-bold'>analatics</li>
            <li className='text-lg font-bold'>ads report</li>
            <li className='text-lg font-bold'>report</li>
        </ul>
    </div>
  )
}

export default Navbar