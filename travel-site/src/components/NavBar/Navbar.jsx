import React from 'react'
import Logo from './Logo'
import Favourite from './Favourite'

const navItems = ['Home','Top Destination','Catogories','About Us']
function Navbar() {
  return (
    <div className='flex justify-between  bg-purple-300'>
      <Logo>Kumari Travel</Logo>
      <ul className='md:flex md:space-x-3 hidden'>
        {navItems.map(item=>(
          <li key={item}>{item}</li>
        ))}
      </ul> 
      <Favourite />
    </div>
    
  )
}

export default Navbar
