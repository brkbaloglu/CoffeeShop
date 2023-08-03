import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='bg-[url("https://images.pexels.com/photos/129207/pexels-photo-129207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")] h-[850px] bg-cover bg-center'>
      <div className='flex items-center flex-col pt-20'>
      <h1 className='text-2xl font-bold'>Welcome to Our Coffee Shop</h1>
      <p className='text-xl my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dolore?</p>
      <Link to="coffee" className='bg-black text-white p-4  hover:bg-white hover:text-black   '>See Our Menu</Link>
      </div>
    </div>
  )
}

export default Home