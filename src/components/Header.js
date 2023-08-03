import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='flex items-center justify-center py-6 '>
      <div>
      <Link to="/" className='mx-4 text-xl hover:bg-white hover:text-black p-2 rounded-xl'>Home</Link>
      <Link to="about" className='mx-4 text-xl hover:bg-white hover:text-black p-2 rounded-xl'>About</Link>
      <Link to="coffee" className='mx-4 text-xl hover:bg-white hover:text-black p-2 rounded-xl'>Coffee</Link>
      <Link to="gallery" className='mx-4 text-xl hover:bg-white hover:text-black p-2 rounded-xl'>Gallery</Link>
      <Link to="products" className='mx-4 text-xl hover:bg-white hover:text-black p-2 rounded-xl'>Products</Link>
      <Link to="reviews" className='mx-4 text-xl hover:bg-white hover:text-black p-2 rounded-xl'>Reviews</Link>
      <Link to="contact" className='mx-4 text-xl hover:bg-white hover:text-black p-2 rounded-xl'>Contact</Link>
      </div>
    </div>
  )
}

export default Header