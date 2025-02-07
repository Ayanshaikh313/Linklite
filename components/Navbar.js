import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='h-16 color1 flex md:justify-between justify-around px-3 md:gap-0 gap-3 items-center md:w-full w-[70vh]  text-white '>
      <div className="logo font-bold md:text-2xl text-base"> 
        <Link href="/">LinkLite</Link>
      </div>
      <ul className='flex justify-center md:gap-4 gap-2 items-center '>
        <Link href="/"><li className='shadow-md'>Home</li></Link>
        <Link href="/about"><li className='shadow-md'>About</li></Link>
        <Link href="/shorten"><li className='shadow-md'>Shorten</li></Link>
        <Link href="/contact"><li className='shadow-md'>Contact Us</li></Link>
        <li className='flex gap-3'>
          <Link href="/shorten"><button className='bg-green-500 rounded-lg shadow-lg p-3 py-1 font-bold'>Try Now</button></Link>
          <Link href="/github"><button className='bg-green-500 rounded-lg shadow-lg p-3 py-1 font-bold'>GitHub</button></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
