import React from 'react'

function Button({children}) {
  return (
    <button className='bg-blue-950 p-1 px-4 rounded-lg hover:bg-blue-800 text-gray-200'>{children}</button>
  )
}

export default Button