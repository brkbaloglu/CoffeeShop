import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillFacebook, AiOutlineTwitter, AiFillLinkedin, AiOutlineArrowRight, AiOutlineCopyrightCircle} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
function Footer() {
  return (
    <div className='h-[390px]'>
      <div className='grid-cols-3 grid mx-20 my-20 sticky top-full'>
      <div>
        <li className='flex items-center my-2 hover:translate-x-2 hover:underline font-semibold duration-300 cursor-pointer text-lg'><AiOutlineArrowRight/>Payment Options</li>
        <li className='flex items-center my-2 hover:translate-x-2 hover:underline font-semibold duration-300 cursor-pointer text-lg'><AiOutlineArrowRight/>Management</li>
        <li className='flex items-center my-2 hover:translate-x-2 hover:underline font-semibold duration-300 cursor-pointer text-lg'><AiOutlineArrowRight/>Business Partners</li>
        <li className='flex items-center my-2 hover:translate-x-2 hover:underline font-semibold duration-300 cursor-pointer text-lg'><AiOutlineArrowRight/>Customer service</li>
        <li className='flex items-center my-2 hover:translate-x-2 hover:underline font-semibold duration-300 cursor-pointer text-lg'><AiOutlineArrowRight/>Protection of Personal Data</li>
      </div>
      <div className='flex items-center justify-center flex-col'>
        <Link to="/" className='mx-4 text-xl hover:underline flex items-center p-1 rounded-xl'><AiOutlineArrowRight/>Home</Link>
        <Link to="about" className='mx-4 text-xl hover:underline flex items-center p-1 rounded-xl'><AiOutlineArrowRight/>About</Link>
        <Link to="coffee" className='mx-4 text-xl hover:underline flex items-center p-1 rounded-xl'><AiOutlineArrowRight/>Coffee</Link>
        <Link to="gallery" className='mx-4 text-xl hover:underline flex items-center p-1 rounded-xl'><AiOutlineArrowRight/>Gallery</Link>
        <Link to="products" className='mx-4 text-xl hover:underline flex items-center p-1 rounded-xl'><AiOutlineArrowRight/>Products</Link>
        <Link to="reviews" className='mx-4 text-xl hover:underline flex items-center p-1 rounded-xl'><AiOutlineArrowRight/>Reviews</Link>
        <Link to="contact" className='mx-4 text-xl hover:underline flex items-center p-1 rounded-xl'><AiOutlineArrowRight/>Contact</Link>
      </div>
      <div className='flex items-center justify-center'>
        <AiFillFacebook size={40} className='px-1 cursor-pointer hover:bg-white hover:text-black rounded-md'/>
        <AiOutlineTwitter size={40} className='px-1 cursor-pointer hover:bg-white hover:text-black rounded-md'/>
        <BsWhatsapp size={40} className='px-1 cursor-pointer hover:bg-white hover:text-black rounded-md'/>
        <AiFillLinkedin size={40} className='px-1 cursor-pointer hover:bg-white hover:text-black rounded-md'/>
      </div>
      </div>
      <div className='flex items-center bg-white text-black py-2 px-10'>
        <AiOutlineCopyrightCircle size={25} className='mr-4'/>
        <p className=' text-black text-lg'>Copyright 2023 | All rights reserved.</p>
      </div>
      
    </div>
  )
}

export default Footer