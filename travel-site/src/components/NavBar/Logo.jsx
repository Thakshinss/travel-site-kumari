import React from 'react'

function Logo({children}) {
  return (
    <h1 className='font-normal text-2xl tracking-tighter'>
        {children}
    </h1>
  )
}

export default Logo
