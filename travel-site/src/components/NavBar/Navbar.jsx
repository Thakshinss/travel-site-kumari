import React from 'react'
import Logo from './Logo'
import Favourite from './Favourite'
import Button from '../../ui/Button/Button'

const navItems = ['Home','Top Destination','Catogories','About Us']
function Navbar() {
  return (
    <div className='flex justify-between'>
      <Logo>Kumari Travel</Logo>
      <ul className='md:flex md:space-x-10 hidden text-base font-normal'>
        {navItems.map(item=>(
          <li className=' text-slate-700 hover:text-slate-800 hover:text-xl duration-75' key={item}>{item}</li>
        ))}
      </ul> 
      <Button>Favourite</Button>
    </div>
    
  )
}

export default Navbar
